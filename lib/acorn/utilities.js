"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewDivider = exports.NewSpacer = void 0;
const colors_1 = require("../styles/colors");
const regex_1 = require("../styles/regex");
const types_1 = require("../types");
function NewSpacer() {
    return '<div class="spacer py-sm-16" style="line-height: 32px;">&zwnj;</div>';
}
exports.NewSpacer = NewSpacer;
// Generate a new divider html element
function NewDivider(color) {
    let c = colors_1.default.Grey.M300;
    if (color) {
        const colorParse = types_1.Color.parse(color);
        if (regex_1.RGX_HEXCOLOR.test(colorParse)) {
            c = colorParse;
        }
    }
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td class="divider py-sm-24" style="padding: 16px;">
      <div style="background: ${c}; height: 2px; line-height: 2px;" />
    </td>
  </tr>
</table>`;
}
exports.NewDivider = NewDivider;
