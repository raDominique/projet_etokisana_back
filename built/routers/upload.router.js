import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware.js';
const router = Router();
router.post('/image/', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Upload échoué' });
    }
    return res.json({
        filename: req.file.filename,
        url: `uploads/${req.file.filename}`
    });
});
export default router;
//# sourceMappingURL=upload.router.js.map