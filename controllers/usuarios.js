const { response, request } = require('express');

const usuariosGet = ( req = request, res = response ) => {

    const query = req.query;

    res.json({
        msg: 'get API - controller',
        query
    });
  };

  const usuariosPost = (req, res) => {
    const { name , email, password } = req.body;

    res.json({
        msg: 'post API - controller',
        nombre: name,
        email,
        password
    });
  };

  const usuariosPut = (req, res) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id
    });
  };

  const usuariosPatch =  (req, res) => {
    res.json({
        msg: 'patch API - controller'
    });
  };

  const usuariosDelete =  (req, res) => {
    res.json({
        msg: 'delete API - controller'
    });
  };
  
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
}