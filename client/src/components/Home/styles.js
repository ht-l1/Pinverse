import { makeStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [themeInstance.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));