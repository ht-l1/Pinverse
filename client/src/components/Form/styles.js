import { makeStyles } from '@mui/styles';

// fixing the new error: themeSpacing not a function
import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: themeInstance.spacing(1),
    },
  },
  paper: {
    padding: themeInstance.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));