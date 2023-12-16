import { Express, Request, Response } from 'express';
import userRouter from './userRouter';

function configureRoutes(app: Express): Express {
    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript server');
    });

    app.use('/users', userRouter);
    return app;
}

export {
    configureRoutes
}

