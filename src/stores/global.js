import { ClientInfo } from '../api/services/ClientInfo'
import { createAsyncStore } from './createAsyncStore'

export const ipInfo = createAsyncStore(ClientInfo.get)
