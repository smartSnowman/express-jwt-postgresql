const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RNA Test API',
      version: '1.0.0',
      description: 'Documentation for API Test Task',
    },
  },
  apis: ['./app/routes/*.js'], // Specify the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
