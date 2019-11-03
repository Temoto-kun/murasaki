import * as downloader from './index.js'

describe('on download', () => {
	it('should accept an object argument', async () => {
		await expect(downloader.download()).rejects.toEqual(Error('Invalid arguments.'))
	})

	it('should accept input', async () => {
		await expect(downloader.download({})).rejects.toEqual(Error('Invalid input.'))
	})

	describe('on output', () => {
		it('should accept an object for specifying output', async () => {
			await expect(
				downloader.download({
					input: [],
				}),
			).rejects.toEqual(Error('Invalid output.'))
		})

		it('should accept a URL for specifying output with implicit storage type', async () => {
			await expect(
				downloader.download({
					input: [],
					output: {
						url: '../download',
					},
				}),
			).resolves
		})

		it('should accept explicit storage type', async () => {
			await expect(
				downloader.download({
					input: [],
					output: {
						storage: 'filesystem',
						url: '../download',
					},
				}),
			).resolves
		})
	})
})
