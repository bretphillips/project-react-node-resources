/**
 * Vehicle Class
 * Assumptions:
 * 1 - this would evolve to a compositional model containing a formal 'make' and 'model' class member;
 * 2 - pricing would not likely be directly assigned to the vehicle - assume that would be based on type
 * classification and other business factors to be identified
 * simplified for brevity
 */
class Vehicle{

    constructor(make, model, year, vin, odometer, price){
        this.make = make || null;
        this.model = model || null;
        this.year = year || 0;
        this.vin = vin || null;
        this.odometer = odometer || 0;
        this.price = price || 0;
    }
}

export default Vehicle;