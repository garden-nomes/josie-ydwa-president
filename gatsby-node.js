exports.modifyWebpackConfig = ({ config, stage }) => {
  config.loader('markdown', {
    test: /\.md$/,
    loaders: ['html-loader', 'markdown-loader']
  });

  return config;
};
