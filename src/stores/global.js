import { ClientInfo } from '~/api/services/ClientInfo'
import { IpApi } from '~/api/services/IpApi'
import { createAsyncStore } from './createAsyncStore'

export const ipInfo = createAsyncStore(ClientInfo.get)
export const ipGeoData = createAsyncStore(IpApi.lookup)
