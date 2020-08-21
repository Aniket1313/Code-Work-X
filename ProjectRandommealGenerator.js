//Random Meal generator
<!-- 
In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
-->



const menu = {
    _courses: {

    appetizers : [],
    mains : [],
    desserts : [], 
    },

      get appetizers() {
        return this._courses.appetizers;

  },
  set appetizers(appetizers) {
        this._courses.appetizers=appetizers;

  },
    get mains() {
        return this._courses.mains;

  },
  set mains(mains) {
    this._courses.mains =mains;

  },
    get desserts() {
       return this._courses.desserts;

  },
  set desserts(desserts) {
  this._courses.desserts =desserts
  },
    get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
    addDishToCourse(courseName,dishName,dishPrice){
     const dish ={
       name :dishName,
       price : dishPrice,
     };
return this._courses[courseName].push(dish);
   },
  getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
},
 generateRandomMeal() {
   const appetizer =this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains');
   const dessert = this.getRandomDishFromCourse('desserts');
   const totalPrice = appetizer.price + main.price + dessert.price ;
   return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}.`;
 }

};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'wings ', 5.00);
menu.addDishToCourse('appetizers', 'fries Salad', 7.00);
menu.addDishToCourse('desserts', 'waffles ', 11.00);
menu.addDishToCourse('desserts', 'Ice Cream', 7.25);
menu.addDishToCourse('desserts', 'Gulab Jamun', 11.0);
menu.addDishToCourse('mains', 'Paneer Crispy', 10.00);
menu.addDishToCourse('mains', 'Biryani ', 15.00);
menu.addDishToCourse('mains', 'Fried rice ', 12.00);

const meal = menu.generateRandomMeal();
console.log(meal);