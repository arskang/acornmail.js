import { z } from 'zod';
import { AlignEnum, TestimonialParams } from '../types';
import { IMAGE_TESTIMONIAL } from './images';
import colors from '../styles/colors';

function getAuthor(params: z.infer<typeof TestimonialParams>): string {
  if (params && params.Author) {
    return `<small style="color: ${colors.Grey.M500}; text-transform: uppercase;">${params.Author}</small>`;
  }
  return '';
}

function getTestimonialAvatar(params: z.infer<typeof TestimonialParams>, align: AlignEnum): string {
  return `<td class="px-sm-16" style="padding: 0 100px;">
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
  <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
      <td class="col px-sm-16" align="${align}" width="100%">
        <img src="${params.Styles?.Image}" width="50" alt="Avatar">
        <h3 style="font-weight: 300; font-style: italic;">${params.Testimonial}</h3>
        ${getAuthor(params)}
      </td>
    </tr>
  </table>
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
</td>`;
}

function getTestimonialBorder(params: z.infer<typeof TestimonialParams>, align: AlignEnum): string {
  let borderColor = colors.Grey.M300;

  if (params.Styles && params.Styles.BorderColor) {
    borderColor = params.Styles.BorderColor;
  }

  return `<td class="px-sm-16" style="padding: 0 60px;">
  <div class="spacer" style="line-height: 40px; height: 40px;">&zwnj;</div>
  <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
      <td class="col" width="100%">
        <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td class="pl-sm-16" style="border-left: 2px solid ${borderColor}; padding-left: 30px;" align="${align}">
            <h3 style="font-weight: 500; font-style: italic; margin-top: 0;">${params.Testimonial}</h3>
            ${getAuthor(params)}
          </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <div class="spacer" style="line-height: 40px; height: 40px;">&zwnj;</div>
</td>`;
}

function getTestimonialIcon(params: z.infer<typeof TestimonialParams>, align: AlignEnum): string {
  return `<td style="padding: 0 24px;">
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
  <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
      <td class="col" width="100%">
        <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td style="padding: 0 8px;" align="${align}">
              <img src="${IMAGE_TESTIMONIAL}" alt="Quote" width="33">
              <h3 style="font-weight: 500; font-style: italic;">${params.Testimonial}</h3>
              ${getAuthor(params)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
</td>`;
}

function getTestimonial(params: z.infer<typeof TestimonialParams>): string {
  if (params) {
    let content: string;
    let align = AlignEnum.Left;

    if (params.Styles && params.Styles.Align) {
      align = params.Styles.Align;
    }

    if (params.Icon) {
      content = getTestimonialIcon(params, align);
    } else if (params.Styles && params.Styles.Image) {
      content = getTestimonialAvatar(params, align);
    } else {
      content = getTestimonialBorder(params, align);
    }

    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    ${content}
  </tr>
</table>`;
  }
  return '';
}

export default function NewTestimonial(props: z.infer<typeof TestimonialParams>): string {
  const params = TestimonialParams.parse(props);
  return getTestimonial(params);
}
