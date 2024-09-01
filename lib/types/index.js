"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoItems = exports.PromoParams = exports.CouponParams = exports.ImageParams = exports.TestimonialParams = exports.TimelineParams = exports.ContentParams = exports.LabelParams = exports.AccordionParams = exports.AlertParams = exports.ButtonParams = exports.ColumnParams = exports.CouponStyles = exports.TestimonialStyles = exports.LabelStyles = exports.AccordionStyles = exports.AlertStyles = exports.ButtonStyles = exports.ColumnStyles = exports.Columns = exports.ColumnsEnum = exports.Sizes = exports.SizesEnum = exports.Types = exports.TypesEnum = exports.Align = exports.AlignEnum = exports.WidthColumn = exports.FontSize = exports.Color = exports.Template = void 0;
const zod_1 = require("zod");
exports.Template = zod_1.z.string();
exports.Color = zod_1.z.string();
exports.FontSize = zod_1.z.string();
exports.WidthColumn = zod_1.z.string();
var AlignEnum;
(function (AlignEnum) {
    AlignEnum["Left"] = "left";
    AlignEnum["Right"] = "right";
    AlignEnum["Center"] = "center";
})(AlignEnum = exports.AlignEnum || (exports.AlignEnum = {}));
exports.Align = zod_1.z.nativeEnum(AlignEnum);
var TypesEnum;
(function (TypesEnum) {
    TypesEnum["Filled"] = "filled";
    TypesEnum["Outlined"] = "outlined";
    TypesEnum["Pill"] = "pill";
})(TypesEnum = exports.TypesEnum || (exports.TypesEnum = {}));
exports.Types = zod_1.z.nativeEnum(TypesEnum);
var SizesEnum;
(function (SizesEnum) {
    SizesEnum["Px12"] = "12px";
    SizesEnum["Px24"] = "24px";
    SizesEnum["Px36"] = "36px";
    SizesEnum["Px48"] = "48px";
    SizesEnum["Px60"] = "60px";
    SizesEnum["Px72"] = "72px";
    SizesEnum["Px84"] = "84px";
    SizesEnum["Px96"] = "96px";
    SizesEnum["Px108"] = "108px";
    SizesEnum["Px120"] = "120px";
})(SizesEnum = exports.SizesEnum || (exports.SizesEnum = {}));
exports.Sizes = zod_1.z.nativeEnum(SizesEnum);
var ColumnsEnum;
(function (ColumnsEnum) {
    ColumnsEnum["Full"] = "100%";
    ColumnsEnum["Quarter"] = "138";
    ColumnsEnum["Medium"] = "276";
    ColumnsEnum["ThreeQuarters"] = "414";
    ColumnsEnum["OneThird"] = "184";
    ColumnsEnum["TwoThird"] = "368";
})(ColumnsEnum = exports.ColumnsEnum || (exports.ColumnsEnum = {}));
exports.Columns = zod_1.z.nativeEnum(ColumnsEnum);
// Type ColumnStyles
exports.ColumnStyles = zod_1.z.object({
    Align: exports.Align.optional(),
    Color: exports.Color.optional(),
    Width: exports.WidthColumn.optional(),
    TextColor: exports.Color.optional(),
});
// Type ButtonStyles
exports.ButtonStyles = zod_1.z.object({
    FullWidth: zod_1.z.boolean().optional(),
    Align: exports.Align.optional(),
    Color: exports.Color.optional(),
    TextColor: exports.Color.optional(),
    Type: exports.Types.optional(),
});
// Type AlertStyles
exports.AlertStyles = zod_1.z.object({
    Outlined: zod_1.z.boolean().optional(),
    Color: exports.Color.optional(),
    TextColor: exports.Color.optional(),
});
// Type AccordionStyles
exports.AccordionStyles = zod_1.z.object({
    Color: exports.Color.optional(),
    TitleColor: exports.Color.optional(),
    ContentColor: exports.Color.optional(),
});
// Type LabelStyles
exports.LabelStyles = zod_1.z.object({
    Outlined: zod_1.z.boolean().optional(),
    Color: exports.Color.optional(),
    TextColor: exports.Color.optional(),
});
// Type TestimonialStyles
exports.TestimonialStyles = zod_1.z.object({
    Image: zod_1.z.string().optional(),
    Align: exports.Align.optional(),
    BorderColor: exports.Color.optional(),
});
// Type CouponStyles
exports.CouponStyles = zod_1.z.object({
    Dashed: zod_1.z.boolean().optional(),
    Color: exports.Color.optional(),
    BorderColor: exports.Color.optional(),
});
exports.ColumnParams = zod_1.z.object({
    Content: zod_1.z.string(),
    Styles: exports.ColumnStyles.optional(),
});
// Type ButtonParams
exports.ButtonParams = zod_1.z.object({
    Text: zod_1.z.string(),
    Link: zod_1.z.string(),
    Styles: exports.ButtonStyles.optional(),
});
// Type AlertParams
exports.AlertParams = zod_1.z.object({
    Content: zod_1.z.string(),
    Styles: exports.AlertStyles.optional(),
});
// Type AccordionParams
exports.AccordionParams = zod_1.z.object({
    Title: zod_1.z.string(),
    Content: zod_1.z.string(),
    Styles: exports.AccordionStyles.optional(),
});
// Type LabelParams
exports.LabelParams = zod_1.z.object({
    Text: zod_1.z.string(),
    Styles: exports.LabelStyles.optional(),
});
// Type ContentParams
exports.ContentParams = zod_1.z.object({
    Content: zod_1.z.string(),
    Image: zod_1.z.string().optional(),
    Color: exports.Color.optional(),
});
// Type TimelineParams
exports.TimelineParams = zod_1.z.object({
    Time: zod_1.z.string(),
    Title: zod_1.z.string(),
    Content: zod_1.z.string(),
});
// Type TestimonialParams
exports.TestimonialParams = zod_1.z.object({
    Testimonial: zod_1.z.string(),
    Author: zod_1.z.string(),
    Icon: zod_1.z.boolean().optional(),
    Styles: exports.TestimonialStyles.optional(),
});
// Type ImageParams
exports.ImageParams = zod_1.z.object({
    Image: zod_1.z.string(),
    Alt: zod_1.z.string(),
    WidthColumn: exports.WidthColumn.optional(),
});
// Type CouponParams
exports.CouponParams = zod_1.z.object({
    Content: zod_1.z.string(),
    Button: exports.ButtonParams.optional(),
    Styles: exports.CouponStyles.optional(),
});
// Type PromoParams
exports.PromoParams = zod_1.z.object({
    Value: zod_1.z.string(),
    Color: exports.Color.optional(),
    Size: exports.FontSize.optional(),
});
// Type PromoItems
exports.PromoItems = zod_1.z.object({
    Promo: exports.PromoParams.optional(),
    Symbol: exports.PromoParams.optional(),
    Description: exports.PromoParams.optional(),
});
