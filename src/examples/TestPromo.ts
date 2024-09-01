import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const color = acornmail.acornStyles.colors;
    const aligns = acornmail.acornStyles.align;

    const promo = acorn.NewPromo({
      Promo: { Value: '25' },
      Symbol: { Value: '%' },
      Description: { Value: 'DESC' },
    });

    const label = acorn.NewLabel({
      Text: '25OFFTODAY',
      Styles: {
        Outlined: true,
        TextColor: color.Red.M500,
        Color: color.Red.M500,
      },
    });

    const coupon = acorn.NewCoupon({
      Content: acorn.NewGrid([
        [{ Content: promo }],
        [{
          Content: `Con el cupón ${label}`,
          Styles: {
            Align: aligns.Center,
            TextColor: color.Grey.M400,
          },
        }],
        undefined,
      ]),
      Button: {
        Link: 'https://www.example.com',
        Text: 'Canjear cupón →',
        Styles: {
          Color: color.Black,
          TextColor: color.White,
          Align: aligns.Center,
        },
      },
      Styles: {
        Dashed: true,
      },
    });

    const boilerplate = acorn.GetBoilerplate([coupon]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
