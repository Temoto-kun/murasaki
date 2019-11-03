import fs from 'fs'
import mkdirp from 'mkdirp'
import path from 'path'

const ensureDirectory = dirPath =>
  new Promise((resolve, reject) => {
    fs.stat(dirPath, async err => {
      if (err === null) {
        resolve()
        return
      }

      if (err.code !== 'ENOENT') {
        reject(err)
        return
      }

      try {
        await createDirectory(dirPath)
      } catch (err) {
        reject(err)
        return
      }
      resolve()
    })
  })

const createDirectory = dirPath =>
  new Promise((resolve, reject) => {
    mkdirp(dirPath, err => {
      if (err !== null) {
        reject(err)
        return
      }
      resolve()
    })
  })

export const getOutputStream = async ({
  path: fileDir = null,
  filename,
} = {}) => {
  if (fileDir === null) {
    throw Error('Invalid URL.')
  }

  const outputPath = path.join(fileDir, filename)
  try {
    await ensureDirectory(fileDir)
  } catch (err) {
    throw Error('Cannot access directory for writing.')
  }

  return fs.createWriteStream(outputPath)
}
