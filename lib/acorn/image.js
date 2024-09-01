"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function NewImage(props) {
    const params = types_1.ImageParams.parse(props);
    let alt = 'Image';
    let width = types_1.ColumnsEnum.Full;
    if (params.WidthColumn) {
        width = params.WidthColumn;
    }
    if (params.Alt) {
        alt = params.Alt;
    }
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td class="col" align="center" width="${width}" style="padding: 0 8px;">
      <img src="${params.Image}" alt="${alt}" width="${width}">
    </td>
  </tr>
</table>`;
}
exports.default = NewImage;
