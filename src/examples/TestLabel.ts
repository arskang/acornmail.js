import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const labelFilled = acorn.NewLabel({
      Text: 'filled label',
    });

    const labelOutlined = acorn.NewLabel({
      Text: 'outlined label',
      Styles: {
        Outlined: true,
      },
    });

    const boilerplate = acorn.GetBoilerplate([
      labelFilled,
      labelOutlined,
    ]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
