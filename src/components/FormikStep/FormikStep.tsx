import React, { FC } from 'react';
import { FormikConfig } from 'formik';

import { SignUpFormValues } from '../../features/signup/types';

export interface FormikStepProps extends Pick<FormikConfig<SignUpFormValues>, 'children' | 'validationSchema'> {
	label: string;
};

export const FormikStep: FC<FormikStepProps> = ({ children }) => (
	<>{children}</>
);