# RNCLOCUS

This project is a test project for jwt-authentication and postgresql. It is built using **PostgreSQL** and **Node.js**.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- PostgreSQL 12.0+
- Node.js version 18.16.0

### Installation

1. Install PostgreSQL 12.0+.
2. Run MongoDB.
3. Install Node.js version 18.16.0.
4. Install the required Node.js modules by running the following command:

   ```
   npm install
   ```

## Usage

To run the backend server, use the following command:

    npm run dev

    
## API Endpoints

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | /api/v1/rna/test   | display a message for simle test |
| POST   | /api/v1/rna/test/signin   | signin with 3 pre-defined users account (admin, normal, limited) |
| GET    | /api/v1/rna/test/locus  | get locus data with parameters |

## Built With

- [PostgreSQL](https://www.postgresql.org/) - SQL database used
- [Node.js](https://nodejs.org/) - JavaScript runtime environment used


## Contributing
Contributions to this project are welcome and encouraged! To contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Push your changes to your forked repository.
5. Open a pull request to merge your changes into the main repository.
6. Please ensure that your code adheres to the project's coding style and that all tests pass before submitting a pull request.

Thank you for your contributions!