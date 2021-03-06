"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = void 0;

var _exec = require("./exec");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const identity =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(function* (_ref) {
    let email = _ref.email,
        username = _ref.username;
    yield (0, _exec.exec)("git config --global user.name ".concat(username));
    yield (0, _exec.exec)("git config --global user.email ".concat(email));
  });

  return function identity(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.identity = identity;