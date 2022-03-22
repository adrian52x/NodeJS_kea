import  Router  from "express";

const router = Router();

router.get("/fillcoffee", (req,res) => {
    //console.log(req.session);
    req.session.coffeeAmount = 100;
    res.send();
});

router.get("/drinkcoffee", (req,res) => {
    req.session.coffeeAmount -= 40;
    res.send({ message: `You have ${req.session.coffeeAmount} coffee amount left`})
});



export default router;