import { Http } from '../Http'

export const IpApi = {
  lookup,
}

async function lookup(ip) {
  const url = '/api/v1/ipapi'
  const params = { ip }

  const { error, code, status, body } = await Http.get(url, { params })

  if (error) {
    return {
      err: {
        code,
        status,
        message: body.message,
      },
    }
  }

  const { data } = body

  if (data.status !== 'success') {
    return {
      err: {
        code,
        status,
        message: `IP Address lookup failed: ${body.message}`,
      },
    }
  }

  return translateIpApiResponse(data)
}

function translateIpApiResponse(body) {
  return {
    data: {
      ip: body.query,
      lat: body.lat,
      lon: body.lon,
      city: body.city,
      region: body.regionName,
      regionCode: body.region,
      postalCode: body.zip,
      country: body.country,
      countryCode: body.countryCode,
      continent: body.continent,
      continentCode: body.continentCode,
      timezone: body.timezone,
      currency: body.currency,
    },
  }
}
