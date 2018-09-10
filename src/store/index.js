export const state = () => ({
  version: 1,
  categories: [
    { id: 1, name: 'Default', color: 'light-green' },
    { id: 2, name: 'Orange', color: 'orange' },
    { id: 3, name: 'Red', color: 'red' }
  ],
  categoryId: 1,
  date: Date.now(),
  now: Date.now()
})

export const getters = {
  category (state, getters) {
    return getters.getCategory({ id: state.categoryId })
  },
  month (state) {
    const d = new Date(state.date)
    const m = new Date(d.getFullYear(), d.getMonth())
    return m.getTime()
  },
  year (state) {
    const d = new Date(state.date)
    const y = new Date(d.getFullYear(), 0)
    return y.getTime()
  },
  getCategory (state) {
    return ({ id }) => state.categories.find((category) => category.id === id)
  }
}

export const actions = {
}

export const mutations = {
  setVersion (state, { version }) {
    state.version = version
  },
  setCategoryId (state, { categoryId }) {
    state.categoryId = categoryId
  },
  setDate (state, { date }) {
    state.date = date
  },
  setNow (state, { now }) {
    state.now = now
  }
}
