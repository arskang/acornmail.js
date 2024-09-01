import { z } from 'zod';
import { AlertParams } from '../types';
import colors from '../styles/colors';
import { RGX_HEXCOLOR } from '../styles/regex';

function getAlertBG(params: z.infer<typeof AlertParams>, color: string, txtColor: string): string {
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td bgcolor="${color}" style="color: ${txtColor}; padding: 16px 32px;">
      ${params.Content}
    </td>
  </tr>
</table>`;
}

function getAlertOutlined(
  params: z.infer<typeof AlertParams>,
  color: string,
  txtColor: string,
): string {
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border: 2px solid ${color};">
  <tr>
    <td style="color: ${txtColor}; padding: 16px 32px;">
    ${params.Content}
    </td>
  </tr>
</table>`;
}

function getAlert(params: z.infer<typeof AlertParams>): string {
  if (params) {
    let color = colors.Blue.M800;
    let txtColor = colors.White;
    if (params.Styles) {
      if (params.Styles.Color && RGX_HEXCOLOR.test(params.Styles.Color)) {
        color = params.Styles.Color;
      }
      if (params.Styles.TextColor && RGX_HEXCOLOR.test(params.Styles.TextColor)) {
        txtColor = params.Styles.TextColor;
      } else if (params.Styles.Outlined) {
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
export default function NewAlert(props: z.infer<typeof AlertParams>): string {
  const params = AlertParams.parse(props);
  return getAlert(params);
}
