"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGX_URL = exports.RGX_HEXCOLOR = void 0;
// Hex color regular expression
exports.RGX_HEXCOLOR = /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
// Url regular expression
exports.RGX_URL = /^(https?:\/\/)?([\da-z.-]+\.[a-z.]{2,6}|[\d.]+)([/:?=&#]{1}[\da-z.-]+)*[/?]?$/;
