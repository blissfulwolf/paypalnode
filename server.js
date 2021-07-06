const { resolveSoa } = require('dns');

((express, server, bodyParser, fs)=> {

    server.use(bodyParser.urlencoded({ extended:true }));
    server.use(express.static("pub"));

//--------------------------------------------------------
//Home Page

    server.get('/', (req,res)=> {
        fs.readFile("./templates/home.html", (err, results) => {
            res.send(results.toString());
        });
    });

//--------------------------------------------------------
// Order Routes

    server.get('/success/:orderID', (req,res)=> {
         var orderID = req.params.orderID;
    });

    server.get('/cancel/:orderID', (req,res)=> {
        var orderID = req.params.orderID;
    });

    server.get('/orderdetails/:orderID', (req,res)=> {
        var orderID = req.params.orderID;
    });

//--------------------------------------------------------
// Recurring Routes

    server.get('/refund/:planID', (req,res)=> {
        var planID = req.params.planID;
    });

    server.get('/recurring_success/:planID', (req,res)=> {
        var planID = req.params.planID; 
    });


    server.get('/recurring_cancel/:planID', (req,res)=> {
        var planID = req.params.planID;
    });

    server.get('/recurring_orderdetails/:agreementID', (req,res)=> {
        var agreementID = req.params.agreementID;
    });

//--------------------------------------------------------
// POST Routes = Comes from a FORM POST

    server.post('/buysingle', (req,res)=> {
        var quantity = req.body.Quantity;
    });

    server.post('/buyrecurring', (req,res)=> {
            
    });


//--------------------------------------------------------
// Server Entry Point

    server.listen(8080, "localhost", (err) => {
        console.log(err || "Service Online");
    });
})
(
    require('express'),
    require('express')(),
    require('body-parser'),
    require('fs')
);