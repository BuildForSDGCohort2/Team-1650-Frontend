import React, { useState, useEffect } from 'react'
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
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const Home = () => {
  const classes = useStyles()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    // (async () => {
    //   const result = await secureGetRequest(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)

    // })()
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
            {/* <iframe id="player" type="text/html" width="640" height="390"
              src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
              frameborder="0"></iframe> */}
          </div>
          <VideoLists searchResults={searchResults} />
        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>
    </div>
  )
}

export default Home
