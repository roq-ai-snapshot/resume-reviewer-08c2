import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().nullable(),
  comments: yup.string().nullable(),
  reviewed_at: yup.date().required(),
  application_id: yup.string().nullable().required(),
  reviewer_id: yup.string().nullable().required(),
});
