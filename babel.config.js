module.exports = {
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [['babel-plugin-styled-components', { displayName: process.env.NODE_ENV !== 'production' }]],
};
