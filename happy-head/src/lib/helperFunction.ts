import { MAX_LENGTH, MIN_LENGTH } from "./constant";
import { Errors, IsValidName, State } from "./type";

export function validateInput(state: State): Errors {
  const errors: Errors = {};

  const validateField = (
    field: keyof State,
    fieldName: string,
    errorMessage: string
  ) => {
    const isValidName: IsValidName = (name) => /^[a-zA-Z\s-]+$/.test(name);

    if (!state[field].trim()) {
      errors[field] = `${fieldName} is required`;
    } else if (
      state[field].trim().length < MIN_LENGTH ||
      state[field].trim().length > MAX_LENGTH ||
      !isValidName(state[field].trim())
    ) {
      errors[field] = errorMessage;
    }
  };

  validateField(
    "name",
    "Name",
    `Name must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters long and should contain only letters, spaces, or hyphens`
  );
  validateField(
    "lastName",
    "Last Name",
    `Last Name must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters long and should contain only letters, spaces, or hyphens`
  );

  if (!state.dob.trim()) {
    errors.dob = "DOB is required";
  } else {
    const selectedYear = new Date(state.dob).getFullYear();
    const currentYear = new Date().getFullYear();
    if (selectedYear >= currentYear) {
      errors.dob = "DOB must be in the past";
    }
  }

  const isValidFavoriteFruit = (favoriteFruit: string): boolean => {
    const regex = /^[a-zA-Z\s-]+$/;
    return regex.test(favoriteFruit);
  };

  if (!state.favoriteFruit.trim()) {
    errors.favoriteFruit = "Favorite Fruit is required";
  } else if (
    !isValidFavoriteFruit(state.favoriteFruit) ||
    state.favoriteFruit.trim().length < MIN_LENGTH ||
    state.favoriteFruit.trim().length > MAX_LENGTH
  ) {
    errors.favoriteFruit = "enter only letters in fruit";
  }

  return errors;
}
