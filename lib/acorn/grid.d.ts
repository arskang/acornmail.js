import { z } from 'zod';
import { AlignEnum } from '../types';
declare const ColumnsArray: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
}>, "many">>;
declare const ColumnParamsArray: z.ZodArray<z.ZodOptional<z.ZodArray<z.ZodObject<{
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
}>, "many">>, "many">;
export declare function NewRow(props: z.infer<typeof ColumnsArray>): string;
export declare function NewGrid(props: z.infer<typeof ColumnParamsArray>): string;
export {};
