export interface SignInFormProps {
	setActiveForm: React.Dispatch<React.SetStateAction<number>>;
};

export interface SignInFormValues {
	email: string;
	password: string;
};