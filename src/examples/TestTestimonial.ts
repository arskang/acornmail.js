import * as f from 'fs';
import * as acornmail from '../index';

(() => {
  try {
    const acorn = acornmail.NewAcornEmailComponents();

    const aligns = acornmail.acornStyles.align;
    const { colors } = acornmail.acornStyles;

    const testimonialBorder = acorn.NewTestimonial({
      Testimonial: 'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
      Author: 'Steve Jobs',
      Styles: {
        BorderColor: colors.Orange.M500,
      },
    });

    const testimonialIcon = acorn.NewTestimonial({
      Testimonial: 'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
      Author: 'Steve Jobs',
      Icon: true,
    });

    const testimonialImage = acorn.NewTestimonial({
      Testimonial: 'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
      Author: 'Steve Jobs',
      Styles: {
        Image: 'https://gravatar.com/avatar/5ad269974f4c69c9ff6eca2ad2d1d0b8?s=400&d=robohash&r=x',
        Align: aligns.Center,
      },
    });

    const boilerplate = acorn.GetBoilerplate([
      testimonialBorder,
      testimonialIcon,
      testimonialImage,
    ]);

    f.writeFileSync('boilerplate.html', boilerplate);
  } catch (error) {
    console.log(error);
  }
})();
