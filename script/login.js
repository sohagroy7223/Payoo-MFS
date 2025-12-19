// console.log("sohag")
document.getElementById("btn-login")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;

        const pin = document.getElementById("pin").value;
        const convert = parseInt(pin)

        // if (accountNumber.length === 11 && convert === 1234) {
        //     console.log("ok you are okay")

        // }
        // else {
        //     console.log("need valid account pin and number")
        // }

        // or

        if (accountNumber.length === 11) {
            if (convert === 1234) {
                window.location.href = "./main.html"
            } else {
                console.log("incorrect your pin ")
            }
        } else {
            console.log("need valid number")
        }

    })
