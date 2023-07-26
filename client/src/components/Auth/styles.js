import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  paper: {
    marginTop: themeInstance.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: themeInstance.spacing(2),
    backgroundColor: '#181818',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#B3B3B3" // Set the outline color to white
    },
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
    background: 'linear-gradient(135deg, #311B92, #009688)',
  },
  googleButton: {
    marginBottom: themeInstance.spacing(2),
  },
}))