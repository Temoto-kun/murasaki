import fs from 'fs'
import mkdirp from 'mkdirp'
import path from 'path'

const createDirectoryFromPath = path =>
  new Promise((resolve, reject) => {
    mkdirp(path, err => {
      if (err !== null) {
        reject(err)
        return
      }
      resolve()
    })
  })

const writeFile = (parentPath, filename, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path.join(parentPath, filename), data, { flag: 'w' }, err => {
      if (err !== null) {
        reject(Error('Cannot write to storage on path.'))
        return
      }
      resolve()
    })
  })

export const write = async ({ path = null, filename, data } = {}) => {
  if (path === null) {
    throw Error('Invalid URL.')
  }

  return createDirectoryFromPath(path).then(() =>
    writeFile(path, filename, data),
  )
}
