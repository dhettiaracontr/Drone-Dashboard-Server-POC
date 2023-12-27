module.exports = app => {
  const damagebox = require("../controllers/damagebox.controller.js");

  var router = require("express").Router();

  router.get("/card-details", damagebox.getDamageBoxData);
  router.get("/grid-details", damagebox.getDamageBoxGridData);
  router.get("/get-customer-details/:cusId", damagebox.getCustomerDetails);
//   // Create a new Tutorial
//   router.post("/", tutorials.create);

//   // Retrieve all Tutorials
//   router.get("/", tutorials.findAll);

//   // Retrieve all published Tutorials
//   router.get("/published", tutorials.findAllPublished);

//   // Retrieve a single Tutorial with id
//   router.get("/:id", tutorials.findOne);

//   // Update a Tutorial with id
//   router.put("/:id", tutorials.update);

//   // Delete a Tutorial with id
//   router.delete("/:id", tutorials.delete);

//   // Delete all Tutorials
//   router.delete("/", tutorials.deleteAll);

  app.use('/api/damagebox', router);
};