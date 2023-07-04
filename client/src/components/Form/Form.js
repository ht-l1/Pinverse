import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import {createPost, updatePost} from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    // reset the form back to CreateNew after submit a new/update post
    const clear = () => {
      setCurrentId(0);
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      }
    };

    if (!user?.result?.name) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own posts or like other's posts.
          </Typography>
        </Paper>
      );
    }
  
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6" style={{ fontWeight: 'bold', fontFamily: 'cursive', color: '#FF69B4' }}>{currentId ? `Edit "${post.title}"` : 'New Post :)'}</Typography>
          <TextField name="creator" variant="outlined" label="What's your name?" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="title" variant="outlined" label="Title for just a few words" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="message" variant="outlined" label="Tell me more about everything!" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
         
          <div className={classes.buttonContainer}>         
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" style={{ width: '100%', height: '80%', marginRight: '0.5vw' }}>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} style={{ width: '100%', height: '80%', marginLeft: '0.5vw'  }}>Clear</Button>
          </div>
        </form>
      </Paper>
    );
  };
  
  export default Form;