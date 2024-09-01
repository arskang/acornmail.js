import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const widthColumns = acornmail.acornStyles.columns;
    const { colors } = acornmail.acornStyles;

    const row = acorn.NewRow([
      {
        Content: '1/4 de columna',
        Styles: {
          Width: widthColumns.Quarter,
        },
      },
      {
        Content: '1/2 de columna',
        Styles: {
          Width: widthColumns.Medium,
          Color: colors.Purple.M700,
          TextColor: colors.White,
        },
      },
      {
        Content: '1/4 de columna',
        Styles: {
          Width: widthColumns.Quarter,
        },
      },
    ]);

    const boilerplate = acorn.GetBoilerplate([row]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
