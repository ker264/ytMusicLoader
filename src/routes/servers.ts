import { Router } from 'express';
import { testFFMPEG } from '../controllers/ffmpeg.js';

const router = Router();

router.get('/test', testFFMPEG)

// router.get('/api/server', getAll);

// router.post('/api/server', create);

// router.delete('/api/server/:id', remove)

export default router;