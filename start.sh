npm install -g babel-cli webpack
babel . --out-dir client/compiled --presets=react --ignore=node_modules,client/compiled --source-maps inline &
