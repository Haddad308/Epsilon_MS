import ProgressSheet from "../models/progressSheet.model.js"


const getAllProgressSheets = async (req, res) => {
    try {
        const data = await ProgressSheet.findAll();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addProgressSheet = async (req, res) => {
    try {
        console.log(req.body);
        const { SessionTime, duration, zoomLink, EmployeeId, GroupId } = req.body; 
        const data = await ProgressSheet.create({ SessionTime, duration, zoomLink, EmployeeId, GroupId }); 
        res.status(201).json({data}); 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProgressSheet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await ProgressSheet.findByPk(id);
        res.json({ data });
    } catch (error) {
        next(error)
    }
}

const editProgressSheet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { SessionTime, duration, zoomLink, EmployeeId, GroupId } = req.body;
        const data = await ProgressSheet.update(
            {
                SessionTime,
                duration,
                zoomLink, 
                EmployeeId,
                GroupId
            },
            { where: { id } }
        );
        res.json({ data });
    } catch (error) {
        next(error)
    }
}

const deleteProgressSheet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await ProgressSheet.destroy({ where: { id } });
        res.json({ data });
    } catch (error) {
        next(error);
    }
}

export {
    getAllProgressSheets,
    addProgressSheet,
    getProgressSheet,
    editProgressSheet,
    deleteProgressSheet
}

