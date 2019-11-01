import fetch from 'fetch-ponyfill'

export const download = async ({
  input,
  output: { storage = 'filesystem', url } = {
    storage: 'filesystem',
  },
} = {}) => {
  if (!Array.isArray(input)) {
    throw Error('Invalid input.')
  }

  if (typeof url !== 'string') {
    throw Error('Invalid output URL.')
  }
}
