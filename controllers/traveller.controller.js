
const Traveller = require("../models/traveller.model");

exports.createTraveller = async (req, res) => {
    try {
        const result = await Traveller.create(req.body);
        res.status(201).json({
            message: "Traveller created successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkloginTraveller = async (req, res) => {
    try {
        const result = await Traveller.findOne({
            where: {
                travellerEmail: req.params.travellerEmail,
                travellerPassword: req.params.travellerPassword
            }
        });
        if (result) {
            res.status(201).json({
                message: "Traveller created successfully",
                data: result
            });
        } else {
            res.status(404).json({ message: "Traveller not found", data: null });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.editTraveller = async (req, res) => {

    try {
        const result = await Traveller.update(req.body, {
            where: {
                travellerId: req.params.travellerId,
            }
        });
        res.status(200).json({
            message: "Traveller updated successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteTraveller = async (req, res) => {

    try {
        const result = await Traveller.destroy({
            where: {
                travellerId: req.params.travellerId,
            }
        });
        res.status(200).json({
            message: "Traveller deleted successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}