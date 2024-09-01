import { z } from 'zod';

import { TimelineParams } from '../types';
import { IMAGE_TIMELINE } from './images';

const TimelineParamsArray = z.array(TimelineParams);

function getTimeline(params: z.infer<typeof TimelineParams>): string {
  const { Time = '', Title = '', Content = '' } = params;

  let timeLen = Time?.length || 0;
  let titleLen = Title?.length || 0;
  let contentLen = Content?.length || 0;

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
        <img src="${IMAGE_TIMELINE}" alt="" width="35">
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

function getTimelines(params: z.infer<typeof TimelineParamsArray>): string {
  const tLine: string[] = [];
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
export default function NewTimeline(props: z.infer<typeof TimelineParamsArray>): string {
  const params = TimelineParamsArray.parse(props);
  return getTimelines(params);
}
