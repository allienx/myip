import { Http } from '../http'

export const ClientInfo = {
  get,
}

async function get() {
  const url = '/api/v1/info'
  const { error, code, status, data } = await Http.get(url)

  if (error) {
    return {
      error: {
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
    ip: data.ip,
    userAgent: data.user_agent,
    origin: data.origin,
    timeMs: data.time_ms,
  }
}
