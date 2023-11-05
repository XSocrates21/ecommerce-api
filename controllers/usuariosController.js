const db = require("../models/db");

exports.listarUsuarios = async (req, res) => {
    const sql = "SELECT * FROM usuarios";
  
    try {
      const [roles, fields] = await db.query(sql);
      res.status(200).json(roles);
    } catch (err) {
      res.status(500).send({ mensaje: "Error en el servidor" }, { error: err });
    }
  };
  
  exports.listarUsuariosId = async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM usuarios WHERE id_usuario = ?";
    //console.log(id);
  
    try {
      const [rows, fields] = await db.query(sql, [id]);
  
      if (rows.length === 0) {
        res.status(404).send({ mensaje: "Usuario no encontrado" });
        return;
      }
      res.status(200).json(rows[0]);
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al buscar el usuario" }, { error: err });
    }
  };
  
  exports.agregarUsuarios = async (req, res) => {
    const { nombre_usuario,apellido_usuario,email,password,id_rol } = req.body;
    const sql = "INSERT INTO usuarios (nombre_usuario,apellido_usuario,email,password,id_rol) VALUE (?,?,?,?,?)";
  
    try {
      const resultado = await db.query(sql, [nombre_usuario,apellido_usuario,email,password,id_rol]);
      res.status(200).send({ id: resultado.idInsertado, ...req.body });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al insertar la categoria" }, { error: err });
    }
  };
  
  exports.actualizarUsuarios = async (req, res) => {
    const id = req.params.id;
    const {nombre_usuario,apellido_usuario,email,password,id_rol } = req.body;
  
    const sql =
      "UPDATE usuarios SET nombre_usuario = ?, apellido_usuario = ? ,email = ? ,password = ?,id_rol = ? WHERE id_usuario = ?";
  
    try {
      await db.query(sql, [nombre_usuario,apellido_usuario,email,password,id_rol, id]);
      res.status(200).send({ mensaje: "Usuario actualizada" });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al actualizar el usuario" }, { error: err });
    }
  };
  
  exports.eliminarUsuarios = async (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM usuarios WHERE id_usuario = ?";
  
    try {
      await db.query(sql, [id]);
      res.status(200).send({ mensaje: "Categoria eliminada" });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al eliminar la categoria" }, { error: err });
    }
  };