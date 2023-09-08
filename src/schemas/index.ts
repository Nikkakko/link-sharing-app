import * as z from 'zod';

export const linkSchema = z.object({
  url: z.string().url(),
  platform: z
    .string({
      required_error: 'Please select a platform',
    })
    .nonempty({
      message: 'Please select a platform',
    }),
});

export const profileSchema = z.object({
  firstName: z.string().nonempty({
    message: 'Please enter your first name',
  }),
  lastName: z.string().nonempty({
    message: 'Please enter your last name',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),

  image: z.string().url({
    message: 'Please enter a valid image URL',
  }),
});
