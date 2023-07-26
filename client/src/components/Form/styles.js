import { makeStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: themeInstance.spacing(1),
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#B3B3B3" // Set the outline color to white
    },
    '& .MuiButton-containedPrimary': {
      background: 'linear-gradient(135deg, #69379c, #2196F3)',
      color: '#B3B3B3',
      borderRadius: '100px',
      padding: '2px 16px',
    },
    '& .MuiButton-containedSecondary': {
      backgroundColor: '#424242', 
      borderRadius: '100px',
    },
  },
  paper: {
    padding: themeInstance.spacing(2),
    backgroundColor: '#181818',
    color: '#B3B3B3',
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
}))