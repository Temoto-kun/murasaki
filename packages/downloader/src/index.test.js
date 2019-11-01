import * as downloader from './index.js'

describe('on download', () => {
  it('should accept input', async () => {
    await expect(downloader.download()).rejects.toEqual(Error('Invalid input.'))
  })

  describe('on output', () => {
    it('should accept an object for file output', async () => {
      await expect(
        downloader.download({
          input: [],
        }),
      ).rejects.toEqual(Error('Invalid output URL.'))

      await expect(
        downloader.download({
          input: [],
          output: {
            storage: 'filesystem',
            url: '../download',
            // todo mock filesystem
          },
        }),
      ).resolves
    })
  })
})
