import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import VideoCard from '../common/VideoCard'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})
const testArr = [
  {
    kind: 'youtube#searchResult',
    etag: 'e13koQwe38a-nuRrZgb23iKgACM',
    id: {
      kind: 'youtube#video',
      videoId: 'fHI8X4OXluQ'
    },
    snippet: {
      publishedAt: '2019-11-29T05:00:08Z',
      channelId: 'UCF_fDSgPpBQuh1MsUTgIARQ',
      title: 'The Weeknd - Blinding Lights (Official Audio)',
      description: 'Official audio for The Weeknd "Blinding Lights" - available everywhere now: http://theweeknd.co/blindinglightsYD ▻Subscribe to The Weeknd on YouTube: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/fHI8X4OXluQ/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'TheWeekndVEVO',
      liveBroadcastContent: 'none',
      publishTime: '2019-11-29T05:00:08Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'fcBdSBOV7eXR4toYPeBViFA7GY4',
    id: {
      kind: 'youtube#video',
      videoId: 'XwxLwG2_Sxk'
    },
    snippet: {
      publishedAt: '2020-03-01T18:09:07Z',
      channelId: 'UCNqFDjYTexJDET3rPDrmJKg',
      title: 'The Weeknd - Blinding Lights (Lyrics)',
      description: 'Follow 7clouds on Spotify : http://bit.ly/7CLOUDS The Weeknd - Blinding Lights (Lyrics) ⏬ Download / Stream: http://theweeknd.co/blindinglightsYD Turn on ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/XwxLwG2_Sxk/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/XwxLwG2_Sxk/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/XwxLwG2_Sxk/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '7clouds',
      liveBroadcastContent: 'none',
      publishTime: '2020-03-01T18:09:07Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'ox9tZw99cC29JPlVrG2jpbyWZpU',
    id: {
      kind: 'youtube#video',
      videoId: 'zFzwgFO2bsg'
    },
    snippet: {
      publishedAt: '2020-08-31T00:04:14Z',
      channelId: 'UCxAICW_LdkfFYwTqTHHE0vg',
      title: 'The Weeknd Performs &quot;Blinding Lights&quot; | 2020 MTV VMAs',
      description: 'The Weeknd performs "Blinding Lights" at the 2020 Video Music Awards. The performance took place at Edge at Hudson Yards, check out more details here: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/zFzwgFO2bsg/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/zFzwgFO2bsg/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/zFzwgFO2bsg/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'MTV',
      liveBroadcastContent: 'none',
      publishTime: '2020-08-31T00:04:14Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'iTB52bEdhzMlLL6JfmKBtL0N0xY',
    id: {
      kind: 'youtube#video',
      videoId: 'ozSQPSnQOSQ'
    },
    snippet: {
      publishedAt: '2019-12-19T16:00:07Z',
      channelId: 'UCvsP9lIfjZrEPVnAYrHURGA',
      title: 'The Weeknd &quot;Blinding Lights&quot; (Music Video)',
      description: 'Subscribe, Like, Comment!',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ozSQPSnQOSQ/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ozSQPSnQOSQ/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/ozSQPSnQOSQ/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Pop Stars Inc.',
      liveBroadcastContent: 'none',
      publishTime: '2019-12-19T16:00:07Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'VFpy6tK9hs6jKxRDiYkfI37eVRs',
    id: {
      kind: 'youtube#video',
      videoId: '4NRXx6U8ABQ'
    },
    snippet: {
      publishedAt: '2020-01-21T18:00:10Z',
      channelId: 'UCF_fDSgPpBQuh1MsUTgIARQ',
      title: 'The Weeknd - Blinding Lights',
      description: 'Official music video for The Weeknd "Blinding Lights" - available everywhere now: http://theweeknd.co/blindinglightsYD ▻Subscribe to The Weeknd on ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'TheWeekndVEVO',
      liveBroadcastContent: 'none',
      publishTime: '2020-01-21T18:00:10Z'
    }
  }
]

const VideoLists = ({ searchResults }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>

      {
        searchResults &&
        searchResults.map((item, index) => {
          const { title, thumbnails, description } = item.snippet
          const { videoId } = item.id
          const { url } = thumbnails.medium
          return (
            <div key={index}>
              <p>Results</p>
              <VideoCard
                title={title}
                imageURL={url}
                description={description}
                videoId={videoId}
              />
            </div>
          )
        })
      }
    </Grid>
  )
}

export default VideoLists
