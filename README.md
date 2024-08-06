# react-pdf-memory-issue

## 2.1.1
```
npm start

> start
> node index.js

MemoryUsage diff in MB after 1000 PDF created:
rss:  52
heapTotal:  46
heapUsed:  33
external:  -1
arrayBuffers:  -1
```

## 2.1.2

```
npm start

> start
> node index.js

(node:5849) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 uncaughtException listeners added to [process]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 uncaughtException listeners added to [process]. Use emitter.setMaxListeners() to increase limit
    at _addListener (node:events:591:17)
    at process.addListener (node:events:609:10)
    at /<--project-path-->/react-pdf-memory-issue/node_modules/yoga-layout/binaries/wasm-async-node.js:11:9
    at Object.loadYoga (/<--project-path-->/react-pdf-memory-issue/node_modules/yoga-layout/src/entrypoint/wasm-async-node.js:35:43)
    at _callee$ (/<--project-path-->/react-pdf-memory-issue/node_modules/@react-pdf/layout/lib/index.cjs:707:34)
    at tryCatch (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:45:16)
    at Generator.<anonymous> (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:133:17)
    at Generator.next (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:74:21)
    at asyncGeneratorStep (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:17)
(node:5849) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 unhandledRejection listeners added to [process]. Use emitter.setMaxListeners() to increase limit
MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 unhandledRejection listeners added to [process]. Use emitter.setMaxListeners() to increase limit
    at _addListener (node:events:591:17)
    at process.addListener (node:events:609:10)
    at /<--project-path-->/react-pdf-memory-issue/node_modules/yoga-layout/binaries/wasm-async-node.js:11:63
    at Object.loadYoga (/<--project-path-->/react-pdf-memory-issue/node_modules/yoga-layout/src/entrypoint/wasm-async-node.js:35:43)
    at _callee$ (/<--project-path-->/react-pdf-memory-issue/node_modules/@react-pdf/layout/lib/index.cjs:707:34)
    at tryCatch (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:45:16)
    at Generator.<anonymous> (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:133:17)
    at Generator.next (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/regeneratorRuntime.js:74:21)
    at asyncGeneratorStep (/<--project-path-->/react-pdf-memory-issue/node_modules/@babel/runtime/helpers/asyncToGenerator.js:3:17)
MemoryUsage diff in MB after 1000 PDF created:
rss:  221
heapTotal:  182
heapUsed:  155
external:  15999
arrayBuffers:  -1
```
