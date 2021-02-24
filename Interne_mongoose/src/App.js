/* Install and Setup Mongoose env */


let mongoose = require('mongoose');

require('dotenv').config();
    

/* Connection to mongoDB Atlas*/

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    
    .then(() => console.log('Connection successful'))
    
    .catch(err => console.error('Connection error'));
        
/* Create Person Prototype */
        
let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    favoriteFoods: [String]    
});
        
let personModel = mongoose.model("Persons", personSchema);
        
/* Create and Save A Person  */
        
 let person = new personModel({ name: "amine", age: 24, favoriteFoods: [ "lablabi", "pizza"] });
        
 person.save((err, person) => {
     if(err) console.error(err);
     console.log(person);
     });
        
/* Create  Persons with model.create() */
            
 let arrayOfPeople = [
    {name: "sami", age: 24, favoriteFoods: ["pizza", "Coke"]},
    {name: "amina", age: 32, favoriteFoods: ["sandwich", "coke"]}
 ];
        
 personModel.create(arrayOfPeople,(err, person) => {
    if(err) console.error(err);
     console.log(person);
     });
        
/*  Search A Person in Database with model.find() */
        
 personModel.find({name: "Bouras"}, (err, person) => {
     if(err) console.error(err);
     console.log(person);
     });
        
/* Use model.findOne()  from Database */
        
personModel.findOne({favoriteFoods: {"$in" : ["pizza"]} }, (err, person) => {
     if(err) console.error(err);
    console.log(person);
    });
        
        /* Use model.findById() to Search in Database By _id */

 personModel.findById("5edf5882f456206ad0f41ac", (err, person) => {
     if(err) console.log(err);
    console.log(person);
 })    

        /* Perform Classic Updates by Running Find, Edit, then Save */

 personModel.findById("5edf5882f5893206ad0f41ac", (err, person) => {
    if(err) console.log(err);
     person.favoriteFoods.push(pizza);
   person.save((err, person) => {
        if(err) console.log(err)
       console.log(person);
    })
})

 /*  Updates  a Document Using model.findOneAndUpdate() */

 personModel.findOneAndUpdate({name: "amine"}, {age: 25}, {new: true}, (err, person) => {
    if(err) console.log(err);
     console.log(person);
 })

        /* MongoDB and Mongoose - Delete Many Documents with model.remove() */

 personModel.findOneAndRemove("5edf5882f5893206ad0f41ac", (err, person) => {
    if(err) console.log(err);
   console.log(person);
 })

        /* Delete with  model.remove() */

personModel.deleteMany({name: "oumayma"}, (err, person) => {
     if(err) console.log(err);
    console.log("Person(s) with name 'oumayma' was deleted");
})