import { z } from 'zod';
import { TestimonialParams } from '../types';
export default function NewTestimonial(props: z.infer<typeof TestimonialParams>): string;
