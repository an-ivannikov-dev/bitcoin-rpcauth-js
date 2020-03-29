

const crypto = require('crypto');
const base64url = require('base64url');


// Create size byte hex salt
function genSalt(size = 16) {
  const buffer = crypto.randomBytes(size);
  return buffer.toString('hex');
}

// Create 32 byte b64 password
function genPass(size = 32) {
  const buffer = crypto.randomBytes(size);
  return base64url.fromBase64(buffer.toString('base64'));
}

function genUser() {
  return 'user_' + Math.round(Math.random() * 1000);
}

function genHash(password, salt) {
  const hash = crypto
    .createHmac('sha256', salt)
    .update(password)
    .digest('hex');
  return hash;
}

function genRpcAuth(username = genUser(), password = genPass(), salt = genSalt()) {
  const hash = genHash(password, salt);
  return { username, password, salt, hash };
}

function genRpcAuthStr(username, password, salt) {
  const rpcauth = genRpcAuth(username, password, salt);
  const str = `rpcauth=${rpcauth.username}:${rpcauth.salt}$${rpcauth.hash}`;
  return str;
}

module.exports = {
  genSalt,
  genPass,
  genUser,
  genHash,
  genRpcAuth,
  genRpcAuthStr,
};
