import { makeStyles } from '@mui/styles';

// fixing the new error: themeXXX not a function
// import { ThemeProvider } from '@mui/material/styles';
// const themeInstance = ThemeProvider();

export default makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));