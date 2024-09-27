const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
//Connection karne k liye hai promise return rta hai async function hai
main().then((res) => {
    console.log("connection is successfull");
    
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}
//----------------------------------Schema creation(Collection)----------
//like structure in sql ki is type me data store hota hai
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number
})
//---------------Model(document->row->data) schema pass karne ka or uska ek object banta hai
const User = mongoose.model("User", userSchema);
const user2 = new User({
    name: "dhiraj",
    email: "adcc@gmail.com",
    age: 48
});
//object ko save karna padega async function hai promise return karega
user2.save().then(res => console.log(res)
).catch(err => console.log(err)
);

//---------Multiple data entry ke liye------------
User.insertMany([
    {
        name: "tony",
        email: "tony@gmail.com",
        age: 20
    },
    {
        name: "harry",
        email: "harry@gmail.com",
        age: 25
    },
    {
        name: "petter",
        email: "petter@gmail.com",
        age: 30
    }
]).then(res => console.log(res)
);
// ---------------Find karne ka fetch karne ka promse nhi deta
// uske jesa query object data hai jsipe thennable method run kar sakte hai
// array return karta hai object ka so object method use kar sakte hai
User.findById("66f6d1c1cf279823017da468" ).then(res => console.log(res[0].name))
User.find({ age: { $gt: 20 } }).then(res => console.log(res)
);
// update many  Model.UpdateOne(fillter,update);

User.updateOne({ name: "dhiraj" },{age:266}).then(res => console.log(res)
)
User.updateMany();

// -----------Find and Upadte
// old value find karke dega but option pass karke updated bhi dekh sakte hai
Model.findOneAndUpdate({ name: "dhiraj" },{age:265},{new:true});
// findById bhi hai
User.findOneAndUpdate({ name: "dhiraj" },{age:42},{new:true}).then(res => console.log(res)
)

// deleteOne and DeleteMany
// model.delete(fillter); Model.DeleteMany({fillter})
// isme bhi find and delete hai 
