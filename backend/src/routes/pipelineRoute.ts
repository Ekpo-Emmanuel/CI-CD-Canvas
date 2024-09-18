import { Router } from 'express';
import {
  getPipelines,
  createPipeline,
  getPipelineById,
  updatePipeline,
  deletePipeline,
} from '../controllers/pipelineController';
import { validate } from '../middlewares/validate';
import { pipelineSchema } from '../validation/pipelineValidation';

const router = Router();

router.get('/', getPipelines);
router.post('/', validate(pipelineSchema), createPipeline);
router.get('/:id', getPipelineById);
router.put('/:id', validate(pipelineSchema), updatePipeline);
router.delete('/:id', deletePipeline);

export default router;
