const Customer = require("../models/Customer");
const mongoose = require("mongoose");

/**
 * GET /
 * Homepage
 */

exports.hompage = async (req, res) => {
  const locals = {
    title: "Nodejs",
    description: "User Management System",
  };

  res.render("index", locals);
};

/**
 * GET /
 * New Customer form
 */

exports.addCustomer = async (req, res) => {
  const locals = {
    title: "Add New Customer - Nodejs",
    description: "User Management System",
  };

  res.render("customer/add", locals);
};

/**
 * POST /
 * CRERATE New Customer
 */

exports.postCustomer = async (req, res) => {
  console.log(req.body);

  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    details: req.body.details,
    tel: req.body.tel,
    email: req.body.email,
  });

  //   const locals = {
  //     title: "New Customer Added!",
  //     description: "User Management System",
  //   };

  try {
    await Customer.create(newCustomer);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
