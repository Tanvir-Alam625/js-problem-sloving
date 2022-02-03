// ============================================================
// One arry in  choose our lucky elements 
// =============================================================
// Array 
const laptops = [
    {brand:`HP` , model: `HP d452`, price: 60000, storage: `1tb`,  RAM: `4gb`, SSD: `128gb`  },
    {brand:`Lenovo` , model: `Lenovo d452`, price: 65000, storage: `2tb`,  RAM: `16gb`, SSD: `256gb`  },
    {brand:`Asus` , model: `Asus d2`, price: 70000, storage: `3tb`,  RAM: `8gb`, SSD: `512gb`  },
    {brand:`Aceer` , model: `Aceer d52`, price: 50000, storage: `1tb`,  RAM: `32gb`, SSD: `128gb`  },
    {brand:`Walton` , model: `Walton g3`, price: 40000, storage: `500gb`,  RAM: `16gb`, SSD: `1tb`  },
    {brand:`DEL` , model: `DEL d452`, price: 45000, storage: `2tb`,  RAM: `12gb`, SSD: `2tb`  }
];
let hightPrice = [];
for (const laptop of laptops ){
    if(laptop.storage == `2tb`){
        hightPrice.push(laptop);
    }
    // console.log(laptop);
}
console.log(hightPrice);