import { z } from 'zod';
import { AlertParams } from '../types';
export default function NewAlert(props: z.infer<typeof AlertParams>): string;
