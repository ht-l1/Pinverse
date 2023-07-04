import { makeStyles } from '@mui/styles';

// fixing the new error: themeXXX not a function
import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  paper: {
    marginTop: themeInstance.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: themeInstance.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: themeInstance.spacing(1),
    },
  },
  avatar: {
    margin: themeInstance.spacing(1),
    backgroundColor: themeInstance.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: themeInstance.spacing(3),
  },
  submit: {
    margin: themeInstance.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: themeInstance.spacing(2),
  },
}));