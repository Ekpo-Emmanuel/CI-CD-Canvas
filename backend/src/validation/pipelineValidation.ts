import * as yup from 'yup';

export const pipelineSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().oneOf(['success', 'failed', 'running']).required(),
});
