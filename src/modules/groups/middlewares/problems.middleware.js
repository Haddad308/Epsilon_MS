import Problem from "../models/problems.model.js";

const checkGroup = async (req, res, next) => {
    const { problemId } = req.params;
    const data = await Problem.findByPk(problemId);
    if (data) {
        next()
    } else {
        res.send({ error: "Group doesn't exist" })
    }
}

export { checkGroup }; 