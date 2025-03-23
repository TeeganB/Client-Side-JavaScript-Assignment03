
//CONSTANTS & VARIABLES
const pizzaForm = document.getElementById('pizzaForm');
const pizzaOutput = document.getElementById('pizzaOutput');
const studentInfoPara = document.getElementById('studentInfo');
const showStudentInfoBtn = document.getElementById('showStudentInfo');

//Pizza Constructor Function 
function Pizza(size, crust, sauce, toppings, instructions, cheese, quantity) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
    this.instructions = instructions;
    this.cheese = cheese;
    this.quantity = quantity;

    //Return description
    this.description = function () {
        return `
            <h3>Your Pizza Order:</h3>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Crust:</strong> ${this.crust}</p>
            <p><strong>Sauce:</strong> ${this.sauce}</p>
            <p><strong>Cheese:</strong> ${this.cheese}</p>
            <p><strong>Toppings:</strong> ${this.toppings.length > 0 ? this.toppings.join(", ") : "None"}</p>
            <p><strong>Special Instructions:</strong> ${this.instructions || "None"}</p>
            <p><strong>Quantity:</strong> ${this.quantity}</p>
        `;
    };
}

//Show Student Info on Button Click
showStudentInfoBtn.addEventListener('click', function () {
    studentInfoPara.textContent = "Student Name: Teegan Buttigieg | Student ID: 1263104";
});

//Form Submission Handling
pizzaForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //Form Validation
    const size = document.getElementById('size').value;
    const crust = document.querySelector('input[name="crust"]:checked')?.value;
    const sauce = document.getElementById('sauce').value;
    const cheese = document.getElementById('cheese').value;
    const quantity = document.getElementById('quantity').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(cb => cb.value);
    const instructions = document.getElementById('instructions').value;

    if (!size || !crust || !sauce || !cheese || !quantity) {
        alert('Please fill in all required fields!');
        return;
    }

    //Create Pizza Object
    const customerPizza = new Pizza(size, crust, sauce, toppings, instructions, cheese, quantity);

    //Display Output
    pizzaOutput.innerHTML = customerPizza.description();
});