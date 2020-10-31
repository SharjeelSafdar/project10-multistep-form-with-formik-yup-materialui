import React, { FC, useState } from 'react';
import { Container } from '@material-ui/core';
import { SignInForm } from '../signin/SignInForm';
import { SignUpForm } from '../signup/SignUpForm';

export const App: FC = () => {
	const [activeForm, setActiveForm] = useState(1);
	return (
		<Container maxWidth="xs">
			{(activeForm === 0)
				? <SignInForm setActiveForm={setActiveForm} />
				: <SignUpForm setActiveForm={setActiveForm} />
			}
		</Container>
	);
};