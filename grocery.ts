
//Akilah Murphy Grocery class
class Grocery {
    name: string;
    quantity: number;
    price: number;
    weight: string;
    category: string;

    constructor(name: string, quantity: number, price: number, weight: string, category: string){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.weight = weight;
        this.category = category;
    }

    getTotal(): number {
        return this.quantity * this.price;
    }
    
}
    let groceries: Grocery[] = [
        new Grocery('Bread', 1, 3.99, '1 lb', 'carbs'),
        new Grocery('Milk', 2, 4.99, '2 lbs', 'Dairy'),
        new Grocery('Strawberries', 1, 4.50, '0.5 lbs', 'Fruit'),
        new Grocery('Eggs', 2, 3.99, '.25 lbs', 'Dairy'),
        new Grocery('Avocados', 4, .99, '.3 lbs', 'Fruit'),
        new Grocery('Juice', 3, 6.99, '32 oz','Drink'),
        new Grocery('Paper Towels', 2, 5.99, '20 oz','Household'),
        new Grocery('Onions', 5, 0.55, '6 oz', 'Vegestables'),
        new Grocery('Peppers', 4, 1.09, '14 oz','Vegestables'),
        new Grocery('Water: 24 pack', 1, 7.99, '5 lbs', 'Drinks'),
    ];
    const output = 
    document.getElementById('Output');
    if (output) {
        const ul = document.createElement('ul');
        groceries.forEach((item) => {
            const li = 
    document.createElement('li');
            li.innerHTML = `${item.name}:
        ${item.quantity} x
        $${item.price.toFixed(2)} = 
        $${item.getTotal().toFixed(2)}`;
        });
        output.appendChild(ul);
    }
    const ele = document.getElementById("p");

    groceries.forEach(e=> {
        const p = document.createElement("p");
        p.textContent = `${e.name} ${e.quantity} -> $${e.price} ${e.weight} ${e.category}`;
        ele?.appendChild(p);
    });



