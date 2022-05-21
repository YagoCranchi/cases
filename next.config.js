module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
          {
            source: '/answers',
            destination: '/faq',
            permanent: true,
          },
        ]
      },
    
}