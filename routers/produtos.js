const express = require("express");

const router = express.Router();

router.get("/", (req, res, next)=>{
    res.status(200).send({
        mensagem: "Usando o Get em Produtos"
    });
});

router.post("/", (req, res, next)=>{
    res.status(201).send({
        mensagem: "usando o Post em Produtos"
    })
});

router.get("/:id_produto", (req, res, next)=>{
    const id = req.params.id_produto;


    if(id === 'especial' ){

        res.status(200).send({
            mensagem: "Voce desbobriu o ID Especial",
            id : id
        });

    } else{
        res.status(200).send({
            mensagem: "Voce passou um ID"
        });
    }

    
})

module.exports = router;