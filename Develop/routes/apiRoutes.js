var fs = require("fs");
const { support } = require("jquery");
var array = [];

module.exports = function(app) {


    app.get("/api/notes", function(req, res) {
        //var arrays;
        var obj;
       fs.readFile("../db/db.json", 'utf8', function(err, data){
           if (err) throw (err);
           obj = data.toString().split(",");
           //array.push(data.toString().split(","));

           array = JSON.parse(obj);
           return res.json(array);
           
           
       });
       
       

       

    });

    app.post("/api/notes", function(req, res){
        array.push(req.body);
        console.log(array);
        
        fs.writeFile("../db/db.json", JSON.stringify(array, null, 2), 'utf8', function(err){
            
            if (err) throw err;
            console.log("data was appended");
        })
    });

    app.post("/api/notes/:note", function(req, res){
        console.log("ooooooh yeah");
        var ids = req.params.note;
        for (let i = 0; i < array.length; i++) {
            if (ids === array[i].id){
                array.splice(i, 1);
                fs.writeFile("../db/db.json", JSON.stringify(array, null, 2), 'utf8', function(err){
            
                    if (err) throw err;
                    console.log("data was deleted");
                })
            }
            
        }
    });
    
}