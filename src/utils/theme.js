export const getHeaderColor = (category) => {
  switch (category) {
    case 1:
      return 'green--text text--darken-4'
    case 2:
      return 'light-green--text text--darken-4'
    default:
      return 'orange--text text--darken-4'
  }
}

export const getButtonColor = (category) => {
  switch (category) {
    case 1:
      return 'green darken-1'
    case 2:
      return 'light-green darken-1'
    default:
      return 'orange darken-1'
  }
}

export const getActiveDayColor = (category) => {
  switch (category) {
    case 1:
      return 'green lighten-3 green--text text--darken-4'
    case 2:
      return 'light-green lighten-3 light-green--text text--darken-4'
    default:
      return 'orange lighten-3 orange--text text--darken-4'
  }
}

export const getIconColor = (category) => {
  switch (category) {
    case 1:
      return '#4caf50'
    case 2:
      return '#8bc34a'
    default:
      return '#ff9800'
  }
}
