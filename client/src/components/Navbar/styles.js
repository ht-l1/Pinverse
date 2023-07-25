import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#282828',
    // backgroundColor: '#181818',
    [themeInstance.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    color: themeInstance.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [themeInstance.breakpoints.down('sm')]: {
      width: 'auto',
    },
    '& .MuiButton-containedPrimary': {
      backgroundColor: '#1A4C8B', }
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [themeInstance.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: themeInstance.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}))