import React, { useState, useEffect, useContext } from 'react'
import { Context as HomeContext } from '../context/homeContext'
import VideoLists from './VideoLists'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import EnhancedSearch from '../common/EnhancedSearch'
import { secureGetRequest } from '../common/axios'

const useStyles = makeStyles({
  root: {
    marginTop: '2rem'
  },
  centerColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const Home = () => {
  const classes = useStyles()
  const [searchResults, setSearchResults] = useState([])
  const { state: { videoId } } = useContext(HomeContext)

  useEffect(() => {

  }, [])

  const handleVideoSearch = async (searchText) => {
    const result = await secureGetRequest(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchText}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    if (result) {
      const { status, data } = result
      if (status === 200 && data) {
        setSearchResults(data.items)
      }
    }
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>

        </Grid>
        <Grid className={classes.centerColumn} item xs={6}>
          <EnhancedSearch
            searchPlaceholder="Search for song"
            onSearch={(searchText) => handleVideoSearch(searchText)}
          />
          <div>
            <iframe id="player" type="text/html" width="640" height="390"
              src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
              frameborder="0"></iframe>
          </div>
        </Grid>
        <Grid item xs={3}>
          <VideoLists searchResults={searchResults} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
