import Problem from '../models/problems.model.js';

const getAllProblems = async (req, res) => {
  try {
    const data = await Problem.findAll()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProblem = async (req, res) => {
  try {
    const {
      description,
      status,
      GroupId,
      MentorId
    } = req.body;
    const data = await Problem.create({
      description,
      status,
      GroupId,
      MentorId
    });
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProblem = async (req, res) => {
  try {
    const { problemId } = req.params; 
    const data= await Problem.findByPk(problemId); 
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProblem = async (req, res) => {
  try {
    const { problemId } = req.params;
    const {
      description,
      status,
      GroupId,
      MentorId
    } = req.body; 
    const data = await Problem.update({
      description,
      status,
      GroupId,
      MentorId
    },
    { where: { id: parseInt(problemId) }})
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProblem = async (req, res) => {
  try {
    const { problemId } = req.params;
    const data = await Problem.destroy({ where: { id: parseInt(problemId) } });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllProblems, addProblem, getProblem, editProblem, deleteProblem };
