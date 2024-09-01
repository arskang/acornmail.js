import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const aligns = acornmail.acornStyles.align;
    const { colors } = acornmail.acornStyles;

    const variables = {
      Name: 'Euclides Demóstenes',
      Token: 'Q2FwZXJ1Y2l0YSByb2ph',
    };

    const image = acorn.NewImage({
      Image: 'https://fastly.picsum.photos/id/284/536/354.jpg?hmac=e8lLizGxaVIQy3ILytDAkWUwFvYLGAzDiqQU20owvHY',
      Alt: 'Logo',
    });

    const button = acorn.NewButton({
      Text: 'Activar cuenta',
      Link: 'https://www.example.com?t={{Token}}',
      Styles: {
        Align: aligns.Center,
        Color: colors.Cyan.M700,
        TextColor: colors.White,
      },
    });

    const grid = acorn.NewGrid([
      [{ Content: image }],
      [
        {
          Content: '<h1>¡Bienvenido!</h1>',
          Styles: {
            Align: aligns.Center,
          },
        },
      ],
      [
        {
          Content: 'Hola <b>{{Name}}</b> gracias por registrarte en nuestro sitio web, para poder activar tu cuenta da click en el siguiente enlace:',
          Styles: {
            Align: aligns.Center,
          },
        },
      ],
      undefined,
      [
        {
          Content: button,
          Styles: {
            Align: aligns.Center,
          },
        },
      ],
    ]);

    const boilerplate = acorn.GetBoilerplate([grid]);

    const html = acornmail.MergeVariables(boilerplate, variables);

    f.writeFileSync('boilerplate.html', html);
  } catch (error) {
    console.log(error);
  }
})();
