import * as express from 'express';

export const routes = express.Router();


routes.get('/', (req, res) => res.send ({hello: 'world'})),
routes.get('/info', (req, res) => res.send([])),
routes.post('/info', (req, res) => res.send)
