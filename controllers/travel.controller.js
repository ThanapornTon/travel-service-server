//ไฟล์ที่เขียนควบคุมการทำงานต่างๆ กับ table ใน database

const { where } = require("sequelize");
const Travel = require("../models/travel.model");
const Traveller = require("../models/traveller.model");

exports.createTravel = async (req, res) => {
    try {
        const travel = await Travel.create(req.body);       
        res.status(201).json({
            message: "Travel created successfully",
            data: travel
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editTravel = async (req, res) => {

    try {
       const result = await Travel.update(req.body, {
           where: {
               travelId: req.params.travelId,
           }
       });
       res.status(200).json({
           message: "Travel updated successfully",
           data: result 
       });
   } catch (error) {
      res.status(500).json({ message: error.message });
       }
   }

   exports.deleteTravel = async (req, res) => {

    try {
       const result = await Travel.destroy({
           where: {
               travelId: req.params.travelId,
           }
       });
       res.status(200).json({
           message: "Travel deleted successfully",
           data: result 
       });
   } catch (error) {
      res.status(500).json({ message: error.message });
       }
   }

   exports.getAllTravel = async (req, res) => {
    try {
        const result = await Travel.findAll({where: {TravellerId: req.params.TravellerId}});
        if(result) {res.status(200).json({
            message: "Travel get data successfully",
            data: result 
        });
        }else{
            res.status(404).json({ message: "Traveller not found", data: null });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};