export const state = () => ({
  actives: {}
})

export const getters = {
  isActive (state) {
    return ({ category, date }) => {
      const actives = state.actives[category] || {}
      return !!actives[date.getTime()]
    }
  }
}

export const actions = {
  add ({ dispatch, state }, { category, date }) {
    const actives = state.actives[category] || {}
    const timestamp = String(date.getTime())
    const newActives = {
      ...actives,
      [timestamp]: 1
    }
    dispatch('setActives', { category, actives: newActives })
  },
  remove ({ dispatch, state }, { category, date }) {
    const actives = state.actives[category] || {}
    const timestamp = String(date.getTime())
    const newActives = Object.keys(actives)
      .filter((key) => key !== timestamp)
      .reduce((carry, key) => {
        carry[key] = actives[key]
        return carry
      }, {})
    dispatch('setActives', { category, actives: newActives })
  },
  toggle ({ dispatch, getters, state }, { category, date }) {
    const active = getters.isActive({ category, date })
    const action = active ? 'remove' : 'add'
    dispatch(action, { category, date })
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
  }
}
