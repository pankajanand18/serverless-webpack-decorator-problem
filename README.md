# How to reproduce the issue 

Setup the codebase 
```shell
git clone git@github.com:pankajanand18/serverless-webpack-decorator-problem.git
yarn install 
sls install dynamodb-local
```
Invoke the function locally
```shell
SLS_DEBUG=* AWS_PROFILE=YOURPOFILE sls invoke local --function hello
```
It generates the following error 
```javascript
Error: make sure you have enabled the typescript compiler options which enable us to work with decorators (see doc)
    at createNewProperty (/Users/YourUserName/dev/serverless-webpack-decorator-problem/node_modules/@shiftcoders/dynamo-easy/src/decorator/impl/property/init-or-update-property.function.ts:48:11)
    at Object.initOrUpdateProperty (/Users/YourUserName/dev/serverless-webpack-decorator-problem/node_modules/@shiftcoders/dynamo-easy/src/decorator/impl/property/init-or-update-property.function.ts:31:16)
    at Property (/Users/YourUserName/dev/serverless-webpack-decorator-problem/node_modules/@shiftcoders/dynamo-easy/src/decorator/impl/property/property.decorator.ts:22:7)
    at eval (webpack:///./user.model.ts?:18:410)
    at Array.reduce (<anonymous>)
    at _applyDecoratedDescriptor (webpack:///./user.model.ts?:18:367)
    at eval (webpack:///./user.model.ts?:53:27)
    at Object../user.model.ts (/Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler.js:109:1)
    at __webpack_require__ (/Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler.js:20:30)
    at eval (webpack:///./handler.ts?:8:13)
    at Object../handler.ts (/Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler.js:97:1)
    at __webpack_require__ (/Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler.js:20:30)
    at /Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler.js:84:18
    at Object.<anonymous> (/Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler.js:87:10)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at AwsInvokeLocal.invokeLocalNodeJs (/usr/local/lib/node_modules/serverless/lib/plugins/aws/invokeLocal/index.js:733:33)
    at AwsInvokeLocal.invokeLocal (/usr/local/lib/node_modules/serverless/lib/plugins/aws/invokeLocal/index.js:216:19)
    at Object.invoke:local:invoke [as hook] (/usr/local/lib/node_modules/serverless/lib/plugins/aws/invokeLocal/index.js:49:47)
    at BbPromise.reduce (/usr/local/lib/node_modules/serverless/lib/classes/PluginManager.js:501:55)
    at tryCatcher (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
    at Object.gotValue (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/reduce.js:168:18)
    at Object.gotAccum (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/reduce.js:155:25)
    at Object.tryCatcher (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:547:31)
    at Promise._settlePromise (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:604:18)
    at Promise._settlePromise0 (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:649:10)
    at Promise._settlePromises (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:729:18)
    at _drainQueueStep (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:93:12)
    at _drainQueue (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:86:9)
    at Async._drainQueues (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:102:5)
    at Immediate.Async.drainQueues [as _onImmediate] (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:15:14)
    at runCallback (timers.js:705:18)
    at tryOnImmediate (timers.js:676:5)
    at processImmediate (timers.js:658:5)
    at process.topLevelDomainCallback (domain.js:126:23)

  Error --------------------------------------------------

  Error: Exception encountered when loading /Users/YourUserName/dev/serverless-webpack-decorator-problem/.webpack/service/handler
      at AwsInvokeLocal.invokeLocalNodeJs (/usr/local/lib/node_modules/serverless/lib/plugins/aws/invokeLocal/index.js:738:13)
      at AwsInvokeLocal.invokeLocal (/usr/local/lib/node_modules/serverless/lib/plugins/aws/invokeLocal/index.js:216:19)
      at Object.invoke:local:invoke [as hook] (/usr/local/lib/node_modules/serverless/lib/plugins/aws/invokeLocal/index.js:49:47)
      at BbPromise.reduce (/usr/local/lib/node_modules/serverless/lib/classes/PluginManager.js:501:55)
      at tryCatcher (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
      at Object.gotValue (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/reduce.js:168:18)
      at Object.gotAccum (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/reduce.js:155:25)
      at Object.tryCatcher (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
      at Promise._settlePromiseFromHandler (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:547:31)
      at Promise._settlePromise (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:604:18)
      at Promise._settlePromise0 (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:649:10)
      at Promise._settlePromises (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:729:18)
      at _drainQueueStep (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:93:12)
      at _drainQueue (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:86:9)
      at Async._drainQueues (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:102:5)
      at Immediate.Async.drainQueues (/usr/local/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:15:14)
      at runCallback (timers.js:705:18)
      at tryOnImmediate (timers.js:676:5)
      at processImmediate (timers.js:658:5)
      at process.topLevelDomainCallback (domain.js:126:23)

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues
     Issues:        forum.serverless.com

  Your Environment Information ---------------------------
     Operating System:          darwin
     Node Version:              10.23.3
     Framework Version:         2.25.2
     Plugin Version:            4.4.3
     SDK Version:               2.3.2
     Components Version:        3.7.0
```
# Serverless TypeScript Starter

A Serverless starter that adds TypeScript, serverless-offline, linting, environment variables, and unit test support.

This starter uses the [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle) plugin and the [serverless-offline](https://github.com/dherault/serverless-offline) plugin. It supports:

- **Generating optimized Lambda packages with Webpack**
- **Using TypeScript in your handler functions and tests**
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Lint your code with ESLint**
- **Add environment variables for your stages**
- **No need to manage Webpack or Babel configs**

---

### Demo

A demo version of this service is hosted on AWS - [`https://ylsml6v6r6.execute-api.us-east-1.amazonaws.com/dev/hello`](https://ylsml6v6r6.execute-api.us-east-1.amazonaws.com/dev/hello)

And here is the TS source behind it

``` javascript
export async function hello(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v2.0! Your function executed successfully!",
      context,
      event,
    }),
  };
}
```

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

``` bash
$ serverless install --url https://github.com/AnomalyInnovations/serverless-typescript-starter --name my-project
```

Enter the new directory

``` bash
$ cd my-project
```

Install the npm packages

``` bash
$ npm install
```

### Usage

To run a function on your local

``` bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

#### Running Tests

Run your tests using

``` bash
$ npm test
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

#### Environment Variables

To add environment variables to your project

1. Rename `env.example` to `.env`.
2. Add environment variables for your local stage to `.env`.
3. Uncomment `environment:` block in the `serverless.yml` and reference the environment variable as `${env:MY_ENV_VAR}`. Where `MY_ENV_VAR` is added to your `.env` file.
4. Make sure to not commit your `.env`.

#### Linting

We use [ESLint](https://eslint.org) to lint your code via [serverless-bundle](https://github.com/AnomalyInnovations/serverless-bundle).

You can turn this off by adding the following to your `serverless.yml`.

``` yaml
custom:
  bundle:
    linting: false
```

To [override the default config](https://eslint.org/docs/user-guide/configuring), add a `.eslintrc.json` file. To ignore ESLint for specific files, add it to a `.eslintignore` file.

### Support

- Open a [new issue](https://github.com/AnomalyInnovations/serverless-typescript-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!

---

This repo is maintained by [Anomaly Innovations](https://anoma.ly); makers of [Seed](https://seed.run) and [Serverless Stack](https://serverless-stack.com).
