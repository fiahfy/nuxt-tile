export const state = () => ({
  actives: {}
})

export const getters = {
  isActive (state) {
    return ({ categoryId, date }) => {
      const actives = state.actives[categoryId] || {}
      return !!actives[date.getTime()]
    }
  }
}

export const actions = {
  add ({ dispatch, state }, { categoryId, date }) {
    const actives = state.actives[categoryId] || {}
    const timestamp = String(date.getTime())
    const newActives = {
      ...actives,
      [timestamp]: 1
    }
    dispatch('setActives', { categoryId, actives: newActives })
  },
  remove ({ dispatch, state }, { categoryId, date }) {
    const actives = state.actives[categoryId] || {}
    const timestamp = String(date.getTime())
    const newActives = Object.keys(actives)
      .filter((key) => key !== timestamp)
      .reduce((carry, key) => {
        carry[key] = actives[key]
        return carry
      }, {})
    dispatch('setActives', { categoryId, actives: newActives })
  },
  toggle ({ dispatch, getters, state }, { categoryId, date }) {
    const active = getters.isActive({ categoryId, date })
    const action = active ? 'remove' : 'add'
    dispatch(action, { categoryId, date })
  },
  setActives ({ commit, state }, { categoryId, actives }) {
    const newActives = {
      ...state.actives,
      [categoryId]: actives
    }
    commit('setActives', { actives: newActives })
  }
}

export const mutations = {
  setActives (state, { actives }) {
    state.actives = actives
  }
}
