import { makeStyles } from '@mui/styles';

// fixing the new error: themeSpacing not a function
import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: themeInstance.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));