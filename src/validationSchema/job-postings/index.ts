import * as yup from 'yup';

export const jobPostingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  requirements: yup.string().nullable(),
  location: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  posted_at: yup.date().required(),
  company_id: yup.string().nullable().required(),
});
