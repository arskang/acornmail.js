import { z } from 'zod';
import { ButtonParams } from '../types';
export default function NewButton(props: z.infer<typeof ButtonParams>): string;
