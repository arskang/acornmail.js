"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acornTypes = exports.acornHelpers = exports.acornStyles = exports.MergeVariables = exports.NewAcornEmailComponents = void 0;
const Handlebars = require("handlebars");
const zod_1 = require("zod");
const colors_1 = require("./styles/colors");
const types = require("./types");
const utilities_1 = require("./acorn/utilities");
const timeline_1 = require("./acorn/timeline");
const testimonial_1 = require("./acorn/testimonial");
const label_1 = require("./acorn/label");
const boilerplate_1 = require("./acorn/boilerplate");
const image_1 = require("./acorn/image");
const content_1 = require("./acorn/content");
const grid_1 = require("./acorn/grid");
const accordion_1 = require("./acorn/accordion");
const alerts_1 = require("./acorn/alerts");
const buttons_1 = require("./acorn/buttons");
const coupon_1 = require("./acorn/coupon");
const regex_1 = require("./styles/regex");
const { AlignEnum, Align, TypesEnum, Types, SizesEnum, Sizes, ColumnsEnum, Columns, Template } = types, rest = __rest(types, ["AlignEnum", "Align", "TypesEnum", "Types", "SizesEnum", "Sizes", "ColumnsEnum", "Columns", "Template"]);
const AcornVariables = zod_1.z.record(zod_1.z.string());
function NewAcornEmailComponents() {
    return {
        NewAccordion: accordion_1.default,
        NewAlert: alerts_1.default,
        GetBoilerplate: boilerplate_1.default,
        NewButton: buttons_1.default,
        NewContent: content_1.default,
        NewCoupon: coupon_1.NewCoupon,
        NewPromo: coupon_1.NewPromo,
        NewRow: grid_1.NewRow,
        NewGrid: grid_1.NewGrid,
        NewImage: image_1.default,
        NewLabel: label_1.default,
        NewTestimonial: testimonial_1.default,
        NewTimeline: timeline_1.default,
        NewSpacer: utilities_1.NewSpacer,
        NewDivider: utilities_1.NewDivider,
    };
}
exports.NewAcornEmailComponents = NewAcornEmailComponents;
function MergeVariables(temp, data) {
    const templateParse = Template.parse(temp);
    const variables = AcornVariables.parse(data);
    const template = Handlebars.compile(templateParse);
    return template(variables);
}
exports.MergeVariables = MergeVariables;
exports.acornStyles = {
    colors: colors_1.default,
    align: AlignEnum,
    types: TypesEnum,
    sizes: SizesEnum,
    columns: ColumnsEnum,
};
exports.acornHelpers = {
    RGX_URL: regex_1.RGX_URL,
    RGX_HEXCOLOR: regex_1.RGX_HEXCOLOR,
};
exports.acornTypes = Object.assign(Object.assign({}, rest), { AcornVariables, Template });
