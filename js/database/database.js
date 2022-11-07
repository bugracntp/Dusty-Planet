const Weather = require('./models/weather')
const  mongoose = require('mongoose')
const dbURL = 'mongodb+srv://mars:mars123@marsapp.eamn8ds.mongodb.net/MarsApp?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true , useUnifiedTopology: true})
 .then((result) => console.log('baglanti kuruldu'))
 .catch((err)=> console.log(err))

 const weather = new Weather({
    ID : '3',
    sol : '3',
    temp : '68',
    press : '255'
 })
 weather.save()
  