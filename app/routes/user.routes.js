const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

/**
 *@swagger
 * /api/v1/rna/test/locus:
 *    get:
 *     summary: Get locus data
 *     description: Retrieve  data based on specified filters
 *     parameters:  
 *       - in: header
 *         name: x-access-token
 *         schema:
 *           type: string
 *         description: Access token for JWT Authentication
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: Filter by ID
 *       - in: query
 *         name: assembly_id
 *         schema:
 *           type: integer
 *         description: Filter by assembly ID
 *       - in: query
 *         name: membership_status
 *         schema:
 *           type: integer
 *         description: Filter by membership status
 *       - in: query
 *         name: region_id
 *         schema:
 *           type: integer
 *         description: Filter by region ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: sideloading
 *         schema:
 *           type: boolean
 *         description: Include locus member data in the response
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort by id and assembly_id field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         description: Sort order (ASC or DESC)
 *     responses:
 *      '200':
 *        description: Successful response with data
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                  assembly_id:
 *                    type: string
 *                  locus_name:
 *                    type: string
 *                  public_locus_name:
 *                    type: string
 *                  chromosome:
 *                    type: string
 *                  strand:
 *                    type: string
 *                  locus_start:
 *                    type: integer
 *                  locus_stop:
 *                    type: integer
 *                  member_count:
 *                    type: integer
 *                  rnc_locus_members:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                        urs_taxid:
 *                          type: string
 *                        region_id:
 *                          type: integer
 *                        locus_id:
 *                          type: integer
 *                        membership_status:
 *                          type: string
 *      '400':
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '401':
 *        description: Unauthroized
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '403':
 *        description: Invalid token
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *      '404':
 *        description: Not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *
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
  app.get(
    "/api/v1/rna/test/locus",
    [authJwt.verifyToken],
    controller.getLocus
  );
};
