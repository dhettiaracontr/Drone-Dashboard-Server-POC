const db = require("../models");
// const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

const dashboard_card_data = require("../sampleData/dashboard_cards.json");
const dashboard_table_data_today = require("../sampleData/dashboard_table_today.json");
const dashboard_table_data_month = require("../sampleData/dashboard_table_month.json");
const dashboard_table_data_year = require("../sampleData/dashboard_table_year.json");

exports.getDashboardData = async (req, res) => {
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
        res.json(dashboard_card_data);
    } catch (error) {
        console.log(error);
    }
};

exports.getDashboardGridData = async (req, res) => {
  const state = req.params.state;
    try {
        switch (state) {
            case 'month':
                res.json(dashboard_table_data_month);
                break;
            case 'year':
                res.json(dashboard_table_data_year);
                break;        
            default:
                res.json(dashboard_table_data_today);
                break;
        }
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