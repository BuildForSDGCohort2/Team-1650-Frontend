import React, { useContext } from 'react'
import { Context as HomeContext } from '../context/homeContext'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 330,
    marginBottom: '1rem'
  }
})

export default function VideoCard ({ title, imageURL, description, videoId }) {
  const classes = useStyles()
  const { updateVideoId } = useContext(HomeContext)

  return (
    <Grid item xs={12}>
      <Card className={classes.root} onClick={() => updateVideoId(videoId)}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="180"
            image={imageURL}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom component="p">
              {title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
