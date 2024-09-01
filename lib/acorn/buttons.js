"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const colors_1 = require("../styles/colors");
const regex_1 = require("../styles/regex");
function getButtonOutlined(params, color, txtColor, align, fullWidth) {
    return `<table ${fullWidth} align="${align}" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <th style="border: 2px solid ${color}; border-radius: 3px; mso-padding-alt: 6px 42px 12px;">
      <a href="${params.Link}" style="color: ${txtColor}; display: inline-block; font-size: 13px; line-height: 100%; padding: 12px 42px; text-decoration: none;">${params.Text}</a>
    </th>
  </tr>
</table>`;
}
function getButtonFilled(params, color, txtColor, align, fullWidth) {
    return `<table ${fullWidth} align="${align}" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <th bgcolor="${color}" style="border-radius: 3px; mso-padding-alt: 6px 42px 12px;">
    <a href="${params.Link}" style="color: ${txtColor}; display: inline-block; font-size: 13px; line-height: 100%; padding: 12px 42px; text-decoration: none;">${params.Text}</a>
    </th>
  </tr>
</table>`;
}
function getButtonPill(params, color, txtColor, align, fullWidth) {
    return `<table ${fullWidth} align="${align}" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <th bgcolor="${color}" style="border-radius: 50px; mso-padding-alt: 6px 42px 12px;">
    <a href="${params.Link}" style="color: ${txtColor}; display: inline-block; font-size: 13px; line-height: 100%; padding: 12px 42px; text-decoration: none;">${params.Text}</a>
    </th>
  </tr>
</table>`;
}
function getButton(params) {
    if (params) {
        let color = colors_1.default.Green.M800;
        let txtColor = colors_1.default.White;
        let align = types_1.AlignEnum.Left;
        let fullWidth = '';
        if (params.Styles) {
            if (params.Styles.Color && regex_1.RGX_HEXCOLOR.test(params.Styles.Color)) {
                color = params.Styles.Color;
            }
            if (params.Styles.TextColor && regex_1.RGX_HEXCOLOR.test(params.Styles.TextColor)) {
                txtColor = params.Styles.TextColor;
            }
            else if (params.Styles.Type && params.Styles.Type === types_1.TypesEnum.Outlined) {
                txtColor = color;
            }
            if (params.Styles.Align) {
                align = params.Styles.Align;
            }
            if (params.Styles.FullWidth) {
                fullWidth = 'width="100%"';
            }
        }
        if (params.Styles && params.Styles.Type) {
            switch (params.Styles.Type) {
                case types_1.TypesEnum.Outlined:
                    return getButtonOutlined(params, color, txtColor, align, fullWidth);
                case types_1.TypesEnum.Pill:
                    return getButtonPill(params, color, txtColor, align, fullWidth);
                default:
                    break;
            }
        }
        return getButtonFilled(params, color, txtColor, align, fullWidth);
    }
    return '';
}
// Generate a new button html element
function NewButton(props) {
    const params = types_1.ButtonParams.parse(props);
    return getButton(params);
}
exports.default = NewButton;
