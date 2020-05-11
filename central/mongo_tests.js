require ('custom-env').env('staging')


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
console.log(process.env.MONGO_USR)
//mongodb+srv://simpleuser:<password>@cluster0-byu4q.mongodb.net/test?retryWrites=true&w=majority

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
