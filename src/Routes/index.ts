import { Request, Response } from 'express';
import { GetRouter } from '../App/Router';

const router = GetRouter();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default router;
