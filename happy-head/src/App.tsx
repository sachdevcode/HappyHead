import { useCallback, useReducer, useRef, useState } from "react";
import Input from "./Components/Input";
import CustomModal from "./Components/Modal";
import { formReducer, initialStateFormState } from "./lib/reducer";
import Button from "./Components/Button";
import Heading from "./Components/Heading";
import { validateInput } from "./lib/helperFunction";
import { Errors, State, ModalRef } from "./lib/type";
import postData from "./service/postForm";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialStateFormState);
  const [error, setError] = useState<Errors>();
  const [slug, setSlug] = useState<string>("");
  const [isLoading, setLoading] = useState(false);
  const modalRef = useRef<ModalRef>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError({});
    dispatch({ type: "CHANGE", field: name, value });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateInput(state);
    if (Object.keys(isValid).length === 0) {
      const data: State = {
        name: state.name,
        lastName: state.lastName,
        dob: state.dob,
        favoriteFruit: state.favoriteFruit,
      };
      setLoading(true);
      const submit = await postData(data);
      if (submit?.success && submit?.slug) {
        setLoading(false);
        setSlug(submit.slug);
        modalRef.current?.openModal();
        dispatch({ type: "RESET" });
      }
    } else {
      setLoading(false);
      setError(isValid);
    }
  };

  return (
    <>
      <div className="bg-blue h-screen flex justify-center items-center">
        <div className="py-8 px-6 max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
          <Heading text="User name Generator" />
          <p className="text-lg text-center text-gray mb-8">
            Create your unique name by filling this form
          </p>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Input
              id="name"
              label="Name"
              name="name"
              onChange={handleChange}
              value={state.name}
              error={error?.name}
              required={true}
              type="text"
            />
            <Input
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              value={state.lastName}
              error={error?.lastName}
              required={true}
              type="text"
            />
            <Input
              id="dob"
              label="DOB"
              name="dob"
              onChange={handleChange}
              value={state.dob}
              error={error?.dob}
              required={true}
              type="date"
            />
            <Input
              id="favoriteFruit"
              label="Favourite Fruit"
              name="favoriteFruit"
              onChange={handleChange}
              value={state.favoriteFruit}
              error={error?.favoriteFruit}
              required={true}
              type="text"
            />
            <Button
              className="bg-gray text-secondary"
              text="Create"
              loading={isLoading}
            />
          </form>
        </div>
      </div>
      <CustomModal
        ref={modalRef}
        onClose={() => console.log("Modal closed")}
        title="Generated User Name"
        content={slug}
      />
    </>
  );
}

export default App;
