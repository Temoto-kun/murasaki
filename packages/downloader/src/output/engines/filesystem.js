import fs from 'fs'

export const write = async ({ url = null, data } = {}) => {
  if (url === null) {
    throw Error('Invalid URL.')
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, err => {
      if (err !== null) {
        reject(Error('Cannot write to storage.'))
        return
      }
      resolve()
    })
  })
}
