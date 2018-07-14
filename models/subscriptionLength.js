

class SubscriptionLength{

    constructor(length){
        this.length = length || 0;
        assignPrice();
    }

    assignPrice(){
        this.price = 0;

        if (this.length === 7)
            this.price = 200;

         if (this.length ===  28)
            this.price = 750;
    }
}

export default SubscriptionLength;