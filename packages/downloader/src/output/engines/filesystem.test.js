import * as filesystem from './filesystem'

it('should require an output URL', async () => {
  await expect(filesystem.write()).rejects.toEqual(Error('Invalid URL.'))
})

it('should write to storage', async () => {
  await expect(
    filesystem.write({
      url: './mocks/download',
      data: '',
    }),
  ).resolves
})
