
class SubscriptionLength{

    static availableSubscriptions = [
        { length: 7,  price: 200 },
        { length: 28, price: 750 }
    ];

    constructor(length){
        this.length = (length) ? length : 0;
        this.price = this.assignPrice();
    }

    assignPrice(){
        if (this.length === 0)
            this.price = 0;

        const subscription = SubscriptionLength.availableSubscriptions
            .filter(sub => sub.length === this.length);

        return (subscription.length) ? subscription[0].price : 0;
    }
}

export default SubscriptionLength;