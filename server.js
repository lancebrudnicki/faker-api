const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;





class User{
    constructor(){
        this._id = faker.finance.account();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.finance.account();
        this.name = faker.company.companyName();
        this.address = {
        'street': faker.address.streetName(),
        'city': faker.address.city(),
        'state': faker.address.state(),
        'zipcode': faker.address.zipCode(),
        'country': faker.address.country()
        }
    }
}


console.log(new Company())
console.log(new User())


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is short for request
// res is short for response
app.get("/api/user/new", (req, res) => {
    res.json(new User());
});
app.get("/api/compaines/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/user/company", (req, res) => {
    res.json({'user':new User(),
                'company':new Company()});

});




const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);