const express = require('express');
const router = express.Router();

/**
 * @apiVersion 1.0.0
 * @api {get} /account Get Account Info
 * @apiName GetAccount
 * @apiGroup Account
 *
   @apiSuccess {Object} info 
   @apiSuccess {Object} keys 
   @apiSuccess {String} info.name Account username
   @apiSuccess {String} info.role {"Administator", "Operator", "Guest"}
   @apiSuccess {Number} info.state 0 == active, 1 == locked, 2 == disabled
   @apiSuccess {Number} info.expiration 0 == Account never expires, -1 == Account expired by administrator, else see "expirationDays" and this value indicate the predicted date that the account will expire in unit of days since Unix epoch.
   @apiSuccess {Number} info.expirationDays Negative or positive number. If negative it means the account expired that amount of days ago. If positive it means the account is still non-expired but will expire in that amount of day.
   @apiSuccess {Boolean} info.pwd True if password is set
   @apiSuccess {String} keys.accountName Account username (same as info.name)
   @apiSuccess {Array} keys.data Array of keys
   @apiSuccess {String} keys.data.name Name of key
   @apiSuccess {String} keys.data.fingerprint Fingerprint of key with prefix
 
   @apiSuccessExample Success response
HTTP/1.1 200 OK
{
    "data": [
        {
            "info": {
                "name": "admin",
                "role": "Administrator",
                "state": 0,
                "expiration": 0,
                "expirationDays": 0,
                "pwd": true
            },
            "keys": {
                "accountName": "admin",
                "data": [
                    {
                        "name": "id_rsa.pub",
                        "fingerprint": "SHA256:+dpCjgHyRbC7JRf8EvP7Uc96CzsETSw9dZ23F8PXoIc"
                    }
                ]
            }
        },
        {
            "info": {
                "name": "operator",
                "role": "Operator",
                "state": 0,
                "expiration": 0,
                "expirationDays": 0,
                "pwd": true
            },
            "keys": {
                "accountName": "operator",
                "data": []
            }
        },
        {
            "info": {
                "name": "user",
                "role": "Guest",
                "state": 0,
                "expiration": 0,
                "expirationDays": 0,
                "pwd": true
            },
            "keys": {
                "accountName": "user",
                "data": []
            }
        },
        {
            "info": {
                "name": "user2",
                "role": "Guest",
                "state": 2,
                "expiration": 18642,
                "expirationDays": -1116,
                "pwd": true
            },
            "keys": {
                "accountName": "user2",
                "data": []
            }
        },
        {
            "info": {
                "name": "frank",
                "role": "Administrator",
                "state": 0,
                "expiration": -1,
                "expirationDays": 0,
                "pwd": true
            },
            "keys": {
                "accountName": "frank",
                "data": [
                    {
                        "name": "id_rsa.pub",
                        "fingerprint": "SHA256:KhVuQMIOVN/2DorgijeN4KGTlsJJ4HNF0dQ37pejlLE"
                    }
                ]
            }
        },
        {
            "info": {
                "name": "test",
                "role": "Administrator",
                "state": 0,
                "expiration": -1,
                "expirationDays": 0,
                "pwd": true
            },
            "keys": {
                "accountName": "test",
                "data": []
            }
        }
    ]
}

*/

router.get('/', (req, res) => {
  res.json({
    data: [
      {
        info: {
          name: 'admin',
          role: 'Administrator',
          state: 0,
          expiration: 0,
          expirationDays: 0,
          pwd: true
        },
        keys: {
          accountName: 'admin',
          data: [
            {
              name: 'id_rsa.pub',
              fingerprint: 'SHA256:+dpCjgHyRbC7JRf8EvP7Uc96CzsETSw9dZ23F8PXoIc'
            }
          ]
        }
      },
      {
        info: {
          name: 'operator',
          role: 'Operator',
          state: 0,
          expiration: 0,
          expirationDays: 0,
          pwd: true
        },
        keys: {
          accountName: 'operator',
          data: []
        }
      },
      {
        info: {
          name: 'user',
          role: 'Guest',
          state: 0,
          expiration: 0,
          expirationDays: 0,
          pwd: true
        },
        keys: {
          accountName: 'user',
          data: []
        }
      },
      {
        info: {
          name: 'user2',
          role: 'Guest',
          state: 2,
          expiration: 18642,
          expirationDays: -1116,
          pwd: true
        },
        keys: {
          accountName: 'user2',
          data: []
        }
      },
      {
        info: {
          name: 'frank',
          role: 'Administrator',
          state: 0,
          expiration: -1,
          expirationDays: 0,
          pwd: true
        },
        keys: {
          accountName: 'frank',
          data: [
            {
              name: 'id_rsa.pub',
              fingerprint: 'SHA256:KhVuQMIOVN/2DorgijeN4KGTlsJJ4HNF0dQ37pejlLE'
            }
          ]
        }
      },
      {
        info: {
          name: 'test',
          role: 'Administrator',
          state: 0,
          expiration: -1,
          expirationDays: 0,
          pwd: true
        },
        keys: {
          accountName: 'test',
          data: []
        }
      }
    ]
  });
});

module.exports = router;
