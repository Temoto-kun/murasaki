export const download = async args => {
  if (typeof args !== 'object' || args === null) {
    throw Error('Invalid arguments.')
  }

  const { input, output } = args

  if (!Array.isArray(input)) {
    throw Error('Invalid input.')
  }

  if (typeof output === 'undefined' || output === null) {
    throw Error('Invalid output.')
  }

  const { storage = 'filesystem', url } = output

  if (typeof url !== 'string') {
    throw Error('Invalid output URL.')
  }
}
