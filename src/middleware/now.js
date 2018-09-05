const proceed = (store) => {
  const { commit } = store

  const d = new Date()
  const tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
  const timeout = tomorrow.getTime() - d.getTime()

  setTimeout(() => {
    const now = Date.now()
    commit('setNow', { now })
    proceed(store)
  }, timeout)
}

export default ({ store }) => {
  proceed(store)
}
