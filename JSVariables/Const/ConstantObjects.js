        // Create an object:
        const car = { type: "Fiat", model: "500", color: "white" };

        // Change a property:
        car.color = "red";

        // Add a property:
        car.owner = "Johnson";

        console.log(car); // Output: { type: "Fiat", model: "500", color: "red", owner: "Johnson" }

        // But you can NOT reassign the object:
        // const car = { type: "Fiat", model: "500", color: "white" };

        // car = { type: "Volvo", model: "V40", color: "red" };    // ERROR