const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const { MongoClient } = require("mongodb");

app.use(express.json());

const withDB = async (operations, res) => {
  try {
    const conn = await MongoClient.connect('mongodb://localhost:27017');
    const db = conn.db("AMPES_DB");
    await operations(db);
    conn.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to database", error });
  }
};

app.get('/api/contacts/:name', async (req, res) => {
  withDB(async (db) => {
    const contactName = req.params.name;
    const contactInfo = await db
    .collection('contacts')
    .findOne({ name: contactName });
    res.status(200).json(contactInfo);
  }, res);
});

app.post('/api/contacts/:name/add-comments', (req, res) => {
  const { username, text } = req.body;
  const contactName = req.params.name;

  withDB(async(db)=>{
    const contactInfo=await db.collection('contacts').findOne({name:contactName});
    await db.collection('contacts').updateOne({name:contactName},
        {
            $set:{comments:contactInfo.comments.concat({username,text}),},
        }
        );
        const updateContactInfo=await db.collection('contacts').findOne({name:contactName});
        res.status(200).json(updateContactInfo)
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
