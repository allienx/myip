import { writable } from 'svelte/store'

const initialState = {
  isLoaded: false,
  isFetching: false,
  err: undefined,
  data: undefined,
}

const clientInfo = writable(initialState)

export { fetchApi, clientInfo }

async function fetchApi(store, apiFn) {
  store.update((state) => {
    return {
      ...state,
      isFetching: true,
    }
  })

  const { error: err, ...data } = await apiFn()

  store.update((state) => {
    return {
      ...state,
      isLoaded: true,
      isFetching: false,
      err,
      data,
    }
  })
}
