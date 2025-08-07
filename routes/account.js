const express = require('express');
const router = express.Router();

/**
 * @api {get} /account Get Account Info
 * @apiName GetAccount
 * @apiGroup Account
 *
 * @apiSuccess {String} id The account ID.
 * @apiSuccess {String} name The account name.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "123",
 *       "name": "John Doe"
 *     }
 */
router.get('/', (req, res) => {
  res.json({ id: '123', name: 'John Doe' });
});

module.exports = router;
