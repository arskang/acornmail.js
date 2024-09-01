import { z } from 'zod';
import { ContentParams } from '../types/index';
import colors from '../styles/colors';

export default function NewContent(params: z.infer<typeof ContentParams>): string {
  let color = colors.Grey.M800;
  if (params.Color) {
    color = params.Color;
  }
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td
      class="col p-sm-16"
      align="center"
      bgcolor="${color}"
      width="100%"
      ${params.Image ? `background="${params.Image}"` : ''}
      ${params.Image ? `style="background-image: url('${params.Image}'); background-repeat: no-repeat; background-position: center; background-size: cover;"` : ''}
    >
      <div class="spacer" style="line-height: 162px; height: 162px;"></div>
        ${params.Content}
      <div class="spacer" style="line-height: 162px; height: 162px;"></div>
    </td>
  </tr>
</table>`;
}
