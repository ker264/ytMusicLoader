import { Router } from 'express';
import { testFFMPEG, downloadMP3 } from '../controllers/ffmpeg.js';

const router = Router();

router.get('/test', testFFMPEG)
router.get('/downloadMP3', downloadMP3);


// router.get('/api/server', getAll);

// router.post('/api/server', create);

// router.delete('/api/server/:id', remove)

export default router;