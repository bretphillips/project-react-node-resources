import baseMap from '../mappers/baseMap';

class Subscription extends baseMap{

    static propertiesList = ['customer', 'vehicle', 'subscriptionLength'];

    constructor(customer, vehicle, subscriptionLength){
        super(Subscription.propertiesList);
        this.customer = (customer) ? customer : null;
        this.vehicle = (vehicle) ? vehicle : null;
        this.subscriptionLength = (subscriptionLength) ? subscriptionLength : null;
    }

}

export default Subscription;