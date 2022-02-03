const carts = [
    {quantity:1, brand:`HP` , model: `HP d452`, price: 60000, storage: `1tb`,  RAM: `4gb`, SSD: `128gb`  },
    {quantity:2, brand:`Lenovo` , model: `Lenovo d452`, price: 65000, storage: `2tb`,  RAM: `16gb`, SSD: `256gb`  },
    {quantity:3, brand:`Asus` , model: `Asus d2`, price: 70000, storage: `3tb`,  RAM: `8gb`, SSD: `512gb`  },
    {quantity:5, brand:`Aceer` , model: `Aceer d52`, price: 50000, storage: `1tb`,  RAM: `32gb`, SSD: `128gb`  },
    {quantity:3, brand:`Walton` , model: `Walton g3`, price: 40000, storage: `500gb`,  RAM: `16gb`, SSD: `1tb`  },
    {quantity:1, brand:`DEL` , model: `DEL d452`, price: 45000, storage: `2tb`,  RAM: `12gb`, SSD: `2tb`  }
];
let totalCart = 0;
for(const product of carts){
    let totalProduct = product.price * product.quantity;
    totalCart = totalCart + totalProduct;
}
console.log(totalCart);