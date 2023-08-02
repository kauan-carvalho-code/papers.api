import Papers from "../models/papers";

const getPapers = async () => {
  return Papers.find();
};

const createPaper = async (newPaper) => {
  return Papers.create(newPaper);
};

const editPaper = async (paperId, updatedPaper) => {
  return Papers.findByIdAndUpdate(paperId, updatedPaper, {
    new: true,
  });
};

const deletePaper = async (paperId) => {
  return Papers.findByIdAndDelete(paperId);
};

const papersService = {
  getPapers,
  createPaper,
  editPaper,
  deletePaper,
};

export default papersService;
