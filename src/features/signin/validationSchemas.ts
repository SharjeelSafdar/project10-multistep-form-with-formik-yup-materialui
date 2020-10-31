import * as Yup from 'yup';
import { SignInFormValues } from './types';

export const signInFormSchema = Yup.object().shape<SignInFormValues>({
	email: Yup.string()
		.email('Please provide a valid email address.')
		.required('Required'),
	password: Yup.string()
		.required('Password is required.')
		.min(8, 'Must have atleast 8 characters.'),
});