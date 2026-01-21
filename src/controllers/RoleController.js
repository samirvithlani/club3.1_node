const roleModel = require("../models/RoleModel");
const createRole = async (req, res) => {
  try {
    const savedRole = await roleModel.create(req.body);
    res.json({
      message: "role created successfully...",
      data: savedRole,
    });
  } catch (err) {
    res.json({
      message: "error while creating role",
    });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleModel.find();
    res.json({
      message: "role found.",
      data: roles,
    });
  } catch (err) {
    res.json({
      message: "Error while fetching roles",
    });
  }
};

module.exports = {
    createRole,getAllRoles
}
