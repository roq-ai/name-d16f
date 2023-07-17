import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  team_id: yup.string().nullable(),
});
