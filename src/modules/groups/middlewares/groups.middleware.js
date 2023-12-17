import Group from "../models/groups.model.js";

const checkGroup = async (req, res, next) => {
    const { groupId } = req.params;
    const data = await Group.findByPk(groupId);
    if (data) {
        next()
    } else {
        res.send({error: "Group doesn't exist"})
    }
}

export { checkGroup }; 