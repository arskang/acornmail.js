import { z } from 'zod';
export declare const Template: z.ZodString;
export declare const Color: z.ZodString;
export declare const FontSize: z.ZodString;
export declare const WidthColumn: z.ZodString;
export declare enum AlignEnum {
    Left = "left",
    Right = "right",
    Center = "center"
}
export declare const Align: z.ZodNativeEnum<typeof AlignEnum>;
export declare enum TypesEnum {
    Filled = "filled",
    Outlined = "outlined",
    Pill = "pill"
}
export declare const Types: z.ZodNativeEnum<typeof TypesEnum>;
export declare enum SizesEnum {
    Px12 = "12px",
    Px24 = "24px",
    Px36 = "36px",
    Px48 = "48px",
    Px60 = "60px",
    Px72 = "72px",
    Px84 = "84px",
    Px96 = "96px",
    Px108 = "108px",
    Px120 = "120px"
}
export declare const Sizes: z.ZodNativeEnum<typeof SizesEnum>;
export declare enum ColumnsEnum {
    Full = "100%",
    Quarter = "138",
    Medium = "276",
    ThreeQuarters = "414",
    OneThird = "184",
    TwoThird = "368"
}
export declare const Columns: z.ZodNativeEnum<typeof ColumnsEnum>;
export declare const ColumnStyles: z.ZodObject<{
    Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
    Color: z.ZodOptional<z.ZodString>;
    Width: z.ZodOptional<z.ZodString>;
    TextColor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Align?: AlignEnum | undefined;
    Color?: string | undefined;
    Width?: string | undefined;
    TextColor?: string | undefined;
}, {
    Align?: AlignEnum | undefined;
    Color?: string | undefined;
    Width?: string | undefined;
    TextColor?: string | undefined;
}>;
export declare const ButtonStyles: z.ZodObject<{
    FullWidth: z.ZodOptional<z.ZodBoolean>;
    Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
    Color: z.ZodOptional<z.ZodString>;
    TextColor: z.ZodOptional<z.ZodString>;
    Type: z.ZodOptional<z.ZodNativeEnum<typeof TypesEnum>>;
}, "strip", z.ZodTypeAny, {
    Align?: AlignEnum | undefined;
    Color?: string | undefined;
    TextColor?: string | undefined;
    FullWidth?: boolean | undefined;
    Type?: TypesEnum | undefined;
}, {
    Align?: AlignEnum | undefined;
    Color?: string | undefined;
    TextColor?: string | undefined;
    FullWidth?: boolean | undefined;
    Type?: TypesEnum | undefined;
}>;
export declare const AlertStyles: z.ZodObject<{
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
export declare const AccordionStyles: z.ZodObject<{
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
export declare const LabelStyles: z.ZodObject<{
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
export declare const TestimonialStyles: z.ZodObject<{
    Image: z.ZodOptional<z.ZodString>;
    Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
    BorderColor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    Align?: AlignEnum | undefined;
    Image?: string | undefined;
    BorderColor?: string | undefined;
}, {
    Align?: AlignEnum | undefined;
    Image?: string | undefined;
    BorderColor?: string | undefined;
}>;
export declare const CouponStyles: z.ZodObject<{
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
export declare const ColumnParams: z.ZodObject<{
    Content: z.ZodString;
    Styles: z.ZodOptional<z.ZodObject<{
        Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
        Color: z.ZodOptional<z.ZodString>;
        Width: z.ZodOptional<z.ZodString>;
        TextColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        Width?: string | undefined;
        TextColor?: string | undefined;
    }, {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        Width?: string | undefined;
        TextColor?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    Content: string;
    Styles?: {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        Width?: string | undefined;
        TextColor?: string | undefined;
    } | undefined;
}, {
    Content: string;
    Styles?: {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        Width?: string | undefined;
        TextColor?: string | undefined;
    } | undefined;
}>;
export declare const ButtonParams: z.ZodObject<{
    Text: z.ZodString;
    Link: z.ZodString;
    Styles: z.ZodOptional<z.ZodObject<{
        FullWidth: z.ZodOptional<z.ZodBoolean>;
        Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
        Color: z.ZodOptional<z.ZodString>;
        TextColor: z.ZodOptional<z.ZodString>;
        Type: z.ZodOptional<z.ZodNativeEnum<typeof TypesEnum>>;
    }, "strip", z.ZodTypeAny, {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
        FullWidth?: boolean | undefined;
        Type?: TypesEnum | undefined;
    }, {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
        FullWidth?: boolean | undefined;
        Type?: TypesEnum | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    Text: string;
    Link: string;
    Styles?: {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
        FullWidth?: boolean | undefined;
        Type?: TypesEnum | undefined;
    } | undefined;
}, {
    Text: string;
    Link: string;
    Styles?: {
        Align?: AlignEnum | undefined;
        Color?: string | undefined;
        TextColor?: string | undefined;
        FullWidth?: boolean | undefined;
        Type?: TypesEnum | undefined;
    } | undefined;
}>;
export declare const AlertParams: z.ZodObject<{
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
export declare const AccordionParams: z.ZodObject<{
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
export declare const LabelParams: z.ZodObject<{
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
export declare const ContentParams: z.ZodObject<{
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
export declare const TimelineParams: z.ZodObject<{
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
export declare const TestimonialParams: z.ZodObject<{
    Testimonial: z.ZodString;
    Author: z.ZodString;
    Icon: z.ZodOptional<z.ZodBoolean>;
    Styles: z.ZodOptional<z.ZodObject<{
        Image: z.ZodOptional<z.ZodString>;
        Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
        BorderColor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Align?: AlignEnum | undefined;
        Image?: string | undefined;
        BorderColor?: string | undefined;
    }, {
        Align?: AlignEnum | undefined;
        Image?: string | undefined;
        BorderColor?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    Testimonial: string;
    Author: string;
    Styles?: {
        Align?: AlignEnum | undefined;
        Image?: string | undefined;
        BorderColor?: string | undefined;
    } | undefined;
    Icon?: boolean | undefined;
}, {
    Testimonial: string;
    Author: string;
    Styles?: {
        Align?: AlignEnum | undefined;
        Image?: string | undefined;
        BorderColor?: string | undefined;
    } | undefined;
    Icon?: boolean | undefined;
}>;
export declare const ImageParams: z.ZodObject<{
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
export declare const CouponParams: z.ZodObject<{
    Content: z.ZodString;
    Button: z.ZodOptional<z.ZodObject<{
        Text: z.ZodString;
        Link: z.ZodString;
        Styles: z.ZodOptional<z.ZodObject<{
            FullWidth: z.ZodOptional<z.ZodBoolean>;
            Align: z.ZodOptional<z.ZodNativeEnum<typeof AlignEnum>>;
            Color: z.ZodOptional<z.ZodString>;
            TextColor: z.ZodOptional<z.ZodString>;
            Type: z.ZodOptional<z.ZodNativeEnum<typeof TypesEnum>>;
        }, "strip", z.ZodTypeAny, {
            Align?: AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: TypesEnum | undefined;
        }, {
            Align?: AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: TypesEnum | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        Text: string;
        Link: string;
        Styles?: {
            Align?: AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: TypesEnum | undefined;
        } | undefined;
    }, {
        Text: string;
        Link: string;
        Styles?: {
            Align?: AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: TypesEnum | undefined;
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
            Align?: AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: TypesEnum | undefined;
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
            Align?: AlignEnum | undefined;
            Color?: string | undefined;
            TextColor?: string | undefined;
            FullWidth?: boolean | undefined;
            Type?: TypesEnum | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const PromoParams: z.ZodObject<{
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
export declare const PromoItems: z.ZodObject<{
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
