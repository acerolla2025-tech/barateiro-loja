const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('cliente'));

const products = [
 {id:1,name:'Arroz',price:25.90},
 {id:2,name:'Cebola',price:5.99}
];

app.get('/api/products',(req,res)=>{
 res.json(products);
});

app.listen(PORT,()=>console.log('Barateiro Cliente online'));
