import type { signFormSchema } from 'shared/lib/helpers/validator';
import type { InferType } from 'yup';

export type SignFormValues = InferType<typeof signFormSchema>;
