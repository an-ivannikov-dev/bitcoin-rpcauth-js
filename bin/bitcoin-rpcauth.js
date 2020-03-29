#!/usr/bin/env node

const { genSalt, genPass, genUser, genRpcAuthStr } = require('../');
const argv = require('yargs')
  .scriptName('bitcoin-rpcauth')
  .usage(
    '$0 [username] [password] [salt]',
    'Create login credentials for a Bitcoin JSON-RPC user',
    (yargs) => {
      yargs
        .positional('username', {
          describe: 'the username for authentication',
          type: 'string',
          default: genUser(),
        })
        .positional('password', {
          describe: 'leave empty to gen a random password', // or specify "-" to prompt for password
          type: 'string',
          default: genPass(),
        })
        .positional('salt', {
          describe: 'the byte hex salt',
          type: 'string',
          default: genSalt(16),
        });
    }
  )
  .help('h')
  .alias('h', 'help')
  .showHelpOnFail(true)
  .argv;

const username = argv.username;
const password = argv.password;
const salt = argv.salt;
const rpcAuthStr = genRpcAuthStr(username, password, salt);

console.log(`
String to be appended to bitcoin.conf:
${rpcAuthStr}
Your password:
${password}
`);
