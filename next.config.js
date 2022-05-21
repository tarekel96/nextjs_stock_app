/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,
	images: {
		domains: [ 'static.finnhub.io' ]
	}
};

module.exports = nextConfig;
