"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f = require("fs");
const acornmail = require("../index");
const { acornHelpers, acornStyles } = acornmail;
(() => {
    try {
        // Components
        const acorn = acornmail.NewAcornEmailComponents();
        console.log(acornHelpers.RGX_HEXCOLOR);
        console.log(acornHelpers.RGX_URL);
        // Utilidades
        const widthColumns = acornStyles.columns;
        const { colors } = acornStyles;
        const { types } = acornStyles;
        const aligns = acornStyles.align;
        // NewRow
        const row = acorn.NewRow([
            {
                Content: '1/4 de columna',
                Styles: {
                    Width: widthColumns.Quarter,
                },
            },
            {
                Content: '1/2 de columna',
                Styles: {
                    Width: widthColumns.Medium,
                    Color: colors.Purple.M700,
                    TextColor: colors.White,
                },
            },
            {
                Content: '1/4 de columna',
                Styles: {
                    Width: widthColumns.Quarter,
                },
            },
        ]);
        // NewAlert
        const alert = acorn.NewAlert({
            Content: 'Alert',
        });
        const alertOutlined = acorn.NewAlert({
            Content: 'Alert',
            Styles: {
                Outlined: true,
            },
        });
        // NewButton
        const buttonFilled = acorn.NewButton({
            Text: 'Filled button',
            Link: 'http://docs.thememountain.com/acorn/',
            Styles: {
                FullWidth: true,
            },
        });
        const buttonOutlined = acorn.NewButton({
            Text: 'Outlined button',
            Link: 'http://docs.thememountain.com/acorn/',
            Styles: {
                Type: types.Outlined,
            },
        });
        const buttonPhill = acorn.NewButton({
            Text: 'Pill button',
            Link: 'http://docs.thememountain.com/acorn/',
            Styles: {
                Type: types.Pill,
                Align: aligns.Center,
            },
        });
        // NewAccordion
        const accordion = acorn.NewAccordion([
            {
                Title: 'Panel 1',
                Content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            },
            {
                Title: 'Panel 2',
                Content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                Styles: {
                    Color: colors.Cyan.M300,
                    TitleColor: colors.White,
                    ContentColor: colors.Cyan.M300,
                },
            },
        ]);
        // NewSpacer
        const spacer = acorn.NewSpacer();
        // NewDivider
        const divider = acorn.NewDivider(colors.DeepPurple.M700);
        // Label
        const labelFilled = acorn.NewLabel({
            Text: 'filled label',
        });
        const labelOutlined = acorn.NewLabel({
            Text: 'outlined label',
            Styles: {
                Outlined: true,
            },
        });
        // Content
        const content = acorn.NewContent({
            Content: row,
            Image: '',
        });
        // withoutMargins := true
        // b := acorn.GetBoilerplate(acorntypes.AcornComponents{content}, &withoutMargins)
        const timeline = acorn.NewTimeline([
            {
                Time: '2007 - 20082007 - 2008',
                Title: 'Massachusetts Institute of TechnologyMassachusetts Institute of TechnologyMassachusetts Institute of Technology',
                Content: 'Co-wrote a book on the Semantic Web and Best Practices for Developers.Co-wrote a book on the Semantic Web and Best Practices for Developers.Co-wrote a book on the Semantic Web and Best Practices for Developers.',
            },
            {
                Time: '2007 - 20082007 - 2008',
                Title: 'Massachusetts Institute of TechnologyMassachusetts Institute of TechnologyMassachusetts Institute of Technology',
                Content: 'Co-wrote a book on the Semantic Web and Best Practices for Developers.Co-wrote a book on the Semantic Web and Best Practices for Developers.Co-wrote a book on the Semantic Web and Best Practices for Developers.',
            },
            {
                Time: '2007 - 20082007 - 2008',
                Title: 'Massachusetts Institute of TechnologyMassachusetts Institute of TechnologyMassachusetts Institute of Technology',
                Content: 'Co-wrote a book on the Semantic Web and Best Practices for Developers.Co-wrote a book on the Semantic Web and Best Practices for Developers.Co-wrote a book on the Semantic Web and Best Practices for Developers.',
            },
        ]);
        const boilertemplate = acorn.GetBoilerplate([
            row,
            alert,
            buttonFilled,
            buttonOutlined,
            buttonPhill,
            accordion,
            spacer,
            divider,
            alertOutlined,
            labelFilled,
            labelOutlined,
            content,
            timeline,
        ]);
        f.writeFileSync('boilerplate.html', boilertemplate);
    }
    catch (error) {
        console.log(error);
    }
})();
