//1. 쇼핑카트 총 합계 계산

const cart = [
    { item: "노트북", price: 1200000, quantity: 1},
    { item: "마우스", price: 35000, quantity: 2},
    { item: "키보드", price: 89000, quantity: 1},
];
// Total Price: 1359000

// for
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}

console.log(`Total Price: ${totalPrice}`); 

// forEach
totalPrice = 0;

cart.forEach(goods => {
    totalPrice += goods.price * goods.quantity;
});

console.log(`Total Price: ${totalPrice}`); 

// reduce
totalPrice = cart.reduce((prev, goods) =>
    (prev + goods.price * goods.quantity)
, 0);

console.log(`Total Price: ${totalPrice}`);

// map
const itemTotals = cart.map(goods => 
    ({ item: goods.item, total: goods.price * goods.quantity })
);

console.log(`제품별 금액: `, itemTotals);


// 2. 이름 목록 변환
const names = ['alice', 'bob', 'charlie'];

const uppercasedNames = names.map(name => 
    name.toUpperCase()
);

console.log(uppercasedNames);

const capitalStartNames = names.map((name) => 
    name[0].toUpperCase() + name.slice(1)
);

console.log(capitalStartNames);