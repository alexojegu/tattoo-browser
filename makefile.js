require('shelljs/make');

const { readFileSync } = require('fs');
const { parse } = require('dotenv');

function environment(node) {
  const config = parse(readFileSync(`.env.${node}`));

  env['NODE_ENV'] = node;

  for (const key in config) {
    env[key] = config[key];
  }
}

target.start = () => {
  environment('production');
  exec('http-server dist --silent');
};

target.lint = () => {
  environment('development');
  exec('eslint . --ext .js,.ts,.tsx');
  exec('prettier src/**/*.svg --write');
};

target.build = () => {
  environment('production');
  rm('-rf', 'dist/*');
  exec('webpack --bail --color');
};

target.watch = () => {
  environment('development');
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
