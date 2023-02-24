var Schema = require('../models/schema');

//creamos un objeto controller para disponer de todos los métodos de ruta:
var sorteoController = {

  //Método para guardar un artículo:

  save: (req, res) => {

    var params = req.body;
    console.log(params);
    //Objeto a guardar
    var schema = new Schema();

    // Asignar valores
    schema.name = params.name;

    // Guardamos el articulo
    schema.save((err, userWinner) => {

      if (err || !userWinner) {
        return res.status(404).send({
          status: 'error',
          message: 'La nota no se ha guardado !!!'
        });
      }

      // Devolver una respuesta 
      return res.status(200).send({
        status: 'success',
        userWinner
      });

    });

  },
}

module.exports = sorteoController