const express = require('express');
const Book = require('./book.model.js');
const router = express.Router();


router.post("/create-book", async (req, res) =>{
   try{
       const newBook =await Book({...req.body});
       await newBook.save();
       res.status(200).send({message: "Book posted successfully", book:newbook})
    }
    catch(error){
       console.log("Error creating book",error);
       res.status(500).send({message: "failed to create  book"})
    }
       
      consolee.log(req.body)
})

module.exports = router;