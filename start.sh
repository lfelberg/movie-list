npm install -g babel-cli webpack
babel . --out-dir "compiled" --ignore=node_modules,"compiled" --source-maps inline --watch &
# ./node_modules/webpack/bin/webpack.js --config webpack.config.js -D --watch &