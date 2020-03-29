# bitcoin-rpcauth-js
**Create login credentials for a JSON-RPC user**

> Bitcoin 'rpcauth' option generator

> A canonical python script is included in [share/rpcauth].

```bash
-rpcauth=<userpw>
  Username and HMAC-SHA-256 hashed password for JSON-RPC connections. The
  field <userpw> comes in the format: <USERNAME>:<SALT>$<HASH>. A
  canonical python script is included in share/rpcauth. The client
  then connects normally using the
  rpcuser=<USERNAME>/rpcpassword=<PASSWORD> pair of arguments. This
  option can be specified multiple times
```


## Requirements

- [nodejs];
- [yarn];
- [git].


## Usage In your PC
```bash
bitcoin-rpcauth [username] [password] [salt]

Create login credentials for a Bitcoin JSON-RPC user

Positionals:
  username, u  the username for authentication                          [string]
  password, p  leave empty to gen a random password                     [string]
  salt, s      the byte hex salt                                        [string]

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```

**Usage:**
```bash
bitcoin-rpcauth user_777
# or
bitcoin-rpcauth --username user_777
# or
bitcoin-rpcauth -u=user_777
```

**Returned:**
```bash
String to be appended to bitcoin.conf:
rpcauth=user_777:a031c9a6bf82e4c5af455fe2f1aae67d$d801b2e75986c51c2d898e66d33e58ef3557adf509efcb227d5141eb1aa77fd9
Your password:
Sywps_2-pL4uLYf-DzWfJYxOQfFRJcmu0kUBhKOs-4c
```

### Installation in your PC through [yarn]
```
yarn global add bitcoin-rpcauth-js
```

### Installation in your PC through [yarn] from [GitHub]
```
yarn global add https://github.com/an-ivannikov-dev/bitcoin-rpcauth-js
```

#### Removing from your PC
```bash
yarn global remove bitcoin-rpcauth-js
```


### Installation in your PC through `git clone` from [GitHub]
```bash
git clone https://github.com/an-ivannikov-dev/bitcoin-rpcauth-js.git
cd bitcoin-rpcauth-js
yarn install
```

**Usage:**
```bash
yarn start user_777
# or
yarn start --username user_777
# or
yarn start -u=user_777
```

**Returned:**
```bash
String to be appended to bitcoin.conf:
rpcauth=user_777:a031c9a6bf82e4c5af455fe2f1aae67d$d801b2e75986c51c2d898e66d33e58ef3557adf509efcb227d5141eb1aa77fd9
Your password:
Sywps_2-pL4uLYf-DzWfJYxOQfFRJcmu0kUBhKOs-4c
```


## Usage In your Project
```js
const {
  genSalt, genPass, genUser, genHash, genRpcAuth, genRpcAuthStr,
} = require('bitcoin-rpcauth-js');


const username = genUser();
console.log('username:', username);

const password = genPass();
console.log('password:', password);

const salt = genSalt();
console.log('salt:', salt);

const hash = genHash(password, salt);
console.log('hash:', hash);

const rpcAuth = genRpcAuthStr(username, password, salt);
console.log('rpcAuth:', rpcAuth);

const rpcAuthObj = genRpcAuth(username, password, salt);
console.log('rpcAuthObj:', rpcAuthObj);

const rpcAuthObj2 = genRpcAuth();
console.log('rpcAuthObj2:', rpcAuthObj2);
```

**Returned:**
```bash
username: user_157
password: lrD7Cr_BTwgwT6XJo1-LFdHSri6AtUGHfPppRioSnFI
salt: 105e26017130cece3a7fa3d78b91c468
hash: b666ac313db0bc5e23177a8a2f47529820367fe313e2660f0091a67d726fbc9f
rpcauth: rpcauth=user_157:105e26017130cece3a7fa3d78b91c468$b666ac313db0bc5e23177a8a2f47529820367fe313e2660f0091a67d726fbc9f
rpcAuthObj: {
  username: 'user_157',
  password: 'lrD7Cr_BTwgwT6XJo1-LFdHSri6AtUGHfPppRioSnFI',
  salt: '105e26017130cece3a7fa3d78b91c468',
  hash: 'b666ac313db0bc5e23177a8a2f47529820367fe313e2660f0091a67d726fbc9f'
}
rpcAuthObj2: {
  username: 'user_362',
  password: 'hkF59PZb7LTLUzCMhht7gysNoR9YMTCDPC9DuYaD-2Q',
  salt: '69d971c0750e4e4c90babc769a154186',
  hash: 'c0ab0c03f2f9a4ee8b68ce5a4521474c154fc2f3546a9415375d4459138fb9c7'
}
```

### Installation in your Project through [yarn]
```
yarn add bitcoin-rpcauth-js
```

### Installation in your Project through [yarn] from [GitHub]
```bash
yarn add https://github.com/an-ivannikov-dev/bitcoin-rpcauth-js.git
```


[share/rpcauth]: https://github.com/bitcoin/bitcoin/tree/master/share/rpcauth "share/rpcauth"
[GitHub]: https://github.com/ "GitHub"
[nodejs]: https://nodejs.org/ "nodejs"
[yarn]: https://yarnpkg.com/ "yarn"
[git]: https://git-scm.com/ "git"
