export const state = () => ({
  actives: {}
})

export const getters = {
  isActive (state) {
    return ({ categoryId, timestamp }) => {
      const actives = state.actives[categoryId] || {}
      return !!actives[timestamp]
    }
  }
}

export const actions = {
  add ({ dispatch, state }, { categoryId, timestamp }) {
    timestamp = String(timestamp)
    const actives = state.actives[categoryId] || {}
    const newActives = {
      ...actives,
      [timestamp]: 1
    }
    dispatch('setActives', { categoryId, actives: newActives })
  },
  remove ({ dispatch, state }, { categoryId, timestamp }) {
    timestamp = String(timestamp)
    const actives = state.actives[categoryId] || {}
    const newActives = Object.keys(actives)
      .filter((key) => key !== timestamp)
      .reduce((carry, key) => {
        carry[key] = actives[key]
        return carry
      }, {})
    dispatch('setActives', { categoryId, actives: newActives })
  },
  toggle ({ dispatch, getters }, { categoryId, timestamp }) {
    const active = getters.isActive({ categoryId, timestamp })
    const action = active ? 'remove' : 'add'
    dispatch(action, { categoryId, timestamp })
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
