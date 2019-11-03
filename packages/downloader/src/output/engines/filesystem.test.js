import { WriteStream } from 'fs'
import * as filesystem from './filesystem'

it('should require an output URL for getting the output stream', async () => {
  try {
    await filesystem.getOutputStream()
  } catch (err) {
    expect(err).toEqual(Error('Invalid URL.'))
  }
})

it('should provide a WriteStream for output', async () => {
  const outputStream = await filesystem.getOutputStream({
    path: './mocks/download',
    filename: 'foo.txt',
  })

  expect(outputStream instanceof WriteStream).toBe(true)
})
