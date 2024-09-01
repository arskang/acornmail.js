import { z } from 'zod';
import { ImageParams } from '../types';
export default function NewImage(props: z.infer<typeof ImageParams>): string;
