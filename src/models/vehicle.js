import baseMap from '../mappers/baseMap';

/**
 * Vehicle Class
 * Assumptions:
 * 1 - this would evolve to a compositional model containing a formal 'make' and 'model' class member;
 * classification and other business factors to be identified
 * simplified for brevity
 */
class Vehicle extends baseMap{

    static propertiesList = ['make', 'model', 'year', 'vin', 'odometer'];

    constructor(make, model, year, vin, odometer){
        super(Vehicle.propertiesList);
        this.make = make || null;
        this.model = model || null;
        this.year = year || 0;
        this.vin = vin || null;
        this.odometer = odometer || 0;
    }
}

export default Vehicle;