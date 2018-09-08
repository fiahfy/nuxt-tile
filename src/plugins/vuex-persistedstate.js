import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'version',
      'categoryId',
      'date',
      'active'
    ]
  })(store)
}
