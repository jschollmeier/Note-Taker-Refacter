const orm = require("../config/orm.js");

class Note { 


    selectAll() {
        return orm.selectAll("notes")
    }
    create(columns, values) {
        return orm.create("notes", columns, values)
    }
    update(column, objColVals, id){
        return orm.update("notes", column, objColVals, id)
    }
    remove(id) {
        return orm.remove("notes", id)
    }

}

module.exports = new Note();