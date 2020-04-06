import { Http } from '../Http'

export const ClientInfo = {
  get,
}

async function get() {
  const url = '/api/v1/info'
  const { error, code, status, data } = await Http.get(url)

  if (error) {
    return {
      err: {
        code,
        status,
        message: data.message,
      },
    }
  }

  return translateInfoResponse(data)
}

function translateInfoResponse(data) {
  return {
    data: {
      ip: data.ip,
      userAgent: data.user_agent,
      origin: data.origin,
      timeMs: data.time_ms,
    },
  }
}
