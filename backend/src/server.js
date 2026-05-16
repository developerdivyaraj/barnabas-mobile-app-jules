require('dotenv').config();

// Ensure required environment variables are present before booting
if (!process.env.JWT_SECRET) {
  console.warn("WARNING: JWT_SECRET is not defined. Falling back to a default development key. DO NOT USE IN PRODUCTION.");
  process.env.JWT_SECRET = "super_secret_dev_key";
}

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const authRoutes = require('./routes/auth.routes');
app.use('/api/v1/auth', authRoutes);

// Swagger Documentation setup
const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Barnabas Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
