import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'version',
      'category',
      'date',
      'active'
    ]
  })(store)
}
