import Customer from './customer';

class Subscription{

    constructor(name, emailAddress, dateOfBirth){
        this.name = name || null;
        this.emailAddress = emailAddress || null;
        this.dateOfBirth = dateOfBirth || null;
    }
}

export default Subscription;