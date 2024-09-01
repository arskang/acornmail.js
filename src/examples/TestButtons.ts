import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const { types } = acornmail.acornStyles;
    const aligns = acornmail.acornStyles.align;
    const widthColumns = acornmail.acornStyles.columns;

    const buttonFilled = acorn.NewButton({
      Text: 'Filled button',
      Link: 'http://docs.thememountain.com/acorn/',
      Styles: {
        FullWidth: true,
      },
    });

    const buttonOutlined = acorn.NewButton({
      Text: 'Outlined button',
      Link: 'http://docs.thememountain.com/acorn/',
      Styles: {
        Type: types.Outlined,
      },
    });

    const buttonPhill = acorn.NewButton({
      Text: 'Pill button',
      Link: 'http://docs.thememountain.com/acorn/',
      Styles: {
        Type: types.Pill,
        Align: aligns.Center,
      },
    });

    const grid = acorn.NewGrid([
      [
        {
          Content: buttonFilled,
          Styles: {
            Width: widthColumns.Full,
          },
        },
      ],
      undefined, // Add spacer
      [
        {
          Content: buttonOutlined,
          Styles: {
            Width: widthColumns.Medium,
          },
        },
        {
          Content: buttonPhill,
          Styles: {
            Width: widthColumns.Medium,
          },
        },
      ],
    ]);

    const boilerplate = acorn.GetBoilerplate([grid]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
