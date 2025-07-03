import express from 'express';
import { getPortfolio, postPortfolio } from '../controllers/portfolioController.js';

const router = express.Router();

// GET /api-portfolio
router.get('/', getPortfolio);

// POST /api-portfolio
router.post('/', postPortfolio);

export default router;
