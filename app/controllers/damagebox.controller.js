const db = require("../models");
// const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

const damage_box_card_data = require("../sampleData/damagebox_cards.json");
const damage_box_table_data = require("../sampleData/damagebox_datagrid.json");

exports.getDamageBoxData = (req, res) => {
  //   Tutorial.findAll({ where: { published: true } })
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while retrieving tutorials.",
  //       });
  //     });
  try {
    res.json(damage_box_card_data);
  } catch (error) {
    console.log(error);
  }
};

exports.getDamageBoxGridData = async (req, res) => {
  try {
    res.json(damage_box_table_data);
  } catch (error) {
    console.log(error);
  }
};

exports.getCustomerDetails = async (req, res) => {
    const cusId = req.params.cusId
        try {
        // switch (state) {
        //     case 'month':
        //         res.json(dashboard_table_data_month);
        //         break;
        //     case 'year':
        //         res.json(dashboard_table_data_year);
        //         break;        
        //     default:
        //         res.json(dashboard_table_data_today);
        //         break;
        // }
    } catch (error) {
        console.log(error);
    }
}