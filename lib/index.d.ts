import { z } from 'zod';
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
export declare function NewAcornEmailComponents(): {
    NewAccordion: typeof NewAccordion;
    NewAlert: typeof NewAlert;
    GetBoilerplate: typeof GetBoilerplate;
    NewButton: typeof NewButton;
    NewContent: typeof NewContent;
    NewCoupon: typeof NewCoupon;
    NewPromo: typeof NewPromo;
    NewRow: typeof NewRow;
    NewGrid: typeof NewGrid;
    NewImage: typeof NewImage;
    NewLabel: typeof NewLabel;
    NewTestimonial: typeof NewTestimonial;
    NewTimeline: typeof NewTimeline;
    NewSpacer: typeof NewSpacer;
    NewDivider: typeof NewDivider;
};
export declare function MergeVariables(temp: string, data: {
    [key: string]: string;
}): string;
export declare const acornStyles: {
    colors: {
        White: string;
        Black: string;
        Brown: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
        };
        Grey: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
        };
        BlueGrey: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
        };
        Red: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Pink: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Purple: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        DeepPurple: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Indigo: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Blue: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        LightBlue: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Cyan: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Teal: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Green: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        LightGreen: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Lime: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Yellow: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Amber: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        Orange: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
        DeepOrange: {
            M50: string;
            M100: string;
            M200: string;
            M300: string;
            M400: string;
            M500: string;
            M600: string;
            M700: string;
            M800: string;
            M900: string;
            A100: string;
            A200: string;
            A400: string;
            A700: string;
        };
    };
    align: typeof types.AlignEnum;
    types: typeof types.TypesEnum;
    sizes: typeof types.SizesEnum;
    columns: typeof types.ColumnsEnum;
};
export declare const acornHelpers: {
    RGX_URL: RegExp;
    RGX_HEXCOLOR: RegExp;
};
export declare const acornTypes: {
    AcornVariables: z.ZodRecord<z.ZodString, z.ZodString>;
    Template: z.ZodString;
    Color: z.ZodString;
    FontSize: z.ZodString;
    WidthColumn: z.ZodString;
    ColumnStyles: z.ZodObject<{
        Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
        Color: z.ZodOptional<z.ZodString>;
        Width: z.ZodOptional<z.ZodString>;
        TextColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Align?: types.AlignEnum | undefined;
        Color?: string | undefined;
        Width?: string | undefined;
        TextColor?: string | undefined;
    }, {
        Align?: types.AlignEnum | undefined;
        Color?: string | undefined;
        Width?: string | undefined;
        TextColor?: string | undefined;
    }>;
    ButtonStyles: z.ZodObject<{
        FullWidth: z.ZodOptional<z.ZodBoolean>;
        Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
        Color: z.ZodOptional<z.ZodString>;
        TextColor: z.ZodOptional<z.ZodString>;
        Type: z.ZodOptional<z.ZodNativeEnum<typeof types.TypesEnum>>;
    }, "strip", z.ZodTypeAny, {
        Align?: types.AlignEnum | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
        FullWidth?: boolean | undefined;
        Type?: types.TypesEnum | undefined;
    }, {
        Align?: types.AlignEnum | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
        FullWidth?: boolean | undefined;
        Type?: types.TypesEnum | undefined;
    }>;
    AlertStyles: z.ZodObject<{
        Outlined: z.ZodOptional<z.ZodBoolean>;
        Color: z.ZodOptional<z.ZodString>;
        TextColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Outlined?: boolean | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
    }, {
        Outlined?: boolean | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
    }>;
    AccordionStyles: z.ZodObject<{
        Color: z.ZodOptional<z.ZodString>;
        TitleColor: z.ZodOptional<z.ZodString>;
        ContentColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Color?: string | undefined;
        TitleColor?: string | undefined;
        ContentColor?: string | undefined;
    }, {
        Color?: string | undefined;
        TitleColor?: string | undefined;
        ContentColor?: string | undefined;
    }>;
    LabelStyles: z.ZodObject<{
        Outlined: z.ZodOptional<z.ZodBoolean>;
        Color: z.ZodOptional<z.ZodString>;
        TextColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Outlined?: boolean | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
    }, {
        Outlined?: boolean | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
    }>;
    TestimonialStyles: z.ZodObject<{
        Image: z.ZodOptional<z.ZodString>;
        Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
        BorderColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Align?: types.AlignEnum | undefined;
        Image?: string | undefined;
        BorderColor?: string | undefined;
    }, {
        Align?: types.AlignEnum | undefined;
        Image?: string | undefined;
        BorderColor?: string | undefined;
    }>;
    CouponStyles: z.ZodObject<{
        Dashed: z.ZodOptional<z.ZodBoolean>;
        Color: z.ZodOptional<z.ZodString>;
        BorderColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Color?: string | undefined;
        BorderColor?: string | undefined;
        Dashed?: boolean | undefined;
    }, {
        Color?: string | undefined;
        BorderColor?: string | undefined;
        Dashed?: boolean | undefined;
    }>;
    ColumnParams: z.ZodObject<{
        Content: z.ZodString;
        Styles: z.ZodOptional<z.ZodObject<{
            Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
            Color: z.ZodOptional<z.ZodString>;
            Width: z.ZodOptional<z.ZodString>;
            TextColor: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            Width?: string | undefined;
            TextColor?: string | undefined;
        }, {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            Width?: string | undefined;
            TextColor?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Content: string;
        Styles?: {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            Width?: string | undefined;
            TextColor?: string | undefined;
        } | undefined;
    }, {
        Content: string;
        Styles?: {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            Width?: string | undefined;
            TextColor?: string | undefined;
        } | undefined;
    }>;
    ButtonParams: z.ZodObject<{
        Text: z.ZodString;
        Link: z.ZodString;
        Styles: z.ZodOptional<z.ZodObject<{
            FullWidth: z.ZodOptional<z.ZodBoolean>;
            Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
            Color: z.ZodOptional<z.ZodString>;
            TextColor: z.ZodOptional<z.ZodString>;
            Type: z.ZodOptional<z.ZodNativeEnum<typeof types.TypesEnum>>;
        }, "strip", z.ZodTypeAny, {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: types.TypesEnum | undefined;
        }, {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: types.TypesEnum | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Text: string;
        Link: string;
        Styles?: {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: types.TypesEnum | undefined;
        } | undefined;
    }, {
        Text: string;
        Link: string;
        Styles?: {
            Align?: types.AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: types.TypesEnum | undefined;
        } | undefined;
    }>;
    AlertParams: z.ZodObject<{
        Content: z.ZodString;
        Styles: z.ZodOptional<z.ZodObject<{
            Outlined: z.ZodOptional<z.ZodBoolean>;
            Color: z.ZodOptional<z.ZodString>;
            TextColor: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        }, {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Content: string;
        Styles?: {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        } | undefined;
    }, {
        Content: string;
        Styles?: {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        } | undefined;
    }>;
    AccordionParams: z.ZodObject<{
        Title: z.ZodString;
        Content: z.ZodString;
        Styles: z.ZodOptional<z.ZodObject<{
            Color: z.ZodOptional<z.ZodString>;
            TitleColor: z.ZodOptional<z.ZodString>;
            ContentColor: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Color?: string | undefined;
            TitleColor?: string | undefined;
            ContentColor?: string | undefined;
        }, {
            Color?: string | undefined;
            TitleColor?: string | undefined;
            ContentColor?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Content: string;
        Title: string;
        Styles?: {
            Color?: string | undefined;
            TitleColor?: string | undefined;
            ContentColor?: string | undefined;
        } | undefined;
    }, {
        Content: string;
        Title: string;
        Styles?: {
            Color?: string | undefined;
            TitleColor?: string | undefined;
            ContentColor?: string | undefined;
        } | undefined;
    }>;
    LabelParams: z.ZodObject<{
        Text: z.ZodString;
        Styles: z.ZodOptional<z.ZodObject<{
            Outlined: z.ZodOptional<z.ZodBoolean>;
            Color: z.ZodOptional<z.ZodString>;
            TextColor: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        }, {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Text: string;
        Styles?: {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        } | undefined;
    }, {
        Text: string;
        Styles?: {
            Outlined?: boolean | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
        } | undefined;
    }>;
    ContentParams: z.ZodObject<{
        Content: z.ZodString;
        Image: z.ZodOptional<z.ZodString>;
        Color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Content: string;
        Color?: string | undefined;
        Image?: string | undefined;
    }, {
        Content: string;
        Color?: string | undefined;
        Image?: string | undefined;
    }>;
    TimelineParams: z.ZodObject<{
        Time: z.ZodString;
        Title: z.ZodString;
        Content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        Content: string;
        Title: string;
        Time: string;
    }, {
        Content: string;
        Title: string;
        Time: string;
    }>;
    TestimonialParams: z.ZodObject<{
        Testimonial: z.ZodString;
        Author: z.ZodString;
        Icon: z.ZodOptional<z.ZodBoolean>;
        Styles: z.ZodOptional<z.ZodObject<{
            Image: z.ZodOptional<z.ZodString>;
            Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
            BorderColor: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Align?: types.AlignEnum | undefined;
            Image?: string | undefined;
            BorderColor?: string | undefined;
        }, {
            Align?: types.AlignEnum | undefined;
            Image?: string | undefined;
            BorderColor?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Testimonial: string;
        Author: string;
        Styles?: {
            Align?: types.AlignEnum | undefined;
            Image?: string | undefined;
            BorderColor?: string | undefined;
        } | undefined;
        Icon?: boolean | undefined;
    }, {
        Testimonial: string;
        Author: string;
        Styles?: {
            Align?: types.AlignEnum | undefined;
            Image?: string | undefined;
            BorderColor?: string | undefined;
        } | undefined;
        Icon?: boolean | undefined;
    }>;
    ImageParams: z.ZodObject<{
        Image: z.ZodString;
        Alt: z.ZodString;
        WidthColumn: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Image: string;
        Alt: string;
        WidthColumn?: string | undefined;
    }, {
        Image: string;
        Alt: string;
        WidthColumn?: string | undefined;
    }>;
    CouponParams: z.ZodObject<{
        Content: z.ZodString;
        Button: z.ZodOptional<z.ZodObject<{
            Text: z.ZodString;
            Link: z.ZodString;
            Styles: z.ZodOptional<z.ZodObject<{
                FullWidth: z.ZodOptional<z.ZodBoolean>;
                Align: z.ZodOptional<z.ZodNativeEnum<typeof types.AlignEnum>>;
                Color: z.ZodOptional<z.ZodString>;
                TextColor: z.ZodOptional<z.ZodString>;
                Type: z.ZodOptional<z.ZodNativeEnum<typeof types.TypesEnum>>;
            }, "strip", z.ZodTypeAny, {
                Align?: types.AlignEnum | undefined;
                Color?: string | undefined;
                TextColor?: string | undefined;
                FullWidth?: boolean | undefined;
                Type?: types.TypesEnum | undefined;
            }, {
                Align?: types.AlignEnum | undefined;
                Color?: string | undefined;
                TextColor?: string | undefined;
                FullWidth?: boolean | undefined;
                Type?: types.TypesEnum | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            Text: string;
            Link: string;
            Styles?: {
                Align?: types.AlignEnum | undefined;
                Color?: string | undefined;
                TextColor?: string | undefined;
                FullWidth?: boolean | undefined;
                Type?: types.TypesEnum | undefined;
            } | undefined;
        }, {
            Text: string;
            Link: string;
            Styles?: {
                Align?: types.AlignEnum | undefined;
                Color?: string | undefined;
                TextColor?: string | undefined;
                FullWidth?: boolean | undefined;
                Type?: types.TypesEnum | undefined;
            } | undefined;
        }>>;
        Styles: z.ZodOptional<z.ZodObject<{
            Dashed: z.ZodOptional<z.ZodBoolean>;
            Color: z.ZodOptional<z.ZodString>;
            BorderColor: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Color?: string | undefined;
            BorderColor?: string | undefined;
            Dashed?: boolean | undefined;
        }, {
            Color?: string | undefined;
            BorderColor?: string | undefined;
            Dashed?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Content: string;
        Styles?: {
            Color?: string | undefined;
            BorderColor?: string | undefined;
            Dashed?: boolean | undefined;
        } | undefined;
        Button?: {
            Text: string;
            Link: string;
            Styles?: {
                Align?: types.AlignEnum | undefined;
                Color?: string | undefined;
                TextColor?: string | undefined;
                FullWidth?: boolean | undefined;
                Type?: types.TypesEnum | undefined;
            } | undefined;
        } | undefined;
    }, {
        Content: string;
        Styles?: {
            Color?: string | undefined;
            BorderColor?: string | undefined;
            Dashed?: boolean | undefined;
        } | undefined;
        Button?: {
            Text: string;
            Link: string;
            Styles?: {
                Align?: types.AlignEnum | undefined;
                Color?: string | undefined;
                TextColor?: string | undefined;
                FullWidth?: boolean | undefined;
                Type?: types.TypesEnum | undefined;
            } | undefined;
        } | undefined;
    }>;
    PromoParams: z.ZodObject<{
        Value: z.ZodString;
        Color: z.ZodOptional<z.ZodString>;
        Size: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Value: string;
        Color?: string | undefined;
        Size?: string | undefined;
    }, {
        Value: string;
        Color?: string | undefined;
        Size?: string | undefined;
    }>;
    PromoItems: z.ZodObject<{
        Promo: z.ZodOptional<z.ZodObject<{
            Value: z.ZodString;
            Color: z.ZodOptional<z.ZodString>;
            Size: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        }, {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        }>>;
        Symbol: z.ZodOptional<z.ZodObject<{
            Value: z.ZodString;
            Color: z.ZodOptional<z.ZodString>;
            Size: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        }, {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        }>>;
        Description: z.ZodOptional<z.ZodObject<{
            Value: z.ZodString;
            Color: z.ZodOptional<z.ZodString>;
            Size: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        }, {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Promo?: {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        } | undefined;
        Symbol?: {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        } | undefined;
        Description?: {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        } | undefined;
    }, {
        Promo?: {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        } | undefined;
        Symbol?: {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        } | undefined;
        Description?: {
            Value: string;
            Color?: string | undefined;
            Size?: string | undefined;
        } | undefined;
    }>;
};
