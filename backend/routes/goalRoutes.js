const express = require("express")
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({message: "Get goalss"})
})

router.post("/", (req, res)=>{
    res.status(200).json({message: "Set goalss"})
})

router.put("/:id", (req, res)=>{
    res.status(200).json({message: `Update goalss ${req.params.id} `})
})

router.delete("/:id", (req, res)=>{
    res.status(200).json({message: `Delete goalss ${req.params.id} `})
})


module.exports = router;