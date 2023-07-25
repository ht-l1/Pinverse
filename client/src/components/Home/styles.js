import { makeStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor: '#181818',
    // color: '#B3B3B3',
    color: '#B3B3B3',
    '& .MuiButton-containedPrimary': {
      backgroundColor: '#1A4C8B', 
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#B3B3B3" // Set the outline color to white
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    color: '#B3B3B3',
    backgroundColor: '#181818',
  },
  gridContainer: {
    [themeInstance.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));