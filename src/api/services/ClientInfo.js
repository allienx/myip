import { Http } from '~/api/Http'

export const ClientInfo = {
  get,
}

async function get() {
  const url = '/api/v1/info'
  const { error, code, status, body } = await Http.get(url)

  if (error) {
    return {
      err: {
        code,
        status,
        message: body.message,
      },
    }
  }

  return translateInfoResponse(body)
}

function translateInfoResponse(body) {
  return {
    data: {
      ip: body.ip,
      userAgent: body.user_agent,
      origin: body.origin,
      timeMs: body.time_ms,
    },
  }
}
