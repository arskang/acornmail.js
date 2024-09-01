"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f = require("fs");
const acornmail = require("../index");
(() => {
    try {
        const acorn = acornmail.NewAcornEmailComponents();
        const { colors } = acornmail.acornStyles;
        const divider = acorn.NewDivider(colors.DeepPurple.M700);
        const boilerplate = acorn.GetBoilerplate([divider], true);
        f.writeFileSync('boilerplate.html', boilerplate);
    }
    catch (error) {
        console.log(error);
    }
})();
