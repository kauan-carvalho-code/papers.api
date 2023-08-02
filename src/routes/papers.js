import { Router } from "express";

import PapersController from '../controllers/papers';

/**
 * @swagger
 * components:
 *   schemas:
 *     Paper:
 *       type: object
 *       required:
 *         - name
 *         - width
 *         - height
 *         - value
 *         - grammage
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the paper
 *         name:
 *           type: string
 *           description: The name of your paper
 *         width:
 *           type: integer
 *           description: The width of the paper
 *         height:
 *           type: integer
 *           description: The height of the paper
 *         value:
 *           type: integer
 *           description: The value of the paper
 *         grammage:
 *           type: integer
 *           description: The grammage of the paper
 *       example:
 *         id: 64c834f112610fbbe050cfa9
 *         name: Couche
 *         width: 210
 *         height: 297
 *         value: 30
 *         grammage: 250
 */
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Papers
 *   description: The papers managing API
 * /papers:
 *   get:
 *     summary: Lists all the papers
 *     tags: [Papers]
 *     responses:
 *       200:
 *         description: The list of the papers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paper'
 */
router.get("/", PapersController.getPapers);

/**
 * @swagger
 * tags:
 *   name: Papers
 *   description: The papers managing API
 * /papers:
 *   post:
 *     summary: Create a new paper
 *     tags: [Papers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paper'
 *     responses:
 *       200:
 *         description: The created paper.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paper'
 */
router.post("/", PapersController.createPaper);

/**
 * @swagger
 * tags:
 *   name: Papers
 *   description: The papers managing API
 * /papers/{paperId}:
 *   put:
 *     summary: Edit a existing paper
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: paperId
 *         schema:
 *           type: string
 *         required: true
 *         description: The paper id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paper'
 *     responses:
 *       200:
 *         description: The created paper.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paper'
 */
router.put("/:paperId", PapersController.editPaper);

/**
 * @swagger
 * tags:
 *   name: Papers
 *   description: The papers managing API
 * /papers/{paperId}:
 *   delete:
 *     summary: Delete a existing paper
 *     tags: [Papers]
 *     parameters:
 *       - in: path
 *         name: paperId
 *         schema:
 *           type: string
 *         required: true
 *         description: The paper id
 *     responses:
 *       200:
 *         description: A delete confirmation.
 *         content:
 *           application/json:
 *             schema:
 *               type: boolean
 */
router.delete("/:paperId", PapersController.deletePaper);

export default router;
