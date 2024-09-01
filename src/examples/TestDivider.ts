import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();
    const { colors } = acornmail.acornStyles;
    const divider = acorn.NewDivider(colors.DeepPurple.M700);
    const boilerplate = acorn.GetBoilerplate([divider], true);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
