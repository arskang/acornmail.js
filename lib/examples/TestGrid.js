"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f = require("fs");
const acornmail = require("../index");
(() => {
    try {
        const acorn = acornmail.NewAcornEmailComponents();
        const widthColumns = acornmail.acornStyles.columns;
        const { colors } = acornmail.acornStyles;
        const grid = acorn.NewGrid([
            [
                {
                    Content: '100%',
                    Styles: {
                        Width: widthColumns.Full,
                        Color: colors.Purple.M700,
                        TextColor: colors.White,
                    },
                },
            ],
            undefined,
            [
                {
                    Content: '1/2 de columna',
                    Styles: {
                        Width: widthColumns.Medium,
                    },
                },
                {
                    Content: '1/2 de columna',
                    Styles: {
                        Width: widthColumns.Medium,
                    },
                },
            ],
        ]);
        const boilerplate = acorn.GetBoilerplate([grid]);
        f.writeFileSync('boilerplate.html', boilerplate);
    }
    catch (error) {
        console.log(error);
    }
})();
