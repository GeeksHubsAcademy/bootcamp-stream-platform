import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post'

import CreatePost from '../../components/CreatePost/CreatePost'
const SearchPosts = () => <div>Search posts</div>

// material-ui
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }



const Bootcamp = ({ bootcamp }) => {
  console.log(bootcamp);
  if (!bootcamp) {
    return <h1>not bootcamp on the store</h1>
  }

  return (
    <section className='bootcampView'>
      <h1>{bootcamp.title}</h1>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className='post'>
        {bootcamp.posts.map(post => (
          <Post data={post} key={post._id} />
        ))}
      </div>
      <CreatePost />

      {/* <Card className='card'>
        <CardHeader
          avatar={
            <Avatar aria-label='Recipe' className='avatar'>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia className={classes.media} image='/static/images/cards/paella.jpg' title='Paella dish' />
        <CardContent>
          <Typography component='p'>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className='actions' disableActionSpacing>
          <IconButton aria-label='Add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='Share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='Show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large....
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute...
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card> */}

      <SearchPosts />
    </section>
  );
}

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
