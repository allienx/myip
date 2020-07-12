import axios from 'axios'

export const Http = {
  request,
  get,
}

async function request({ method, url, params }) {
  try {
    const res = await axios({
      method,
      url,
      params,
    })

    const { status, statusText, headers, data } = res

    return {
      error: false,
      code: status,
      status: statusText,
      headers,
      body: data,
    }
  } catch (err) {
    if (err.response) {
      return _badResponseError(err.response)
    } else if (err.request) {
      return _noResponseError(err.request)
    } else {
      return _badRequestError(err)
    }
  }
}

async function get(url, { params } = {}) {
  return request({
    method: 'get',
    url,
    params,
  })
}

function _badResponseError(res) {
  const { status, statusText, headers, data } = res

  return {
    error: true,
    code: status,
    status: statusText,
    headers,
    body: data,
  }
}

function _noResponseError(_) {
  return {
    error: true,
    code: undefined,
    status: undefined,
    headers: {},
    body: {
      message: 'No response received from server.',
    },
  }
}

function _badRequestError(err) {
  return {
    error: true,
    code: undefined,
    status: undefined,
    headers: {},
    body: {
      message: err.message,
    },
  }
}
