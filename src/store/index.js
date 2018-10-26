export const state = () => ({
  version: 1,
  categories: [
    { id: 1, name: 'Default', color: 'light-green' },
    { id: 2, name: 'Orange', color: 'orange' },
    { id: 3, name: 'Red', color: 'red' }
  ],
  categoryId: 1,
  timestamp: Date.now(),
  now: Date.now(),
  scrollTop: 0
})

export const getters = {
  category(state, getters) {
    return getters.getCategory({ id: state.categoryId })
  },
  month(state) {
    const d = new Date(state.timestamp)
    const m = new Date(d.getFullYear(), d.getMonth())
    return m.getTime()
  },
  year(state) {
    const d = new Date(state.timestamp)
    const y = new Date(d.getFullYear(), 0)
    return y.getTime()
  },
  nowDay(state) {
    const n = new Date(state.now)
    const d = new Date(n.getFullYear(), n.getMonth(), n.getDate())
    return d.getTime()
  },
  getCategory(state) {
    return ({ id }) => state.categories.find((category) => category.id === id)
  }
}

export const actions = {}

export const mutations = {
  setVersion(state, { version }) {
    state.version = version
  },
  setCategoryId(state, { categoryId }) {
    state.categoryId = categoryId
  },
  setTimestamp(state, { timestamp }) {
    state.timestamp = timestamp
  },
  setNow(state, { now }) {
    state.now = now
  },
  setScrollTop(state, { scrollTop }) {
    state.scrollTop = scrollTop
  }
}
