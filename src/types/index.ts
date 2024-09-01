import { z } from 'zod';

export const Template = z.string();

export const Color = z.string();

export const FontSize = z.string();

export const WidthColumn = z.string();

export enum AlignEnum {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export const Align = z.nativeEnum(AlignEnum);

export enum TypesEnum {
  Filled = 'filled',
  Outlined = 'outlined',
  Pill = 'pill',
}

export const Types = z.nativeEnum(TypesEnum);

export enum SizesEnum {
  Px12 = '12px',
  Px24 = '24px',
  Px36 = '36px',
  Px48 = '48px',
  Px60 = '60px',
  Px72 = '72px',
  Px84 = '84px',
  Px96 = '96px',
  Px108 = '108px',
  Px120 = '120px',
}

export const Sizes = z.nativeEnum(SizesEnum);

export enum ColumnsEnum {
  Full = '100%',
  Quarter = '138',
  Medium = '276',
  ThreeQuarters = '414',
  OneThird = '184',
  TwoThird = '368',
}

export const Columns = z.nativeEnum(ColumnsEnum);

// Type ColumnStyles
export const ColumnStyles = z.object({
  Align: Align.optional(),
  Color: Color.optional(),
  Width: WidthColumn.optional(),
  TextColor: Color.optional(),
});

// Type ButtonStyles
export const ButtonStyles = z.object({
  FullWidth: z.boolean().optional(),
  Align: Align.optional(),
  Color: Color.optional(),
  TextColor: Color.optional(),
  Type: Types.optional(),
});

// Type AlertStyles
export const AlertStyles = z.object({
  Outlined: z.boolean().optional(),
  Color: Color.optional(),
  TextColor: Color.optional(),
});

// Type AccordionStyles
export const AccordionStyles = z.object({
  Color: Color.optional(),
  TitleColor: Color.optional(),
  ContentColor: Color.optional(),
});

// Type LabelStyles
export const LabelStyles = z.object({
  Outlined: z.boolean().optional(),
  Color: Color.optional(),
  TextColor: Color.optional(),
});

// Type TestimonialStyles
export const TestimonialStyles = z.object({
  Image: z.string().optional(),
  Align: Align.optional(),
  BorderColor: Color.optional(),
});

// Type CouponStyles
export const CouponStyles = z.object({
  Dashed: z.boolean().optional(),
  Color: Color.optional(),
  BorderColor: Color.optional(),
});

export const ColumnParams = z.object({
  Content: z.string(),
  Styles: ColumnStyles.optional(),
});

// Type ButtonParams
export const ButtonParams = z.object({
  Text: z.string(),
  Link: z.string(),
  Styles: ButtonStyles.optional(),
});

// Type AlertParams
export const AlertParams = z.object({
  Content: z.string(),
  Styles: AlertStyles.optional(),
});

// Type AccordionParams
export const AccordionParams = z.object({
  Title: z.string(),
  Content: z.string(),
  Styles: AccordionStyles.optional(),
});

// Type LabelParams
export const LabelParams = z.object({
  Text: z.string(),
  Styles: LabelStyles.optional(),
});

// Type ContentParams
export const ContentParams = z.object({
  Content: z.string(),
  Image: z.string().optional(),
  Color: Color.optional(),
});

// Type TimelineParams
export const TimelineParams = z.object({
  Time: z.string(),
  Title: z.string(),
  Content: z.string(),
});

// Type TestimonialParams
export const TestimonialParams = z.object({
  Testimonial: z.string(),
  Author: z.string(),
  Icon: z.boolean().optional(),
  Styles: TestimonialStyles.optional(),
});

// Type ImageParams
export const ImageParams = z.object({
  Image: z.string(),
  Alt: z.string(),
  WidthColumn: WidthColumn.optional(),
});

// Type CouponParams
export const CouponParams = z.object({
  Content: z.string(),
  Button: ButtonParams.optional(),
  Styles: CouponStyles.optional(),
});

// Type PromoParams
export const PromoParams = z.object({
  Value: z.string(),
  Color: Color.optional(),
  Size: FontSize.optional(),
});

// Type PromoItems
export const PromoItems = z.object({
  Promo: PromoParams.optional(),
  Symbol: PromoParams.optional(),
  Description: PromoParams.optional(),
});
