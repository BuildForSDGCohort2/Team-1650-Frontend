import axios from 'axios'

export const securePostRequest = async (subRoute, body) => {
  let result
  try {
    result = await axios.post(subRoute, body)
  } catch (error) {
    const { statusCode, message } = error.response.data
    return { statusCode, message }
  }

  if (result && result.data) {
    const { statusCode, message } = result.data
    return { statusCode, message }
  }
}

export const secureGetRequest = async (subRoute, query = {}) => {
  return axios.get(subRoute, {
    params: query
  })
    .then((result) => {
      const { status, data } = result
      return { status, data }
    })
}

export const securePatchRequest = async (subRoute, body = {}) => {
  return axios.patch(subRoute, body)
    .then((result) => {
      const { statusCode, message } = result.data
      return { statusCode, message }
    })
}
