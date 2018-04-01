export default class IndexedDB {
    async list(cb) {
        let db = await this._init();
        var customers = [];
        
        var transaction = db.transaction(["name"]);
        var objectStore = transaction.objectStore("name");

        objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          if (cursor) {
            customers.push(cursor.value);
            cursor.continue();
          }
          else {
            cb(customers);
          }
        };
    }
    
    _init() {
        return new Promise((resolve, reject) => {
            var request = window.indexedDB.open("MyTestDatabase", 4);
            
            request.onsuccess = event => {
                var db = event.target.result;
                resolve(db);
            }
        });
        
    }
}



// var request = window.indexedDB.open("MyTestDatabase", 3);

// // This is what our customer data looks like.
// const customerData = [
//     { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
//     { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
// ];

// request.onerror = event => {
//     // Do something with request.errorCode!
//     this.setState({message:request.errorCode})
//     };
// request.onsuccess = event => {
//     var db = event.target.result;
//     // Do something with request.result!
//     this.setState({message:"Success"})
//     // var customerObjectStore = db.transaction("name", "readwrite").objectStore("name");
//     // customerData.forEach(function(customer) {
//     //     customerObjectStore.add(customer);
//     // });

//         var transaction = db.transaction(["name"]);
//         var objectStore = transaction.objectStore("name");
//     // var req = objectStore.get("444-44-4444");
//     // req.onerror = function(event) {
//     // // Handle errors!
//     // };
//     // req.onsuccess = function(event) {
//     // // Do something with the request.result!
//     // alert("Name for SSN 444-44-4444 is " + req.result.name);
//     // };

//     var customers = [];

//     objectStore.openCursor().onsuccess = function(event) {
//     var cursor = event.target.result;
//     if (cursor) {
//         customers.push(cursor.value);
//         cursor.continue();
//     }
//     else {
//         alert("Got all customers: " + customers);
//     }
//     };
    
// };
//     // This event is only implemented in recent browsers   
// request.onupgradeneeded = event => { 
//     // Save the IDBDatabase interface 
//     var db = event.target.result;

//     // Create an objectStore for this database
//     var objectStore = db.createObjectStore("name", { keyPath: "ssn" });
// };