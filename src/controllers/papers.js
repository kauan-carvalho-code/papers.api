import PapersService from "../services/papers";

const getPapers = async (_req, res) => {
  try {
    const papers = await PapersService.getPapers();
    res.status(200).send(papers);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createPaper = async (req, res) => {
  try {
    const newPaper = await PapersService.createPaper(req.body);
    res.status(201).send(newPaper);
  } catch (error) {
    res.status(400).send(error);
  }
};

const editPaper = async (req, res) => {
  try {
    const updatedPaper = await PapersService.editPaper(
      req.params.paperId,
      req.body
    );
    res.status(200).send(updatedPaper);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deletePaper = async (req, res) => {
  try {
    const deletedPaper = await PapersService.deletePaper(req.params.paperId);
    res.status(200).send(deletedPaper);
  } catch (error) {
    res.status(400).send(error);
  }
};

const papersController = {
  getPapers,
  createPaper,
  editPaper,
  deletePaper,
};

export default papersController;
