import { z } from 'zod';
declare const AccordionParamsArray: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export default function NewAccordion(props: z.infer<typeof AccordionParamsArray>): string;
export {};
