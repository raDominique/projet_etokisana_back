import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.mimetype)) {
        cb(new Error('Format non autorisé'));
    }
    else {
        cb(null, true);
    }
};
export const upload = multer({
    storage,
    limits: { fileSize: 2 * 2048 * 2048 }, // 5MB
    fileFilter
});
//# sourceMappingURL=upload.middleware.js.map