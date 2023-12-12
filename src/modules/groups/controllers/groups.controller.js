import Group from '../models/groups.model.js';

const getAllGroups = async (req, res, next) => {
  try {
    const data = await Group.findAll();
    res.json(data);
  } catch (error) {
    next(error)
  }
};

const addGroup =  async (req, res, next) => {
  try {
    const {
      code,
      schedule,
      start_date,
      end_date,
      instructorId,
      assistantId,
      mentorId,
    } = req.body;
    const data = await Group.create({
      code,
      schedule,
      start_date,
      end_date,
      instructorId,
      assistantId,
      mentorId,
    });
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const getGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const data = await Group.findByPk(groupId);
    res.status(200).json({ data });
  } catch (error) {
    next(error)
  }
};

const editGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const {
      code,
      schedule,
      start_date,
      end_date,
      instructorId,
      assistantId,
      mentorId
    } = req.body;
    const data = await Group.update(
      {
        code,
        schedule,
        start_date,
        end_date,
        instructorId,
        assistantId,
        mentorId
      },
      { where: { id: parseInt(groupId) } }
    );
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const deleteGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;
    const data = await Group.destroy({ where: { id: parseInt(groupId) } });
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

export { getAllGroups, addGroup, getGroup, editGroup, deleteGroup };
