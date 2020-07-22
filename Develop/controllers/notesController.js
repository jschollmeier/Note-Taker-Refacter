const express = require('express');
const router = express.Router();
const note = require("../models/note.js");

// 1)
router.get("/api/notes", (req, res) => {
  // 2)
  note.selectAll()
  // 5) 
  .then(results => res.json(results))
  .catch(err => res.json(err))
});

// utilizing the express router object to declare a post rout on /api/cats
// req and res are fed their values via express
router.post("/api/notes", (req, res) => {
  // reference the cat model and invoke the .create() method and we pass in 2 arguments
  console.log(req.body.title+" "+req.body.text);
  note.create(["title", 'note'], [req.body.title, req.body.text])
  .then(result => res.json({ id: result.insertId }))
  .catch(err => res.json(err))
});

router.put("/api/notes/:note", (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  note.update("note", { text }, { id })
    .then((results) => {
      if(results.affectedRows === 0) {
       return res.json({ statusCode: 404 })
      }
      res.json({ statusCode: 200 })
    })
    .catch(err => res.json(err))
});

// TODO: Create a delete route that references cat.delete()
router.post('/api/notes/:note', (req, res) => {
  
  note.remove(req.params.note)
    .then(results => res.json(results))
    .catch(err => res.json(err))

  

})

// Export routes for server.js to use.
module.exports = router;
