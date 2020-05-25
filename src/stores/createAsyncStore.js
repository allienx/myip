import { writable } from 'svelte/store'

export { createAsyncStore }

// A custom store that allows any component to initiate an asynchronous
// fetching of data. Useful for global state that is hydrated by an API.
function createAsyncStore(asyncFn) {
  const { subscribe, update } = writable({
    isLoaded: false,
    isFetching: false,
    err: undefined,
    data: undefined,
  })

  const fetch = async (...args) => {
    update((state) => {
      return {
        ...state,
        isLoaded: false,
        isFetching: true,
      }
    })

    const { err, data } = await asyncFn(...args)

    update((state) => {
      return {
        ...state,
        isLoaded: true,
        isFetching: false,
        err,
        data,
      }
    })
  }

  return {
    subscribe,
    fetch,
  }
}
