import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post'

// material-ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';


import CreatePost from '../../components/CreatePost/CreatePost'
const SearchPosts = () => <div>Search posts</div>


const Bootcamp = ({ bootcamp }) => {
  console.log(bootcamp);
  if (!bootcamp) {
    return <h1>not bootcamp on the store</h1>
  }

  return (
    <section className='bootcampView'>
      <h1>{bootcamp.title}</h1>
      <h4>{bootcamp.weeksDuration} Semanas</h4>
      <div className='posts'>
        {bootcamp.posts.map(post => (
          <Post data={post} key={post._id} />
        ))}
      </div>
      <CreatePost />
      {/* //////////////// */}
      {/* <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label='Recipe' className={classes.avatar}>
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
        <CardActions className={classes.actions} disableActionSpacing>
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
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
              minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring
              often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more.
              (Discard any mussels that don’t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card> */}
      {/* //////////////// */}
      <SearchPosts />
    </section>
  );
}

export default connect((stateRedux, props) => ({ bootcamp: stateRedux.bootcamps.find(el => String(el._id) === props.id) }))(Bootcamp);
