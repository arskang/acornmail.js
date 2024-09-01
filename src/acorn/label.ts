import { z } from 'zod';
import { LabelParams } from '../types/index';
import colors from '../styles/colors';
import { RGX_HEXCOLOR } from '../styles/regex';

function getLabelFilled(
  params: z.infer<typeof LabelParams>,
  color: string,
  textColor: string,
): string {
  return `<span style="border-width: 2px 4px; mso-border-width-alt: 4px; border-style: solid; border-color: ${color}; background-color: ${color}; border-radius: 3px; color: ${textColor}; font-size: 75%; line-height: 100%; mso-line-height-rule: exactly;">${params.Text}</span>`;
}

function getLabelOutlined(
  params: z.infer<typeof LabelParams>,
  color: string,
  textColor: string,
): string {
  return `<span style="padding: 1px 4px; mso-padding-alt: 4px; border: 1px solid ${color}; border-radius: 3px; color: ${textColor}; font-size: 75%; line-height: 100%; mso-line-height-rule: exactly;">${params.Text}</span>`;
}

function getLabel(params: z.infer<typeof LabelParams>): string {
  if (params) {
    let color = colors.Green.M800;
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
      return getLabelOutlined(params, color, txtColor);
    }
    return getLabelFilled(params, color, txtColor);
  }
  return '';
}

export default function NewLabel(props: z.infer<typeof LabelParams>): string {
  const params = LabelParams.parse(props);
  return getLabel(params);
}
