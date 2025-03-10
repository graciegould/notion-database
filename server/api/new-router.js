import express from 'express';
import cors from 'cors';

const newRouter = () => {
    const router = express.Router();
    router.use(cors());
    return router;
}

export default newRouter;

