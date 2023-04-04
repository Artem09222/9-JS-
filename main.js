// let title = document.querySelector(".title")

// let n1 = Number(prompt());
// let n2 = Number(prompt());

// let p = (n1 + n2) * 2;
// title.textContent = `Perimetr = ${p}`;
// let s = n1 * n2;
// title.textContent = `Square = ${s}`;

let motobike = {
    fast: 30,
    size: 40,
    mileage: 12000,
    getfast: function() {
        console.log("speed is 30 km per hour!");
    },
    getsize: function() {
        console.log("the size is very large (huge)!");
    },
    getmileage: function() {
        console.log("mileage is almost 120,000 km!");
    }
}

let students = {
    name: 'Vitalik',
    marks: 10,
    success: 'average level',
    getName: function() {
        console.log("My name`s Vitalik, invented by mum!");
    },
    getMarks: function() {
        console.log("Marks is not bad => 9,10!");
    },
    getSuccess: function() {
        console.log("Success is also not bad, but want it better!");
    }
}