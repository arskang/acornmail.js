"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewGrid = exports.NewRow = void 0;
const zod_1 = require("zod");
const types_1 = require("../types");
const utilities_1 = require("./utilities");
const colors_1 = require("../styles/colors");
const ColumnsArray = zod_1.z.array(types_1.ColumnParams).optional();
const ColumnParamsArray = zod_1.z.array(ColumnsArray);
function getCol(c) {
    let width = types_1.ColumnsEnum.Full;
    let align = types_1.AlignEnum.Left;
    let txtColor = colors_1.default.Black;
    let color = '';
    if (c.Styles) {
        if (c.Styles.Width) {
            width = c.Styles.Width;
        }
        if (c.Styles.Align) {
            align = c.Styles.Align;
        }
        if (c.Styles.Color) {
            color = `bgcolor="${c.Styles.Color}"`;
        }
        if (c.Styles.TextColor) {
            txtColor = c.Styles.TextColor;
        }
    }
    return `<td class="col" align="${align}" width="${width}" ${color} style="color: ${txtColor}; padding: 8px; margin-left: 4px; margin-right: 4px;">${c.Content}</td>`;
}
function getRow(params) {
    const columns = [];
    if (params && (params === null || params === void 0 ? void 0 : params.length)) {
        params.forEach((column) => {
            const col = getCol(column);
            columns.push(col);
        });
    }
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td style="padding: 0 24px;">
      <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          ${columns.join(' ')}
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
// Generate a new row html element
function NewRow(props) {
    const params = ColumnsArray.parse(props);
    return getRow(params);
}
exports.NewRow = NewRow;
function NewGrid(props) {
    const rows = ColumnParamsArray.parse(props);
    if (rows.length) {
        const grid = [];
        rows.forEach((row) => {
            let r = '';
            if (row) {
                r = NewRow(row);
            }
            else {
                r = (0, utilities_1.NewSpacer)();
            }
            grid.push(r);
        });
        return grid.join(' ');
    }
    return '';
}
exports.NewGrid = NewGrid;
