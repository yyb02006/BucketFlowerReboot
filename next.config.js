/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const stylexPlugin = require('@stylexjs/nextjs-plugin')

module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({})

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
