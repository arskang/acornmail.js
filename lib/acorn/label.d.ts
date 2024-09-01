import { z } from 'zod';
import { LabelParams } from '../types/index';
export default function NewLabel(props: z.infer<typeof LabelParams>): string;
