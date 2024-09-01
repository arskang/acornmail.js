import { z } from 'zod';
import {
  CouponParams, PromoItems, SizesEnum,
} from '../types';
import NewButton from './buttons';
import colors from '../styles/colors';

function getCouponDashed(params: z.infer<typeof CouponParams>, button: string): string {
  let color = colors.White;
  let borderColor = colors.Grey.M300;
  if (params.Styles && params.Styles.Color) {
    color = params.Styles.Color;
  }
  if (params.Styles && params.Styles.BorderColor) {
    borderColor = params.Styles.BorderColor;
  }
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td style="padding: 0 32px;" bgcolor="${color}">
      <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td class="col" align="center" width="100%">
            <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
              <tr>
                <td class="spacer py-sm-16" height="32"></td>
              </tr>
              <tr>
                <td class="px-sm-8" align="center" width="100%" style="padding: 32px; border: 4px dashed ${borderColor};">
                  ${params.Content}
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      ${button}
                    </tr>
                  </table>
                  <div class="spacer py-sm-8" style="line-height: 16px;">&zwnj;</div>
                </td>
              </tr>
              <tr>
                <td class="spacer py-sm-16" height="32"></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function getCouponFilled(params: z.infer<typeof CouponParams>, button: string): string {
  let color = colors.Blue.M500;
  let borderColor = colors.White;
  if (params.Styles && params.Styles.Color) {
    color = params.Styles.Color;
  }
  if (params.Styles && params.Styles.BorderColor) {
    borderColor = params.Styles.BorderColor;
  }
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td class="p-sm-16" bgcolor="${color}" width="100%" style="padding: 32px;">
      <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
          <td class="col" align="center" width="100%" style="border: 1px solid ${borderColor};">
            <table>
              <tr>
                <td class="p-sm-16" style="padding: 32px;">
                  ${params.Content}
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      ${button}
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function getCoupon(params: z.infer<typeof CouponParams>, button: string): string {
  if (params.Styles && params.Styles.Dashed) {
    return getCouponDashed(params, button);
  }
  return getCouponFilled(params, button);
}

// NewCoupon generate a new coupon html element
export function NewCoupon(props: z.infer<typeof CouponParams>): string {
  const params = CouponParams.parse(props);
  let button: string = '';
  if (params.Button) {
    button = NewButton(params.Button);
  }
  return getCoupon(params, button);
}

// NewPromo generate a new promo html element
export function NewPromo(props: z.infer<typeof PromoItems>): string {
  const items = PromoItems.parse(props);
  const colorBlack = colors.Black;
  let promo: string = '';
  let symbol: string = '';
  let description: string = '';
  if (items.Promo) {
    let color = colorBlack;
    let size: string = SizesEnum.Px96;
    if (items.Promo.Color) {
      color = items.Promo.Color;
    }
    if (items.Promo.Size) {
      size = items.Promo.Size;
    }
    promo = `<th style="color: ${color}; font-size: ${size}; line-height: 100%; word-break: break-all;">
${items.Promo.Value}
</th>`;
  }
  if (items.Symbol) {
    let color = colorBlack;
    let size: string = SizesEnum.Px48;
    if (items.Symbol.Color) {
      color = items.Symbol.Color;
    }
    if (items.Symbol.Size) {
      size = items.Symbol.Size;
    }
    symbol = `<div style="color: ${color}; font-size: ${size}; line-height: ${size};">
  ${items.Symbol.Value}
</div>`;
  }
  if (items.Description) {
    let color = colorBlack;
    let size: string = SizesEnum.Px36;
    if (items.Description.Color) {
      color = items.Description.Color;
    }
    if (items.Description.Size) {
      size = items.Description.Size;
    }
    description = `<div style="color: ${color}; font-size: ${size}; line-height: ${size}; mso-line-height-rule: exactly; mso-text-raise: 2px;">
${items.Description.Value}
</div>`;
  }
  return `<table align="center" cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto;">
  <tr>
    ${promo}
    <th style="vertical-align: middle;">
      ${symbol}${description}
    </th>
  </tr>
</table>`;
}
