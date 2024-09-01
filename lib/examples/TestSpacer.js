"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f = require("fs");
const acornmail = require("../index");
(() => {
    try {
        const acorn = acornmail.NewAcornEmailComponents();
        const spacer = acorn.NewSpacer();
        const boilerplate = acorn.GetBoilerplate([spacer], true);
        f.writeFileSync('boilerplate.html', boilerplate);
    }
    catch (error) {
        console.log(error);
    }
})();
