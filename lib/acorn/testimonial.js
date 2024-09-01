"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const images_1 = require("./images");
const colors_1 = require("../styles/colors");
function getAuthor(params) {
    if (params && params.Author) {
        return `<small style="color: ${colors_1.default.Grey.M500}; text-transform: uppercase;">${params.Author}</small>`;
    }
    return '';
}
function getTestimonialAvatar(params, align) {
    var _a;
    return `<td class="px-sm-16" style="padding: 0 100px;">
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
  <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
      <td class="col px-sm-16" align="${align}" width="100%">
        <img src="${(_a = params.Styles) === null || _a === void 0 ? void 0 : _a.Image}" width="50" alt="Avatar">
        <h3 style="font-weight: 300; font-style: italic;">${params.Testimonial}</h3>
        ${getAuthor(params)}
      </td>
    </tr>
  </table>
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
</td>`;
}
function getTestimonialBorder(params, align) {
    let borderColor = colors_1.default.Grey.M300;
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
function getTestimonialIcon(params, align) {
    return `<td style="padding: 0 24px;">
  <div class="spacer" style="line-height: 40px; height: 40px!important;">&zwnj;</div>
  <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
      <td class="col" width="100%">
        <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td style="padding: 0 8px;" align="${align}">
              <img src="${images_1.IMAGE_TESTIMONIAL}" alt="Quote" width="33">
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
function getTestimonial(params) {
    if (params) {
        let content;
        let align = types_1.AlignEnum.Left;
        if (params.Styles && params.Styles.Align) {
            align = params.Styles.Align;
        }
        if (params.Icon) {
            content = getTestimonialIcon(params, align);
        }
        else if (params.Styles && params.Styles.Image) {
            content = getTestimonialAvatar(params, align);
        }
        else {
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
function NewTestimonial(props) {
    const params = types_1.TestimonialParams.parse(props);
    return getTestimonial(params);
}
exports.default = NewTestimonial;
