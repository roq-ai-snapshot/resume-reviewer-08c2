import * as yup from 'yup';

export const resumeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  summary: yup.string().nullable(),
  work_experience: yup.string().nullable(),
  education: yup.string().nullable(),
  skills: yup.string().nullable(),
  languages: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
