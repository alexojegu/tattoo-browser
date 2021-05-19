require('dotenv').config();
require('shelljs/make');

target.start = () => {
  env['NODE_ENV'] = 'production';
  exec('serve --listen 8080 --single dist');
};

target.lint = () => {
  env['NODE_ENV'] = 'development';
  exec('eslint --color .');
};

target.pretty = () => {
  env['NODE_ENV'] = 'development';
  exec('prettier --write **/*.{html,svg}');
};

target.build = () => {
  env['NODE_ENV'] = 'production';
  rm('-rf', 'dist/*');
  exec('webpack --bail --color');
};

target.watch = () => {
  env['NODE_ENV'] = 'development';
  exec('webpack serve');
};
