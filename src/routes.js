import { Router } from 'express';

import ExtensiveController from './app/controllers/ExtensiveController';

const routes = new Router();

/**
 * This api base in an integer number which should be on interval [-99999, 99999],
 * will return the extensive value in string format. For example:
 *
 * λ curl http://localhost:3000/1
 * { "extenso": "um" }
 *
 * λ curl http://localhost:3000/-1042
 * { "extenso": "menos mil e quarenta e dois" }
 *
 * λ curl http://localhost:3000/94587
 * { "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
 *
 * */
routes.get('/:vl', ExtensiveController.show);

routes.get('*', function(req, res) {
  return res.status(400).json({
    error: 'Rota não encontrada!',
  });
});

export default routes;
