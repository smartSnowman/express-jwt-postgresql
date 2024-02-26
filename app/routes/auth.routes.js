const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

/**
 * @swagger
 * /api/v1/rna/test/signin:
 *    post:
 *     summary: Sign in with username and password
 *     description: Sign in with provided username and password. Username and password are "admin", "normal" and "limited".
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                default: admin
 *              password:
 *                type: string
 *                default: admin
 *     responses:
 *      '200':
 *        description: Successful sign-in
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  default: 1
 *                username:
 *                  type: string
 *                  default: admin
 *                roles:
 *                  type: string
 *                  default: admin
 *                accessToken:
 *                  type: string
 *                  default: token
 *      '400':
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '401':
 *        description: Invalid Password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '404':
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
*/
  app.post("/api/v1/rna/test/signin", controller.signin);



  
  
/**
 *@swagger
 * /api/v1/rna/test:
 *    get:
 *     summary: Simple test
 *     description: Simple test to get server status
 *     responses:
 *      '200':
 *        description: Server works correctly
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '500':
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
*/
  app.get("/api/v1/rna/test", (req, res) => {
    return res.status(200).send({ message: "Hi, Sergei. Welcome to test task."});
  });
};
