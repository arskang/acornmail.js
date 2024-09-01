"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../types/index");
const colors_1 = require("../styles/colors");
const regex_1 = require("../styles/regex");
function getLabelFilled(params, color, textColor) {
    return `<span style="border-width: 2px 4px; mso-border-width-alt: 4px; border-style: solid; border-color: ${color}; background-color: ${color}; border-radius: 3px; color: ${textColor}; font-size: 75%; line-height: 100%; mso-line-height-rule: exactly;">${params.Text}</span>`;
}
function getLabelOutlined(params, color, textColor) {
    return `<span style="padding: 1px 4px; mso-padding-alt: 4px; border: 1px solid ${color}; border-radius: 3px; color: ${textColor}; font-size: 75%; line-height: 100%; mso-line-height-rule: exactly;">${params.Text}</span>`;
}
function getLabel(params) {
    if (params) {
        let color = colors_1.default.Green.M800;
        let txtColor = colors_1.default.White;
        if (params.Styles) {
            if (params.Styles.Color && regex_1.RGX_HEXCOLOR.test(params.Styles.Color)) {
                color = params.Styles.Color;
            }
            if (params.Styles.TextColor && regex_1.RGX_HEXCOLOR.test(params.Styles.TextColor)) {
                txtColor = params.Styles.TextColor;
            }
            else if (params.Styles.Outlined) {
                txtColor = color;
            }
        }
        if (params.Styles && params.Styles.Outlined) {
            return getLabelOutlined(params, color, txtColor);
        }
        return getLabelFilled(params, color, txtColor);
    }
    return '';
}
function NewLabel(props) {
    const params = index_1.LabelParams.parse(props);
    return getLabel(params);
}
exports.default = NewLabel;
