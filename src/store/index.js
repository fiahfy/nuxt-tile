
const d = new Date()
const month = (new Date(d.getFullYear(), d.getMonth())).getTime()

export const state = () => ({
  version: 1,
  categories: [0, 1, 2, 3],
  dates: [],
  category: 0,
  month
})

export const getters = {
  isChecked (state) {
    return ({ category, date }) => {
      const dates = state.dates[category] || {}
      return !!dates[date.getTime()]
    }
  },
  isCurrentCategory (state) {
    return ({ category }) => state.category === category
  }
}

export const actions = {
  toggleChecked ({ dispatch, state }, { category, date }) {
    const dates = state.dates[category] || {}
    const timestamp = String(date.getTime())
    if (dates[timestamp]) {
      const newDates = Object.keys(dates)
        .filter((key) => key !== timestamp)
        .reduce((carry, key) => {
          carry[key] = dates[key]
          return carry
        }, {})
      dispatch('setDates', { category, dates: newDates })
      return
    }
    const newDates = {
      ...dates,
      [timestamp]: 1
    }
    dispatch('setDates', { category, dates: newDates })
  },
  setDates ({ commit, state }, { category, dates }) {
    const newDates = {
      ...state.dates,
      [category]: dates
    }
    commit('setDates', { dates: newDates })
  }
}

export const mutations = {
  setMonth (state, { month }) {
    state.month = month
  },
  setDates (state, { dates }) {
    state.dates = dates
  }
}
