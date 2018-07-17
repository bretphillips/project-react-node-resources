
class baseMap{

    constructor(propertiesList){
        this.propertiesList = (!!propertiesList && Array.isArray(propertiesList)) ? propertiesList : [];
    }

    mapFromService(record){
        if (!(!!record && Object.keys(record).length > 0))
            return;

        Object.keys(record).forEach((key) => {
            if(this.propertiesList.includes(key) && !!record[key])
                this[key] = record[key];
        });
    }
}

export default baseMap;