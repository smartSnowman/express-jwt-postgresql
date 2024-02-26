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
 *           default: 1878534
 *         description: Filter by ID
 *       - in: query
 *         name: assembly_id
 *         schema:
 *           type: string
 *           default: Macaca_fascicularis_6.0
 *         description: Filter by assembly ID
 *       - in: query
 *         name: membership_status
 *         schema:
 *           type: string
 *           default: member
 *         description: Filter by membership status
 *       - in: query
 *         name: region_id
 *         schema:
 *           type: integer
 *           default: 88195050
 *         description: Filter by region ID
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 1000
 *         description: Number of items per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: sideloading
 *         schema:
 *           type: boolean
 *           default: true
 *         description: Include locus member data in the response
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: id
 *         description: Sort by id and assembly_id field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           default: DESC
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
 *                    type: string
 *                    default: 1878534
 *                  assembly_id:
 *                    type: string
 *                    default: Macaca_fascicularis_6.0
 *                  locus_name:
 *                    type: string
 *                    default: b2ccda1436756535b5ad0b57debb42be707fb7d1c1266a379884f19c8af53f11@6/62054349-62054644:1
 *                  public_locus_name:
 *                    type: string
 *                    default: 4E832729633E4C94
 *                  chromosome:
 *                    type: string
 *                    default: 6
 *                  strand:
 *                    type: string
 *                    default: 1
 *                  locus_start:
 *                    type: integer
 *                    default: 62054349
 *                  locus_stop:
 *                    type: integer
 *                    default: 62054644
 *                  member_count:
 *                    type: integer
 *                    default: 1
 *                  rnc_locus_members:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          default: 3775898
 *                        urs_taxid:
 *                          type: string
 *                          default: URS0000939062_9541
 *                        region_id:
 *                          type: integer
 *                          default: 88195050
 *                        locus_id:
 *                          type: string
 *                          default: 1878534
 *                        membership_status:
 *                          type: string
 *                          default: member
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
