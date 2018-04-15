// deals with everything with data collection

import db from './db';


export default class DataCollection {
    static list() {
        return new Promise( async (resolve, reject) => {
            
            let dataArray = [];

            let querySnapshot = await db.collection("data").get();
            
            querySnapshot.forEach((doc) => {
                let item = {
                    id: doc.id,
                    ...doc.data()
                } 

                dataArray.push(item);
            });
            resolve(dataArray);

        });
    }

    static insert(newObject) {
        return db.collection("data").add(newObject);
    }

    static update(id, newObject) {

    }

    static delete(id) {

    }
}