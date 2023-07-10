class Grocery {
    name: string;
    quantity: number;
    price: number;
    weight: string;
    category: string;

    constructor(name: string, quantity: number, price: number, weight: string, category: string) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.weight = weight;
    this.category = category;
        }

    getTotalPrice(): number {
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


    displayDetails(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Price: $${this.price}`);
    console.log(`Category: ${this.category}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }



// Example usage:
//const apple = new Grocery("Apple", 5, 1.5, "Fruits");
//apple.displayDetails();

//export default Grocery;
