// define a variable for the month entry textbox and assign it the value from the DOM for that element
// define a variable for the result to be sent to the DOM and assign it the value from the DOM for that element (which is currently nothing)

// Add an event listener to the button
document.querySelector('button').addEventListener('click', function calculateDays() {
    //note that the code for this program only executes when the button is clicked]
    const monthInput = document.getElementById("monthInput").value;

    // Initialize num_days to -1 (default value) in case of an error
    let num_days = -1;

    //define and assign a new month input variable as lowercase of input to make the switch statement easier to deal with
    //run through a switch statement based on the lowercase month variable
    // when the month is january, march, may, july, august, october, december, set num_days = 31
    switch (monthInput.toLowerCase()) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            num_days = 31;
            break;
        //for april june september november, num_days=30
        case "april":
        case "june":
        case "september":
        case "november":
            num_days = 30;
            break;

        //for february, set num_days = 28
        case "february":
            num_days = 28; // Assuming a non-leap year
            break;
        // all others, num_days = -1 to indicate an error in the input
        default:
            // Handle invalid input
            alert("Invalid month input. Please enter a valid month name.");
            break;
    }

    //if num_days is -1, output an error message to the DOM, otherwise send the proper result from the switch statement
    const resultElement = document.getElementById("result");
        if (num_days !== -1) {
            resultElement.innerText = `Number of days in ${monthInput}: ${num_days}`;
        } else {
            resultElement.innerText = "An error occurred.";
        }
    });

