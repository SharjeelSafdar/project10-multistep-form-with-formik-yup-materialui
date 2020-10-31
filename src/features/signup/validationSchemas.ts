import * as Yup from 'yup';
import { StepOneValues, StepTwoValues, StepThreeValues, Qualification } from './types';
import { lowerCaseRegex, upperCaseRegex, numericRegex } from '../../utils';

export const stepOneValidation = Yup.object().shape<StepOneValues>({
	firstName: Yup.string()
		.min(2, 'Too short.')
		.max(15, 'Too long.')
		.required('Required.'),
	lastName: Yup.string()
		.min(2, 'Too short.')
		.max(15, 'Too long.')
		.required('Required.'),
	email: Yup.string()
		.lowercase('Must contain lowercases only.')
		.email('Provide a valid email address.')
		.required('Required.'),
	password: Yup.string()
		.matches(lowerCaseRegex, 'Must contain a lowercase letter.')
		.matches(upperCaseRegex, 'Must contain an uppercase letter.')
		.matches(numericRegex, 'Must contain a digit.')
		.min(8, 'Minimum 8 characters required.')
		.required('Required.'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Password must be the same.')
		.required('Required'),
});

export const stepTwoValidation = Yup.object().shape<StepTwoValues>({
	mobile: Yup.number(),
	address: Yup.string(),
	occupation: Yup.string().required('Required.')
});

export const stepThreeValidation = Yup.object().shape<StepThreeValues>({
	qualification: Yup.string()
		.oneOf([...Object.values(Qualification)] as const)
		.required('Required.'),
	lastAttendedInstitute: Yup.string().required('Required.'),
});