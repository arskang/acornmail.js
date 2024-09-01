import { z } from 'zod';
import { CouponParams, PromoItems } from '../types';
export declare function NewCoupon(props: z.infer<typeof CouponParams>): string;
export declare function NewPromo(props: z.infer<typeof PromoItems>): string;
