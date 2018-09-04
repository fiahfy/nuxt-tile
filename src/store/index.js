
export const state = () => ({
  version: 1,
  categories: [1, 2, 3, 4],
  actives: [],
  category: 2,
  date: Date.now()
})

export const getters = {
  isActive (state) {
    return ({ category, date }) => {
      const actives = state.actives[category] || {}
      return !!actives[date.getTime()]
    }
  },
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
  toggleActive ({ dispatch, state }, { category, date }) {
    const actives = state.actives[category] || {}
    const timestamp = String(date.getTime())
    if (actives[timestamp]) {
      const newActives = Object.keys(actives)
        .filter((key) => key !== timestamp)
        .reduce((carry, key) => {
          carry[key] = actives[key]
          return carry
        }, {})
      dispatch('setActives', { category, actives: newActives })
      return
    }
    const newActives = {
      ...actives,
      [timestamp]: 1
    }
    dispatch('setActives', { category, actives: newActives })
  },
  setActives ({ commit, state }, { category, actives }) {
    const newActives = {
      ...state.actives,
      [category]: actives
    }
    commit('setActives', { actives: newActives })
  }
}

export const mutations = {
  setActives (state, { actives }) {
    state.actives = actives
  },
  setCategory (state, { category }) {
    state.category = category
  },
  setDate (state, { date }) {
    state.date = date
  }
}
