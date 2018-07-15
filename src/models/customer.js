import baseMap from '../mappers/baseMap';

class Customer extends baseMap{

    static propertiesList = ['name', 'emailAddress', 'dateOfBirth'];

    constructor(name, emailAddress, dateOfBirth){
        super(Customer.propertiesList);
        this.name = (name) ? name : null;
        this.emailAddress = (emailAddress) ? emailAddress : null;
        this.dateOfBirth = (dateOfBirth) ? dateOfBirth : null;
    }
}

export default Customer;