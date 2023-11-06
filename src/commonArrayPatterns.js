https://react.dev/learn/updating-arrays-in-state

// common Patterns for updating arrays in state
const shoppingCart = [
    {id: 1, product: "turkey", price: 4},
    {id: 2, product: "eggs", price: 28},
    {id: 3, product: "brownie", price: 6.5},
];


// adding to an array
[...shoppingCart, {id: 4, product: "coffee", price:7.99}];

// removing an element
shoppingCart.filter((item) => item.id !== 2);

// updating all elements in an array to change a name for example
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLocaleLowerCase, 
    };
})


// modifying a particular element in an array
shoppingCart.map((item) => {
    if (item.id === 3) {
        return {...item, price: 10.99}
    } else {
        return item;
    }
});
