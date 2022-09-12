const fs                                = require('fs');
const { User }                          = require('../../models/user');
const { return_error, return_success }  = require('../../helpers/response');

/**
 * Display a listing of the resource.
 * @param {*} req request obtained
 * @param {*} res reponse to send
 * @returns 
 */
exports.create              = async (req, res, next) => {
    const states            = JSON.parse(fs.readFileSync(__dirname + '/../../assets/states.json'));

    return res.render('index', { states: states, cities: []});
}

/**
 * Store a newly created resource in storage.
 * @param {*} req request obtained
 * @param {*} res reponse to send
 * @returns 
 */
exports.store                               = async (req, res) => {
    try{
    const { username, password, email,
    age, gender, state_1, state_2 }          = req.body;
   
        const user                           = await User.create({
            username:       username,
            email:          email,
            password:       password,
            age:            age,
            gender:         gender,
            state:          null,
            city:           null,
        });
   
        return res.status(202).send(return_success('Register complete', [{'user': user}]));
    }catch(error){
        return res.status(501).send(return_error(error));
    }
}

/**
 * create cities
 */
formCity                    = (state, number, cities) => {
    let form                = [];
    
    form.push('<div class="col-12 col-sm-12 col-md-4 form-group '+ state +'">');
    form.push('<label id="city_'+number+'" class="form-label">Ciudad #'+ number+'</label>');
    form.push('<select class="form-control select2 city_'+ number+'" name="city_'+number+'">');
    form.push('<option selected disabled>Seleccionar ciudad</option>');
    cities.map((value) => {
        form.push( '<option value="'+ value.id +'">'+ value.nombre +'</option>');
    });
    form.push('</select>');
    form.push('</div>')

    return form.join(' ');
}

/**
 * Get cities by state_id
 * @param {*} req request obtained
 * @param {*} res reponse to send
 * @returns 
 */
exports.getCities           = async (req, res) => {
    try{
        const { id, state } = req.params;
    
        let arrayCities     = JSON.parse(fs.readFileSync(__dirname + '/../../assets/cities.json'));
        let cities          = [];

        arrayCities.find((value) => { 
            if(value.estado_id == id){
                cities.push(value);
            }  
        });

        let form            = [];
        form.push(formCity(state, 1 ,cities));
        form.push(formCity(state, 2 ,cities));
        form.push(formCity(state, 3 ,cities));
 
        return res.status(202).send(return_success('Cities data completed successfully', [{'form': form.join(' ')}]));
    }catch(error){
        return res.status(500).send(return_error(error));
    } 
}