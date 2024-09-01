import { NewAcornEmailComponents } from '../src/index';

test('Acornmail.js', () => {
  expect(NewAcornEmailComponents()).toStrictEqual({
    NewAccordion: expect.any(Function),
    NewAlert: expect.any(Function),
    GetBoilerplate: expect.any(Function),
    NewButton: expect.any(Function),
    NewContent: expect.any(Function),
    NewCoupon: expect.any(Function),
    NewPromo: expect.any(Function),
    NewRow: expect.any(Function),
    NewGrid: expect.any(Function),
    NewImage: expect.any(Function),
    NewLabel: expect.any(Function),
    NewTestimonial: expect.any(Function),
    NewTimeline: expect.any(Function),
    NewSpacer: expect.any(Function),
    NewDivider: expect.any(Function),
  });
});
