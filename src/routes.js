import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello Worldd' }));

export default routes;
