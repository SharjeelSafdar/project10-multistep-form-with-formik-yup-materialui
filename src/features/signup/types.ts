export interface SignUpFormProps {
	setActiveForm: React.Dispatch<React.SetStateAction<number>>;
};

export enum Qualification {
	MATRICULATION = 'Matriculation',
	INTERMEDIATE = 'Intermediate',
	GRADUATION = 'Graduation',
	MASTERS = 'Masters',
};

export interface StepOneValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export interface StepTwoValues {
	mobile: string;
	address: string;
	occupation: string;
};

export interface StepThreeValues {
	qualification: Qualification | '';
	lastAttendedInstitute: string;
};

export type SignUpFormValues = StepOneValues & StepTwoValues & StepThreeValues;