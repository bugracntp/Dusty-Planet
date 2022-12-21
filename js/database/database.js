const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://mongoDB:1234@cluster0.t9egxor.mongodb.net/?retryWrites=true&w=majority";
//(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function insertIntoMongoDB(data, collectionName, insertMany) {
  // Veriyi mongoDB'ye göndermek için gerekli bağlantıyı kurun
  const mongoClient = new MongoClient(uri, { useNewUrlParser: true });
  mongoClient.connect((err) => {
    // Hata olursa, hata mesajını gösterin
    if (err) return console.log(err);
    // Veriyi "veriler" adlı bir koleksiyona ekleyin
    const db = mongoClient.db("MarsWeather");
    if (insertMany === true)
      db.collection(`${collectionName}`).insertOne(data, (err, res) => {
        // Bağlantıyı kapatın
        mongoClient.close();
        // Hata olursa, hata mesajını gösterin
        if (err) return console.log(err);
        // İşlem başarılıysa, başarı mesajını gösterin
        console.log("Veri başarıyla eklendi!");
      });
    else
      db.collection(`${collectionName}`).insertOne(data, (err, res) => {
        // Bağlantıyı kapatın
        mongoClient.close();
        // Hata olursa, hata mesajını gösterin
        if (err) return console.log(err);
        // İşlem başarılıysa, başarı mesajını gösterin
        console.log("Veri başarıyla eklendi!");
      });
  });
}

module.exports = { insertIntoMongoDB };
