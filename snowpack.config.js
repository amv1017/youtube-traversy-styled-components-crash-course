/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-react-refresh'
  ],
  routes: [
    /* ... */
  ],
  optimize: {
    /* ... */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3636
  },
  buildOptions: {
    /* ... */
  },
}
