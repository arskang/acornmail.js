import * as Handlebars from 'handlebars';
import { z } from 'zod';
import colors from './styles/colors';
import * as types from './types';
import { NewDivider, NewSpacer } from './acorn/utilities';
import NewTimeline from './acorn/timeline';
import NewTestimonial from './acorn/testimonial';
import NewLabel from './acorn/label';
import GetBoilerplate from './acorn/boilerplate';
import NewImage from './acorn/image';
import NewContent from './acorn/content';
import { NewGrid, NewRow } from './acorn/grid';
import NewAccordion from './acorn/accordion';
import NewAlert from './acorn/alerts';
import NewButton from './acorn/buttons';
import { NewCoupon, NewPromo } from './acorn/coupon';
import { RGX_HEXCOLOR, RGX_URL } from './styles/regex';

const {
  AlignEnum,
  Align,
  TypesEnum,
  Types,
  SizesEnum,
  Sizes,
  ColumnsEnum,
  Columns,
  Template,
  ...rest
} = types;

const AcornVariables = z.record(z.string());

export function NewAcornEmailComponents() {
  return {
    NewAccordion,
    NewAlert,
    GetBoilerplate,
    NewButton,
    NewContent,
    NewCoupon,
    NewPromo,
    NewRow,
    NewGrid,
    NewImage,
    NewLabel,
    NewTestimonial,
    NewTimeline,
    NewSpacer,
    NewDivider,
  };
}

export function MergeVariables(temp: string, data: { [key: string]: string }): string {
  const templateParse = Template.parse(temp);
  const variables = AcornVariables.parse(data);
  const template = Handlebars.compile(templateParse);
  return template(variables);
}

export const acornStyles = {
  colors,
  align: AlignEnum,
  types: TypesEnum,
  sizes: SizesEnum,
  columns: ColumnsEnum,
};

export const acornHelpers = {
  RGX_URL,
  RGX_HEXCOLOR,
};

export const acornTypes = { ...rest, AcornVariables, Template };
