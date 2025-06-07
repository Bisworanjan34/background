
// let { ObjectId } = require('mongodb'); // Import ObjectId to handle MongoDB IDs
let {ObjectId}=require('mongodb')

let deletefun = (app, dbname, colname, mongocli) => {
    app.delete('/:id', async (req, res) => {
        try {
            let db = mongocli.db(dbname);
            let col = db.collection(colname);

            let id = req.params.id;
            let result = await col.deleteOne({ _id: new ObjectId(id) }); // Convert id to ObjectId
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: 'No document found with the given ID' });
            }

            res.json({ message: 'Document deleted successfully', result });
        } catch (err) {
            console.error('Something went wrong:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};

module.exports = { deletefun };
