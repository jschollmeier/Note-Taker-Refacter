// Import MySQL connection.
const connection = require("../config/connection.js");

// ORM class for all our SQL statement functions.
class ORM {
  constructor(connection){
    this.connection = connection;
  }

 
  printQuestionMarks(numberOfValues){
    const questionMarks = [];

    for (var i = 0; i < numberOfValues; i++) {
      questionMarks.push("?");
    }

    return questionMarks.join(', ');
  }

  selectAll(table) {
    
    const queryString = 'SELECT * FROM  ??';
    
    return this.connection.query(queryString, [table])
  }

  create(table, columns, values) {
    
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

    

    return this.connection.query(queryString, [table, ...values])
  }

 
  update(table, column, objColVals, id) {
    var queryString = `UPDATE ?? SET ?? = ? WHERE id = ?`;

    

    return this.connection.query(queryString, [table, column, objColVals, id])
  }

  

  remove(table, id) {
    var queryString = `DELETE FROM ?? WHERE id = ?` 

    return this.connection.query(queryString, [table, id]);
  }
  
};


module.exports = new ORM(connection);

const test = new ORM(connection);

