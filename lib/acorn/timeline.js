"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const types_1 = require("../types");
const images_1 = require("./images");
const TimelineParamsArray = zod_1.z.array(types_1.TimelineParams);
function getTimeline(params) {
    const { Time = '', Title = '', Content = '' } = params;
    let timeLen = (Time === null || Time === void 0 ? void 0 : Time.length) || 0;
    let titleLen = (Title === null || Title === void 0 ? void 0 : Title.length) || 0;
    let contentLen = (Content === null || Content === void 0 ? void 0 : Content.length) || 0;
    if (timeLen > 11) {
        timeLen = 11;
    }
    if (titleLen > 37) {
        titleLen = 37;
    }
    if (contentLen > 78) {
        contentLen = 78;
    }
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
      <td class="col" width="112">
        <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td style="font-size: 14px; padding: 32px 8px 0 8px;">${params.Time.substring(0, timeLen)}</td>
          </tr>
        </table>
      </td>
      <td class="hide-sm" align="center" width="48" style="vertical-align: top;">
        <img src="${images_1.IMAGE_TIMELINE}" alt="" width="35">
      </td>
      <td class="col" width="392">
        <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
          <tr>
            <td class="py-sm-8" style="padding: 32px 8px 0 8px;">
              <h4 style="margin: 0 0 15px;">${params.Title.substring(0, titleLen)}</h4>
              <p style="margin: 0;">${params.Content.substring(0, contentLen)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
</table>`;
}
function getTimelines(params) {
    const tLine = [];
    if (params && params.length) {
        params.forEach((param) => {
            tLine.push(getTimeline(param));
        });
    }
    return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td style="padding: 32px 24px;">
      ${tLine.join(' ')}
    </td>
  </tr>
</table>`;
}
// Generate a new timeline html element
function NewTimeline(props) {
    const params = TimelineParamsArray.parse(props);
    return getTimelines(params);
}
exports.default = NewTimeline;
