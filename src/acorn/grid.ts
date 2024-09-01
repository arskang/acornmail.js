import { z } from 'zod';
import { AlignEnum, ColumnParams, ColumnsEnum } from '../types';
import { NewSpacer } from './utilities';
import colors from '../styles/colors';

const ColumnsArray = z.array(ColumnParams).optional();
const ColumnParamsArray = z.array(ColumnsArray);

function getCol(c: z.infer<typeof ColumnParams>): string {
  let width: string = ColumnsEnum.Full;
  let align: string = AlignEnum.Left;
  let txtColor: string = colors.Black;

  let color: string = '';

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

function getRow(params: z.infer<typeof ColumnsArray>): string {
  const columns: string[] = [];
  if (params && params?.length) {
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
export function NewRow(props: z.infer<typeof ColumnsArray>): string {
  const params = ColumnsArray.parse(props);
  return getRow(params);
}

export function NewGrid(props: z.infer<typeof ColumnParamsArray>): string {
  const rows = ColumnParamsArray.parse(props);
  if (rows.length) {
    const grid: string[] = [];
    rows.forEach((row) => {
      let r: string = '';
      if (row) {
        r = NewRow(row);
      } else {
        r = NewSpacer();
      }
      grid.push(r);
    });
    return grid.join(' ');
  }
  return '';
}
