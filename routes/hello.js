const express = require('express');
const router = express.Router();

/**
 * @api {get} /hello Say Hello
 * @apiVersion 1.0.0
 * @apiName GetHello
 * @apiGroup Example
 *
 * @apiSuccess {String} message The hello message.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Hello, world!"
 *     }
 */
router.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router;
