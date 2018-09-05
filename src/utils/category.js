const Colors = {
  1: 'light-green',
  2: 'orange',
  3: 'red'
}

export const Defaults = [1, 2, 3]

export const getColor = (category) => {
  return Colors[category] || 'light-green'
}
