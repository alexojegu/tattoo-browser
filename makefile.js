require('shelljs/make');

target.start = () => {
  env['NODE_ENV'] = 'production';
  exec('http-server dist --silent');
};

target.lint = () => {
  env['NODE_ENV'] = 'development';
  exec('eslint . --ext .js,.ts,.tsx');
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

target.git = ([hook]) => {
  switch (hook) {
    case 'pre-commit':
      target.lint();
      target.build();
      break;
  }
};
