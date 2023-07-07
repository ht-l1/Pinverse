import { makeStyles } from '@mui/styles';

// fixing the new error: themeSpacing not a function
// import { ThemeProvider } from '@mui/system';
// import { ThemeProvider } from '@mui/material/styles';
// const themeInstance = ThemeProvider();

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
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