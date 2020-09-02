"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

class BCryptHashProvider {
  async generationHash(payload) {
    return (0, _bcryptjs.hash)(payload, 8);
  }

  async compareHash(payload, hashed) {
    return (0, _bcryptjs.compare)(payload, hashed);
  }

}

var _default = BCryptHashProvider;
exports.default = _default;