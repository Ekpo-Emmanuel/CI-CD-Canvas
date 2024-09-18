import { Router } from 'express';
import pipelineRoute from './pipelineRoute';

const router = Router();

router.use('/pipelines', pipelineRoute);

export default router;
