import { z } from 'zod';
import { ColumnsEnum, ImageParams } from '../types';

export default function NewImage(props: z.infer<typeof ImageParams>): string {
  const params = ImageParams.parse(props);
  let alt = 'Image';
  let width: string = ColumnsEnum.Full;
  if (params.WidthColumn) {
    width = params.WidthColumn;
  }
  if (params.Alt) {
    alt = params.Alt;
  }
  return `<table cellpadding="0" cellspacing="0" role="presentation" width="100%">
  <tr>
    <td class="col" align="center" width="${width}" style="padding: 0 8px;">
      <img src="${params.Image}" alt="${alt}" width="${width}">
    </td>
  </tr>
</table>`;
}
