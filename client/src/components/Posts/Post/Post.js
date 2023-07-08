// imported useState for delete comfirmation box
import React from 'react';
// imported Dialog, DialogActions, DialogTitle for delete comfirmation box
import { Card, CardActions, CardContent, CardMedia, Button, ButtonBase, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// import InfoIcon from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    // START of trying to implete the delete message
    // const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    // const handleDelete = () => {
    //   dispatch(deletePost(post._id));
    //   setShowDeleteConfirmation(false);
    // };

    // const handleCancel = () => {
    //   setShowDeleteConfirmation(false);
    // };

    // END of delete message


    const Likes = () => {
      if (post?.likes?.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
    };
  
    const openPost = (e) => {
      // dispatch(getPost(post._id, history));
  
      history.push(`/posts/${post._id}`);
    };
  
    return (
      <Card className={classes.card} raised elevation={6}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id);
              }}
              style={{ color: 'white' }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          )}
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
          </CardContent>
        </ButtonBase>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
            <Likes />
          </Button>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize="small" /> &nbsp; Delete
            </Button>
          )}
        </CardActions>
      </Card>
    );
  };
  
  export default Post;




  
      
          // updated delete code to show the dialogue
          // <Button size="small" color="secondary" onClick={() => setShowDeleteConfirmation(true)}>
          //   <DeleteIcon fontSize="small" /> Delete

          // <Dialog open={showDeleteConfirmation} onClose={handleCancel}>
          //       <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
          //       <DialogActions>
          //         <Button onClick={handleCancel}>Cancel</Button>
          //         <Button onClick={handleDelete} color="primary" autoFocus>
          //           Delete
          //         </Button>
          //       </DialogActions>
          //     </Dialog>


          // </Button>
