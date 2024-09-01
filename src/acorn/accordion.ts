import { z } from 'zod';
import { AccordionParams } from '../types';
import colors from '../styles/colors';
import { RGX_HEXCOLOR } from '../styles/regex';
import { NewSpacer } from './utilities';

const AccordionParamsArray = z.array(AccordionParams);

function getElement(p: z.infer<typeof AccordionParams>, withoutSpacer: boolean): string {
  let color = colors.Grey.M400;
  let titleColor = colors.Grey.M900;
  let contentColor = colors.Grey.M900;
  if (p.Styles) {
    if (p.Styles.Color && RGX_HEXCOLOR.test(p.Styles.Color)) {
      color = p.Styles.Color;
    }
    if (p.Styles.TitleColor && RGX_HEXCOLOR.test(p.Styles.TitleColor)) {
      titleColor = p.Styles.TitleColor;
    }
    if (p.Styles.ContentColor && RGX_HEXCOLOR.test(p.Styles.ContentColor)) {
      contentColor = p.Styles.ContentColor;
    }
  }

  let spacer = NewSpacer();
  if (withoutSpacer) {
    spacer = '';
  }

  return `<div>
  <a class="toggle-trigger" style="text-decoration: none;">
    <button class="toggle-trigger" style="background-color:${color}; margin: 0; padding: 0; display: block; width: 100%; text-align: left; border: none; outline: none; font-size: 13px;">
      <table bgcolor="${color}" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td style="padding: 16px; color: ${titleColor};">${p.Title}</td>
        </tr>
      </table>
    </button>
  </a>
  <div class="toggle-content">
    <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border: 1px solid ${color};">
      <tr>
        <td style="padding: 16px; color: ${contentColor};">
          ${p.Content}
        </td>
      </tr>
    </table>
  </div>
</div>${spacer}`;
}

function getAccordion(params: z.infer<typeof AccordionParamsArray>): string {
  const elements: string[] = [];
  if (params.length) {
    params.forEach((p, i) => {
      const element = getElement(p, i === (params.length - 1));
      elements.push(element);
    });
  }
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td style="padding: 0 24px;">
      <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td class="col" width="100%" style="padding: 0 8px;">
            ${elements.join(' ')}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

// Generate a new accordion html element
export default function NewAccordion(props: z.infer<typeof AccordionParamsArray>): string {
  const params = AccordionParamsArray.parse(props);
  return getAccordion(params);
}
