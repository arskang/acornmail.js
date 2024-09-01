"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acornmail = require("../index");
(() => {
    try {
        const html = acornmail.MergeVariables('<div>{{Title}}</div>', { Title: 'Hola mundo' });
        console.log('MergeVariables', html);
    }
    catch (error) {
        console.log(error);
    }
})();
