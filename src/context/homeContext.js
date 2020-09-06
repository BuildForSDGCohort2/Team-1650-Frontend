import createDataContext from './createDataContext'

const homeReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'updatevideoId': return {
      ...state,
      videoId: payload
    }
  }
}

const updateVideoId = dispatch => {
  return (videoId) => {
    dispatch({ type: 'updatevideoId', payload: videoId })
  }
}

export const { Context, Provider } = createDataContext(
  homeReducer,
  {
    updateVideoId
  },
  {
    videoId: 'M7lc1UVf-VE'
  }
)
