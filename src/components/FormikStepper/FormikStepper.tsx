import React, { FC, Children, useState, ReactElement } from 'react';
import { Formik, Form, FormikConfig } from 'formik';
import { Stepper, Step, StepLabel, Grid, Button, CircularProgress, Box } from '@material-ui/core';

import { SignUpFormValues } from '../../features/signup/types';
import { FormikStepProps } from '../FormikStep/FormikStep';

export const FormikStepper: FC<FormikConfig<SignUpFormValues>> = ({ children, ...props }) => {
	const childrenArray = Children.toArray(children) as ReactElement<FormikStepProps>[];
	const [step, setStep] = useState(0);
	const [completed, setCompleted] = useState(false);
	const currentChild = childrenArray[step];

	const isLastStep = () => {
		return step === (childrenArray.length - 1);
	};
	return (
		<Formik
			{...props}
			validationSchema={currentChild.props.validationSchema}
			onSubmit={async (values, helpers) => {
				if (isLastStep()) {
					await props.onSubmit(values, helpers);
					setCompleted(true);
				} else {
					setStep(s => s + 1);
				}
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Stepper alternativeLabel activeStep={step}>
						{childrenArray.map((child, index) => (
							<Step key={child.props.label} completed={completed || step > index}>
								<StepLabel>{child.props.label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{currentChild}
					<Box marginTop={1}>
						<Grid container justify="center" spacing={1}>
							{step > 0
								? (
									<Grid item xs={6}>
										<Button
											onClick={() => {
												setStep(s => s - 1);
												setCompleted(false);
											}}
											variant="contained"
											color="primary"
											disabled={isSubmitting}
											fullWidth
										>
											Back
										</Button>
									</Grid>
								)
								: null
							}
							<Grid item xs={(step > 0) ? 6 : 12}>
								<Button
									startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
									disabled={isSubmitting}
									type="submit"
									color="primary"
									variant="contained"
									fullWidth
								>
									{isSubmitting ? 'Signing Up...' : isLastStep() ? 'Sign Up' : 'Next'}
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Form>
			)}
		</Formik>
	);
};