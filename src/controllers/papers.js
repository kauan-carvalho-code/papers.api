import { Router } from "express";

import {
  getPapers,
  createPaper,
  editPaper,
  deletePaper,
} from "../services/papers";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const papers = await getPapers();
    res.status(200).send(papers);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPaper = await createPaper(req.body);
    res.status(201).send(newPaper);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:paperId", async (req, res) => {
  try {
    const updatedPaper = await editPaper(req.params.paperId, req.body);
    res.status(200).send(updatedPaper);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:paperId", async (req, res) => {
  try {
    const deletedPaper = await deletePaper(req.params.paperId);
    res.status(200).send(deletedPaper);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
