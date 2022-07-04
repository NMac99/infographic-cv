const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  webpack: {
    configure: {
      target: 'web'
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd-mobile' }, 'antd-mobile'],
      'transform-css-import-to-string',
      'babel-plugin-styled-components',
      'react-hot-loader/babel',
      ...(isProd ? ['react-remove-properties'] : [])
    ]
  }
};
