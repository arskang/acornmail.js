import { z } from 'zod';
import { ContentParams } from '../types/index';
export default function NewContent(params: z.infer<typeof ContentParams>): string;
