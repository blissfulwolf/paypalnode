((mongoService, mongodb)=>{

    var connectionString = process.env.MongoConnectinString ||
    "mongodb://localhost:27017/paypaltesting";

// Create Connection
    var Connect =(cb)=>{
        mongodb.connect(connectionString, (err, db)=>{
            console.log("Mongodb Connected")
            return cb(err, db, ()=> {
                db.close(); 
            });
        });
    };

// Create Method
    mongoService.Create = (colName, createObj, cb)=>{
        Connect((err, db, close)=>{
            db.collection(colName).insert(createObj, (err, results)=>{
                cb(err, results);
                return close();
            });
        });
    };

// Read method
    mongoService.Read = (colName, readObj, cb)=>{
        Connect((err, db, close)=>{
            db.collection(colName).find(readObj).toArray((err, results)=>{
                cb(err, results);
                return close();
            });
        });
    };

// Update method 
    mongoService.Update = (colName, findObj, updateObj, cb)=>{
        Connect((err, db, close)=>{
            db.collection(colName).update(findObj, updateObj, (err, results)=>{
                cb(err, results);
                return close();
            });
        });
    };

// Delete method
    mongoService.Delete = (colName, findObj, cb)=>{
        Connect((err, db, close)=>{
            db.collection(colName).remove(findObj, (err, results)=>{
                cb(err, results);
                return close();
            });
        });
    };

})




// Module Exports

(
    module.exports,
    require('mongodb')
);