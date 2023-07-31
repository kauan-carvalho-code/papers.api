import Papers from "../models/papers";

export const getPapers = async () => {
  const papers = await Papers.find();
  return papers;
};

export const createPaper = async (newPaper) => {
  const createdPaper = await Papers.create(newPaper);
  return createdPaper;
};

export const editPaper = async (paperId, newBody) => {
  const updatedPaper = await Papers.findByIdAndUpdate(paperId, newBody, { new: true });
  return updatedPaper;
};

export const deletePaper = async (paperId) => {
  const deletedPaper = await Papers.findByIdAndDelete(paperId);
  return deletedPaper;
}
