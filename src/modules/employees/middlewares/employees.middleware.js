import Employee from "../models/employees.model.js";


const checkEmployee = async (req, res, next) => {
    const { id } = req.params;
    const data = await Employee.findByPk(id);
    if (data) {
        next()
    } else {
        res.send({error: "User doesn't exist"})
    }
}

export { checkEmployee}; 