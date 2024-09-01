"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("../styles/colors");
function NewContent(params) {
    let color = colors_1.default.Grey.M800;
    if (params.Color) {
        color = params.Color;
    }
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td
      class="col p-sm-16"
      align="center"
      bgcolor="${color}"
      width="100%"
      ${params.Image ? `background="${params.Image}"` : ''}
      ${params.Image ? `style="background-image: url('${params.Image}'); background-repeat: no-repeat; background-position: center; background-size: cover;"` : ''}
    >
      <div class="spacer" style="line-height: 162px; height: 162px;"></div>
        ${params.Content}
      <div class="spacer" style="line-height: 162px; height: 162px;"></div>
    </td>
  </tr>
</table>`;
}
exports.default = NewContent;
