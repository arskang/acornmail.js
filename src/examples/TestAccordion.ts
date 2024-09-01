import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const { colors } = acornmail.acornStyles;

    const accordion = acorn.NewAccordion([
      {
        Title: 'Panel 1',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        Title: 'Panel 2',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        Styles: {
          Color: colors.Cyan.M300,
          TitleColor: colors.White,
          ContentColor: colors.Cyan.M300,
        },
      },
    ]);

    const boilerplate = acorn.GetBoilerplate([accordion]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
