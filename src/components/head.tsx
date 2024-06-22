import { type Metadata } from 'next'

const NAME = 'Charles Buffington'
const SITE_URL = 'https://cv.cbuff.dev'
const OPENGRAPH_IMAGE = `${SITE_URL}/avatar.jpeg`

export function Head({ metadata }: { metadata: Metadata }) {
	return (
		<head>
			<title>{metadata.title?.toString()}</title>
			<meta name='description' content={metadata.description?.toString()} />

			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='author' content={NAME} />
			<meta name='robots' content='index, follow' />

			<meta property='og:title' content={metadata.title?.toString()} />
			<meta property='og:description' content={metadata.description?.toString()} />
			<meta property='og:url' content={SITE_URL} />
			<meta property='og:image' content={OPENGRAPH_IMAGE} />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />
			<meta property='og:image:alt' content={NAME} />
			<meta property='og:image:type' content='image/png' />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={metadata.title?.toString()} />
			<meta name='twitter:description' content={metadata.description?.toString()} />
			<meta name='twitter:image' content={OPENGRAPH_IMAGE} />
			<meta property='twitter:image:width' content='1200' />
			<meta property='twitter:image:height' content='630' />
			<meta property='twitter:image:alt' content={NAME} />
			<meta property='twitter:image:type' content='image/png' />

			<meta name='msapplication-TileColor' content='#000000' />
			<meta name='theme-color' content='#000000'></meta>

			<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
		</head>
	)
}