import React, { FC } from 'react';
import { Typography, Container, MenuItem, Grid, Link } from '@material-ui/core';

import { CustomTextField } from '../../components/CustomTextField/CustomTextField';
import { FormikStepper, FormikStep } from '../../components';
import { SignUpFormProps, SignUpFormValues, Qualification } from './types';
import { stepOneValidation, stepTwoValidation, stepThreeValidation } from './validationSchemas';
import { sleep } from '../../utils';
import { useStyles } from './signUpForm.styles';

const initialValues: SignUpFormValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	mobile: '',
	address: '',
	occupation: '',
	qualification: '',
	lastAttendedInstitute: '',
};

export const SignUpForm: FC<SignUpFormProps> = ({ setActiveForm }) => {
	const classes = useStyles();

	const onSubmit = async (values: SignUpFormValues) => {
		await sleep(3000);
		console.log(values);
	};
	const linkHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		setActiveForm(0);
	};

	return (
		<Container className={classes.container}>
			<Typography variant="h4" component="h1" align="center" className={classes.heading}>
				Sign Up
			</Typography>
			<FormikStepper initialValues={initialValues} onSubmit={onSubmit}>
				<FormikStep label="General" validationSchema={stepOneValidation}>
					<Grid container spacing={1} justify="center">
						<Grid item xs={12} md={6}>
							<CustomTextField name="firstName" label="First Name" fullWidth autoFocus />
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomTextField name="lastName" label="Last Name" fullWidth />
						</Grid>
						<Grid item xs={12}>
							<CustomTextField name="email" label="Email" fullWidth />
						</Grid>
						<Grid item xs={12}>
							<CustomTextField name="password" label="Password" fullWidth type="password" />
						</Grid>
						<Grid item xs={12}>
							<CustomTextField name="confirmPassword" label="Confirm Password" fullWidth type="password" />
						</Grid>
					</Grid>
				</FormikStep>

				<FormikStep label="Personal" validationSchema={stepTwoValidation}>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							<CustomTextField name="mobile" label="Mobile" fullWidth type="number" required={false} />
						</Grid>
						<Grid item xs={12}>
							<CustomTextField name="address" label="Address" fullWidth required={false} />
						</Grid>
						<Grid item xs={12}>
							<CustomTextField name="occupation" label="Occupation" fullWidth />
						</Grid>
					</Grid>
				</FormikStep>

				<FormikStep label="Education" validationSchema={stepThreeValidation}>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12}>
							<CustomTextField name="qualification" label="Qualification" select fullWidth>
								{Object.values(Qualification).map(item => (
									<MenuItem key={item} value={item}>{item}</MenuItem>
								))}
							</CustomTextField>
						</Grid>
						<Grid item xs={12}>
							<CustomTextField name="lastAttendedInstitute" label="Last Attended Institute" fullWidth />
						</Grid>
					</Grid>
				</FormikStep>
			</FormikStepper>
			<Link href="#" onClick={linkHandler} className={classes.link}>
				Already have an account? Sign in here.
			</Link>
		</Container>
	);
};