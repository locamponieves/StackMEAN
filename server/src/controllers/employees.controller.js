const employeesCtrl = {}

const Employee = require('../models/Employee')

employeesCtrl.getEmployees   = async (req, res) => {
    // Nos devuelve un arreglo de todos los empleados registrado en la DB
    const employees = await Employee.find()

    res.json(employees)
}

employeesCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)

    await newEmployee.save()

    res.json({ Error: false, Msg: 'Guardado correctamente' })
}

employeesCtrl.getEmployee = async (req, res) => {
    //Employee.findOne({ _id: req.params.id })
    const employee = await Employee.findById(req.params.id)

    res.send(employee)
}

employeesCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)

    res.json({ Error : false, Msg : 'Modificado correctamente' })
}

employeesCtrl.deleteEmployee = async (req, res) => {
    await Employee.findOneAndDelete(req.params.id)

    res.json({ Error : false, Msg : 'Eliminado correctamente' })
}

module.exports = employeesCtrl