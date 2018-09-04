import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'actives',
      'category',
      'date'
    ]
  })(store)
}
