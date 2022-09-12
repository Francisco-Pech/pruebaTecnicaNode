const { Company, EmployeeByDepartament, Employee, 
    Department, CompanyByDepartament }                  = require('../models/index');
const { return_error, return_success }                  = require('../helpers/response');
const { pluck }                                         = require('../helpers/funtions');
const { Op }                                            = require("sequelize");

/**
 * Display a listing of the resource.
 * @param {*} req request obtained
 * @param {*} res reponse to send
 * @returns 
 */
exports.create                          = async (req, res) => {
    try{
        const company                   = await Company.findOne({where: { name: 'B'}});
        const employeesbydepartament    = await EmployeeByDepartament.findAll({where: {companyId: company.id}});
        const employeesbyantiquity      = await EmployeeByDepartament.findAll({ where: { antiquity: { [Op.gte]: 2}}});
        const companiesbydepartament    = await CompanyByDepartament.findAll();
        const employeesbyarquity        = await Employee.findAll({where: { id:  pluck(employeesbyantiquity,'employeeId')}});
        const companiesbyarquity        = await Company.findAll({where: { id:  pluck(employeesbyantiquity,'companyId')}});
        const departments               = await Department.findAll();

        let companies                   = [];
        departments.find((value) => {
            let quantity                = 0;
            companiesbydepartament.find((value2) => {     
                if(value.dataValues.id == value2.dataValues.departamentId){
                    quantity            += 1;
                }
            });


            if(quantity == 1){
                companies.push(value.dataValues.name);
            }
        });       
     

        let employeesAndCompanies       = [];
        employeesbyantiquity.find((value) => {   
            let employeeName            = '';
            let employeeCompany         = '';
       
            employeesbyarquity.find((value2) => {
                if(value.dataValues.employeeId == value2.dataValues.id){
                    employeeName        = value2.dataValues.name;
                }
            });

            companiesbyarquity.find((value3) => {
                if(value.dataValues.companyId == value3.dataValues.id){
                    employeeCompany      = value3.dataValues.name;
                }
            });

            employeesAndCompanies.push(employeeName + '(' + employeeCompany + ')');
        });

        const employees                 = await Employee.findAll({where: { id: pluck(employeesbydepartament, 'employeeId')}, attributes: ['name']});      
       
        console.log('Todos los empleados de la empresa B: '+ pluck(employees, 'name'));
        console.log('Todos los empleados con dos o más años de antiguedad y sus compañias :' + employeesAndCompanies );
        console.log('Departamentos que no se repiten: '+ companies);

        return res.status(202).send(return_success('Companies data completed successfully', [{'employees': pluck(employees, 'name'), 'employeesWithCompany': employeesAndCompanies, 'departaments': companies}]));
    }catch(error){
        return res.status(501).send(return_error(error));
    }
}

