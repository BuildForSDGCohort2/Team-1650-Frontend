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
  },
  videoWrapper: {
    marginLeft: '1rem',
    marginTop: '3rem'
  }
})

const Home = () => {
  const classes = useStyles()
  const [searchResults, setSearchResults] = useState([])
  const { state: { videoId } } = useContext(HomeContext)
  useEffect(() => {
    (async () => {
      getUserMediaStream()
    })()
  }, [])

  const getUserMediaStream = () => {
    const mediaStreamConstraints = {
      video: {
        maxWidth: 120,
        width: 90,
        facingMode: 'user',
        resizeMode: 'crop-and-scale'
      },
      audio: true
    }

    // Video element where stream will be placed.
    const localVideo = document.getElementById('currentUser')

    // Local stream that will be reproduced on the video.
    let localStream

    // Handles success by adding the MediaStream to the video element.
    function gotLocalMediaStream (mediaStream) {
      localStream = mediaStream
      localVideo.srcObject = mediaStream
    }

    // Handles error by logging a message to the console with the error message.
    function handleLocalMediaStreamError (error) {
      console.log('navigator.getUserMedia error: ', error)
    }

    // Initializes media stream.
    navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
      .then(gotLocalMediaStream).catch(handleLocalMediaStreamError)
  }

  const handleVideoSearch = async (searchText) => {
    const result = await secureGetRequest(`http://localhost:5000?searchText=${searchText}`)
    if (result) {
      const { status, data } = result
      if (status === 200 && data) {
        setSearchResults(data)
      }
    }
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <div className={classes.videoWrapper}>
            <video id="currentUser" autoPlay playsinline></video>
          </div>
        </Grid>
        <Grid className={classes.centerColumn} item xs={6}>
          <EnhancedSearch
            searchPlaceholder="Search for song"
            onSearch={(searchText) => handleVideoSearch(searchText)}
          />
          <div>
            <iframe id="player" type="text/html" width="640" height="390"
              src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
              frameBorder="0">
            </iframe>
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
