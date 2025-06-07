const Model = require('./model'); // Adjust the path as necessary 
let showdata=async (req, res) => {
    try {
        let data = await Model.find();
       
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
let postdata=async (req, res) => {
    try {
        let data = await Model.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        console.error("Error creating data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
let deletedata=async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Model.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = {
    showdata,
    postdata,
    deletedata
};
