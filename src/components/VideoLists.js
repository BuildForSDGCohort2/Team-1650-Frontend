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
    etag: 'tVEufai4yE6mcq47RYgzbpMwr-s',
    id: {
      kind: 'youtube#video',
      videoId: 'KtCFR3eOc6M'
    },
    snippet: {
      publishedAt: '2019-05-16T19:01:16Z',
      channelId: 'UCeyVpCizJWiIt1ttW-_YYmQ',
      title: 'JR - A.D.A.D (Official Video)',
      description: 'Stream/Download A.D.A.D! by Jrdarappr here: https://linktr.ee/Jrdarappr Follow JR https://www.instagram.com/jrdarappr/ https://twitter.com/Jrdarapper Shot by ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/KtCFR3eOc6M/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/KtCFR3eOc6M/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/KtCFR3eOc6M/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Jrdarapper',
      liveBroadcastContent: 'none',
      publishTime: '2019-05-16T19:01:16Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'WIUiRd6ZuTtWTmTZGSXJInF8YWM',
    id: {
      kind: 'youtube#video',
      videoId: 'VsDowlv6ay4'
    },
    snippet: {
      publishedAt: '2019-02-12T05:27:57Z',
      channelId: 'UCgOWaGYuRMYPeldT4p5tFVw',
      title: 'ટેસ્ટી અડદ ની દાળ બનાવવાની સરળ રીત ||એક વાર જરૂર થી બનાવજો ||Adad Ni Dal',
      description: 'TestY Adad Banavvani Rit ||Parfect Village Stlye Adad Ni Dal Banavvani Saral Rit||Kathiyawadi Adad Ni Dal|| Urad dal:1/2cup Water:11/4cup Oil:2tbsp Salt:1tsp ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/VsDowlv6ay4/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/VsDowlv6ay4/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/VsDowlv6ay4/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Gujarati Kitchen',
      liveBroadcastContent: 'none',
      publishTime: '2019-02-12T05:27:57Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'm4GuwftKWQFxlbRkaEGQEoWZvmM',
    id: {
      kind: 'youtube#video',
      videoId: 'u00cIV9Qqqw'
    },
    snippet: {
      publishedAt: '2018-02-08T04:08:59Z',
      channelId: 'UCMKAedvepptrxXZ62KEIGWg',
      title: 'ADAD - DANGER US',
      description: "\"Danger Us\" From ADAD and Tensei's EP \"Danger Us\" Dangerusmusic Produced by Tenseihttps://soundcloud.com/ realtensei Performed by: ADAD and Yaw ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/u00cIV9Qqqw/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/u00cIV9Qqqw/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/u00cIV9Qqqw/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'dirty science',
      liveBroadcastContent: 'none',
      publishTime: '2018-02-08T04:08:59Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'vOWev5XN0r14p1wNPKaCZL0ppQ4',
    id: {
      kind: 'youtube#video',
      videoId: '0x0gmQXMBSs'
    },
    snippet: {
      publishedAt: '2019-06-19T02:20:34Z',
      channelId: 'UCvrnryOhdbTE7rI4MoHjgwA',
      title: 'wéranté bi diekhna si mirasse bi /HILMOU ADAD Part 2/ Happyniass TV - Juin 2019',
      description: 'La PREUVE !MIRASS BOU AMOUL SIKI SAKA AVEC HILMOU ADADE-la connaissance des chiffres/ Happyniass TV.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/0x0gmQXMBSs/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/0x0gmQXMBSs/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/0x0gmQXMBSs/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Happyniass TV',
      liveBroadcastContent: 'none',
      publishTime: '2019-06-19T02:20:34Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'IhvLKoXahK15n-FrB5M2IDbbPAI',
    id: {
      kind: 'youtube#video',
      videoId: 'Hf8tIe5ZX-Q'
    },
    snippet: {
      publishedAt: '2018-10-29T11:00:03Z',
      channelId: 'UCp6_KuNhT0kcFk-jXw9Tivg',
      title: 'BRAN &amp; ADAD - Stranger (Magic Free Release)',
      description: 'Stream/Download: https://fanlink.to/7DY Magic Giftaways: https://lnk.to/magicgiveaway Usage Policy: https://magicmusicllc.com/ ❤️ Support Us on Patreon: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Hf8tIe5ZX-Q/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Hf8tIe5ZX-Q/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/Hf8tIe5ZX-Q/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Magic Music',
      liveBroadcastContent: 'none',
      publishTime: '2018-10-29T11:00:03Z'
    }
  }
]

const VideoLists = ({ searchResults }) => {
  console.log(searchResults)
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      {
        searchResults &&
        searchResults.map((item, index) => {
          const { title, thumbnails, description } = item.snippet
          const { url } = thumbnails.medium
          return (
            <VideoCard key={index} title={title} imageURL={url} description={description} />
          )
        })
      }
    </Grid>
  )
}

export default VideoLists
