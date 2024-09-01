import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const image = acorn.NewImage({
      Image: 'https://fastly.picsum.photos/id/284/536/354.jpg?hmac=e8lLizGxaVIQy3ILytDAkWUwFvYLGAzDiqQU20owvHY',
      Alt: 'Logo',
    });

    const boilerplate = acorn.GetBoilerplate([image]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
