export type FormState = {
  name: string;
  lastName: string;
  dob: string;
  favoriteFruit: string;
  errors: {
    name: string;
    lastName: string;
    dob: string;
    favoriteFruit: string;
  };
};

export type FormAction =
  | { type: "CHANGE"; field: string; value: string }
  | { type: "VALIDATE" }
  | { type: "RESET" };

export interface Errors {
  name?: string;
  lastName?: string;
  dob?: string;
  favoriteFruit?: string;
}

export interface State {
  name: string;
  lastName: string;
  dob: string;
  favoriteFruit: string;
}

export interface Errors {
  name?: string;
  lastName?: string;
  dob?: string;
  favoriteFruit?: string;
}

export type IsValidName = (name: string) => boolean;

export interface ApiResponse {
  success: boolean;
  statusCode: number;
  slug: string;
}

export interface ModalProps {
  onClose: () => void;
  title: string;
  content: string;
}
export interface ModalRef {
  openModal: () => void;
}

export type InputProps = {
  label: string;
  id: string;
  name: string;
  value?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
};

export interface HeadingProps {
  text: string;
}

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  text: string;
  loading?: boolean;
}
