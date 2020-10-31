import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100vh',
		alignItems: 'center',
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
	heading: {
		marginBottom: theme.spacing(5),
	},
	circular: {
		color: theme.palette.common.white,
	},
	link: {
		marginTop: theme.spacing(1),
		fontSize: '0.8rem',
		textAlign: 'right',
		marginLeft: 'auto',
	},
}));