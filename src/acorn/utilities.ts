import colors from '../styles/colors';
import { RGX_HEXCOLOR } from '../styles/regex';
import { Color } from '../types';

export function NewSpacer(): string {
  return '<div class="spacer py-sm-16" style="line-height: 32px;">&zwnj;</div>';
}

// Generate a new divider html element
export function NewDivider(color?: string): string {
  let c = colors.Grey.M300;
  if (color) {
    const colorParse = Color.parse(color);
    if (RGX_HEXCOLOR.test(colorParse)) {
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
