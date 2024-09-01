"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const colors_1 = require("../styles/colors");
const regex_1 = require("../styles/regex");
function getAlertBG(params, color, txtColor) {
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td bgcolor="${color}" style="color: ${txtColor}; padding: 16px 32px;">
      ${params.Content}
    </td>
  </tr>
</table>`;
}
function getAlertOutlined(params, color, txtColor) {
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border: 2px solid ${color};">
  <tr>
    <td style="color: ${txtColor}; padding: 16px 32px;">
    ${params.Content}
    </td>
  </tr>
</table>`;
}
function getAlert(params) {
    if (params) {
        let color = colors_1.default.Blue.M800;
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
            return getAlertOutlined(params, color, txtColor);
        }
        return getAlertBG(params, color, txtColor);
    }
    return '';
}
// Generate a new alert html element
function NewAlert(props) {
    const params = types_1.AlertParams.parse(props);
    return getAlert(params);
}
exports.default = NewAlert;
