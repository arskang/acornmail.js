import { z } from 'zod';
import { AlignEnum, ButtonParams, TypesEnum } from '../types';
import colors from '../styles/colors';
import { RGX_HEXCOLOR } from '../styles/regex';

function getButtonOutlined(
  params: z.infer<typeof ButtonParams>,
  color:string,
  txtColor:string,
  align: AlignEnum,
  fullWidth: string,
): string {
  return `<table ${fullWidth} align="${align}" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <th style="border: 2px solid ${color}; border-radius: 3px; mso-padding-alt: 6px 42px 12px;">
      <a href="${params.Link}" style="color: ${txtColor}; display: inline-block; font-size: 13px; line-height: 100%; padding: 12px 42px; text-decoration: none;">${params.Text}</a>
    </th>
  </tr>
</table>`;
}

function getButtonFilled(
  params: z.infer<typeof ButtonParams>,
  color:string,
  txtColor:string,
  align: AlignEnum,
  fullWidth: string,
): string {
  return `<table ${fullWidth} align="${align}" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <th bgcolor="${color}" style="border-radius: 3px; mso-padding-alt: 6px 42px 12px;">
    <a href="${params.Link}" style="color: ${txtColor}; display: inline-block; font-size: 13px; line-height: 100%; padding: 12px 42px; text-decoration: none;">${params.Text}</a>
    </th>
  </tr>
</table>`;
}

function getButtonPill(
  params: z.infer<typeof ButtonParams>,
  color:string,
  txtColor:string,
  align: AlignEnum,
  fullWidth: string,
): string {
  return `<table ${fullWidth} align="${align}" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <th bgcolor="${color}" style="border-radius: 50px; mso-padding-alt: 6px 42px 12px;">
    <a href="${params.Link}" style="color: ${txtColor}; display: inline-block; font-size: 13px; line-height: 100%; padding: 12px 42px; text-decoration: none;">${params.Text}</a>
    </th>
  </tr>
</table>`;
}

function getButton(params: z.infer<typeof ButtonParams>): string {
  if (params) {
    let color = colors.Green.M800;
    let txtColor = colors.White;
    let align = AlignEnum.Left;
    let fullWidth: string = '';

    if (params.Styles) {
      if (params.Styles.Color && RGX_HEXCOLOR.test(params.Styles.Color)) {
        color = params.Styles.Color;
      }
      if (params.Styles.TextColor && RGX_HEXCOLOR.test(params.Styles.TextColor)) {
        txtColor = params.Styles.TextColor;
      } else if (params.Styles.Type && params.Styles.Type === TypesEnum.Outlined) {
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
        case TypesEnum.Outlined:
          return getButtonOutlined(params, color, txtColor, align, fullWidth);
        case TypesEnum.Pill:
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
export default function NewButton(props: z.infer<typeof ButtonParams>): string {
  const params = ButtonParams.parse(props);
  return getButton(params);
}
