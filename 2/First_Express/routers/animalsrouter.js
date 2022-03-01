const router = require("express").Router();
const animals = require("../animals/animalsUtils.js");

router.get("/nrofanimals", (req, res) => {
    res.send({ data: animals.calculating()});
});


router.get("/favorite", (req, res) => {
    res.redirect("/nrofanimals");
});


// http://localhost:3000/cuteanimal?cute=Yes
router.get("/cuteanimal", (req, res) => {
    if (req.query.cute === "Yes") {
        return res.send({ animal: "Giraffe" });
    }
    res.send({ animal: "Snake"});
    
});

module.exports = router;
