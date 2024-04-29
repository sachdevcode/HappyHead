import { FormAction, FormState } from "./type";

export const initialStateFormState: FormState = {
  name: "",
  lastName: "",
  dob: "",
  favoriteFruit: "",
  errors: {
    name: "",
    lastName: "",
    dob: "",
    favoriteFruit: "",
  },
};

export const formReducer = (
  state: FormState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };

    case "RESET":
      return initialStateFormState;
    default:
      return state;
  }
};
