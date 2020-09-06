import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 330
  }
})

export default function VideoCard ({ title, imageURL, description }) {
  const classes = useStyles()

  return (
    <Grid item xs={5}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="180"
            image={imageURL}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          Play
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
