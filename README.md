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


## Installation through `git clone`

```bash
git clone https://github.com/an-ivannikov-dev/bitcoin-rpcauth-js.git
cd bitcoin-rpcauth-js
yarn install
yarn start user password
```

returned:
```bash
String to be appended to bitcoin.conf:
rpcauth=user:4328d56d7cc1493e0c0a119a4d20717d$011ca4f3619e0af0b68f5c30e04839af65186c9e0bfbdd0b6d876ae094545c00
Your password:
password
```


## Installation through [yarn]

```bash
yarn add https://github.com/an-ivannikov-dev/bitcoin-rpcauth-js.git
```

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

returned:
```
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

[share/rpcauth]: https://github.com/bitcoin/bitcoin/tree/master/share/rpcauth "share/rpcauth"
[nodejs]: https://nodejs.org/ "nodejs"
[yarn]: https://yarnpkg.com/ "yarn"
[git]: https://git-scm.com/ "git"
