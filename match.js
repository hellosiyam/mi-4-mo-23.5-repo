const products = [
    {id : 1, name : "I phone Phone", price : 20000},
    {id : 2, name : "Xawmi Phone", price : 20000},
    {id : 3, name : "mackbook Laptop", price : 20000},
    {id : 4, name : "Houwai phone", price : 20000},
    {id : 5, name : "Lenovo Thik-pad laptop", price : 20000},
    {id : 6, name : "best Phone", price : 20000},
    {id : 7, name : "mackBook m1 laptop", price : 20000},
]

function matchProduct(products, search) {
    const match = [];
   for(const product of products){
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
        match.push(product)
    }
   }
   return match;
    
}
console.log(matchProduct(products, "phone"));
