export const state = () => ({
  dates: {}
})

export const getters = {
  isChecked (state) {
    return ({ date }) => !!state.dates[date.getTime()]
  }
}

export const actions = {
  toggleChecked ({ commit, state }, { date }) {
    const timestamp = date.getTime()
    if (state.dates[timestamp]) {
      const dates = Object.keys(state.dates)
        .filter((key) => key !== timestamp)
        .reduce((carry, key) => {
          carry[key] = state.dates[key]
          return carry
        }, {})
      commit('setDates', { dates })
      return
    }
    const dates = {
      ...state.dates,
      [timestamp]: 1
    }
    commit('setDates', { dates })
  }
}

export const mutations = {
  setDates (state, { dates }) {
    state.dates = dates
  }
}
