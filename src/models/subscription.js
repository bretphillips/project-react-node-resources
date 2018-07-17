import baseMap from '../mappers/baseMap';
import Customer from './customer';
import SubsciptionLength from './subscriptionLength';
import Vehicle from './vehicle';

class Subscription extends baseMap{

    static propertiesList = ['customer', 'vehicle', 'subscriptionLength'];

    constructor(customer, vehicle, subscriptionLength){
        super(Subscription.propertiesList);
        this.customer = (customer) ? customer : null;
        this.vehicle = (vehicle) ? vehicle : null;
        this.subscriptionLength = (subscriptionLength) ? subscriptionLength : null;
    }

    /**
     * Assign the service fields to the local property members and
     * convert object literals to class instances to enforce compositional
     * model use where referenced
     */
    mapFromService(record){
        super.mapFromService(record);
        this.mapToModels();
    }

    mapToModels(){
        const mapCustomer = new Customer(Customer.propertiesList).mapFromService(this.customer);
        const mapVehicle = new Vehicle(Vehicle.propertiesList).mapFromService(this.vehicle);
        const mapSubscriptionLength = new SubsciptionLength(this.subscriptionLength.length);

        this.customer = mapCustomer;
        this.vehicle = mapVehicle;
        this.subscriptionLength = mapSubscriptionLength;
    }
}

export default Subscription;