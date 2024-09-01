import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const color = acornmail.acornStyles.colors;
    const aligns = acornmail.acornStyles.align;

    const coupon = acorn.NewCoupon({
      Content: acorn.NewGrid([
        [{
          Content: `
          <div style="font-size: 13px; text-transform: uppercase;">¡Gracias por registrarte!<br>Disfruta</div>
          <div style="font-size: 72px; font-weight: 700; line-height: 100%;">$10 DESC</div>
          <div class="spacer py-sm-8" style="line-height: 16px;">‌</div>
          <div style="font-size: 20px; letter-spacing: 2px; line-height: 100%; text-transform: uppercase;">En tu primera compra</div>
          `,
          Styles: {
            Align: aligns.Center,
            TextColor: color.White,
          },
        }],
        undefined,
      ]),
      Button: {
        Link: 'https://www.example.com',
        Text: 'COMPRA AHORA',
        Styles: {
          Color: color.White,
          TextColor: color.Blue.M500,
          Align: aligns.Center,
        },
      },
    });

    const boilerplate = acorn.GetBoilerplate([coupon]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
