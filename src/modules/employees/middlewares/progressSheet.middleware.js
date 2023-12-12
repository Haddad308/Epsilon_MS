import ProgressSheet from "../models/progressSheet.model.js";

const checkProgressSheet = async (req, res, next) => {
    const { id } = req.params;
    const data = await ProgressSheet.findByPk(id);
    if (data) {
        next()
    } else {
        res.send({ error: "Progress Sheet doesn't exist" })
    }
}

export { checkProgressSheet }; 