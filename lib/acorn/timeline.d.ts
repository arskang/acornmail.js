import { z } from 'zod';
declare const TimelineParamsArray: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export default function NewTimeline(props: z.infer<typeof TimelineParamsArray>): string;
export {};
