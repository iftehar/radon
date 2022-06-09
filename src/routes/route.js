const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const newAuthorController = require("../controllers/newauthorcontroller")
const newPublisherController = require('../controllers/newpublishercontroller')
const newbookController = require('../controllers/newbookController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newAuthor", newAuthorController.createnewAuthor)
router.post("/newpublisher", newPublisherController.CreatenewPublisher)
router.post("/newbook", newbookController.createnewBook)
router.get("/getnewbookdata", newbookController.getnewBooksData)
router.get("/getbookAuthorDetails", newbookController.getbookAuthorDetails)

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;