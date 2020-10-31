import React, { FC } from 'react';
import { Grid, Typography, Button, Container, CircularProgress, Link } from '@material-ui/core';
import { Formik, Form } from 'formik';

import { CustomTextField } from '../../components/CustomTextField/CustomTextField';
import { signInFormSchema } from './validationSchemas';
import { sleep } from '../../utils';
import { useStyles } from './signInForm.styles';
import { SignInFormValues, SignInFormProps } from './types';

const initialValues: SignInFormValues = {
	email: '',
	password: '',
};

export const SignInForm: FC<SignInFormProps> = ({ setActiveForm }) => {
	const classes = useStyles();

	const onSubmit = async (values: SignInFormValues) => {
		await sleep(3000);
		console.log(values);
	};
	const linkHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		setActiveForm(1);
	};

	return (
		<Container className={classes.container} data-testid="sign-in-form">
			<Typography variant="h4" component="h1" align="center" className={classes.heading}>
				Sign In
			</Typography>
			<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signInFormSchema}>
				{({ isSubmitting, isValid, dirty }) => (
					<Form>
						<Grid container justify="center" spacing={1}>
							<Grid item xs={12}>
								<CustomTextField name="email" label="Email" fullWidth autoFocus data-testid="test-id" />
							</Grid>
							<Grid item xs={12}>
								<CustomTextField name="password" label="Password" fullWidth type="password" />
							</Grid>
							<Grid item xs={12}>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									fullWidth
									startIcon={isSubmitting ? <CircularProgress size="1rem" className={classes.circular} /> : null}
									disabled={!dirty && !isValid}
									data-testid="sign-in-btn"
								>
									{isSubmitting ? 'Signing In' : 'Sign In'}
								</Button>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
			<Link href="#" onClick={linkHandler} className={classes.link}>
				Don't have an account? Sign up here.
			</Link>
		</Container>
	);
};