export default ({ store: { state, commit, dispatch } }) => {
  if (state.dates) {
    console.log('migrate v0 -> v1')
    const dates = state.dates || {}
    Object.keys(dates).forEach((key) => {
      dispatch('active/add', { category: 1, date: new Date(Number(key)) })
    })
  }
  commit('setVersion', { version: 1 })
}
