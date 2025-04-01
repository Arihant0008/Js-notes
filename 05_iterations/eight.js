const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)



const myTotal = myNums.reduce( (acc,currval) =>acc+currval, 0 )

console.log(myTotal);

const ShoppingCart = [
    {
        itemName: "Js course",
        price: 799
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 899
    },
    {
        itemName: "java course",
        price: 899
    },
    {
        itemName: "c course",
        price: 799
    },
]

const PricetoPay = ShoppingCart.reduce( (acc,item) => acc+item.price,0)

console.log(PricetoPay);
