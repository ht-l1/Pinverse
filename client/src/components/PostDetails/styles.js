import { makeStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
    backgroundColor: '#181818',
    color: '#B3B3B3',
  },
  card: {
    display: 'flex',
    width: '100%',
    color: '#B3B3B3',
    [themeInstance.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#B3B3B3" // Set the outline color to white
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
    color: '#B3B3B3',
  },
  imageSection: {
    marginLeft: '20px',
    [themeInstance.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [themeInstance.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
    backgroundColor: '#181818',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // '& .MuiButton-containedPrimary': {
    //   backgroundColor: '#1A4C8B', 
    // },
    '& .MuiButton-containedPrimary': {
      background: 'linear-gradient(135deg, #7B1FA2, #2196F3)',
      color: '#B3B3B3',
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));