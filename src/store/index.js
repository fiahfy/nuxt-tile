import * as Category from '~/utils/category'

export const state = () => ({
  version: 1,
  categories: Category.Defaults,
  category: 1,
  date: Date.now(),
  now: Date.now()
})

export const getters = {
  isCurrentCategory (state) {
    return ({ category }) => state.category === category
  },
  month (state) {
    const d = new Date(state.date)
    const m = new Date(d.getFullYear(), d.getMonth())
    return m.getTime()
  }
}

export const actions = {
}

export const mutations = {
  setVersion (state, { version }) {
    state.version = version
  },
  setCategory (state, { category }) {
    state.category = category
  },
  setDate (state, { date }) {
    state.date = date
  },
  setNow (state, { now }) {
    state.now = now
  }
}
