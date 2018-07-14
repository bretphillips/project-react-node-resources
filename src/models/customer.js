
class Customer {

    constructor(name, emailAddress, dateOfBirth){
        this.name = (name) ? name : null;
        this.emailAddress = (emailAddress) ? emailAddress : null;
        this.dateOfBirth = (dateOfBirth) ? dateOfBirth : null;
    }
}

export default Customer;