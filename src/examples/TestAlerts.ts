import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const divider = acorn.NewDivider();

    const alert = acorn.NewAlert({
      Content: 'Alert',
    });

    const alertOutlined = acorn.NewAlert({
      Content: 'Alert',
      Styles: {
        Outlined: true,
      },
    });

    const boilerplate = acorn.GetBoilerplate([
      alert,
      divider,
      alertOutlined,
    ]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
