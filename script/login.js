// console.log("sohag")
document.getElementById("btn-login")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        if (accountNumber.length === 11) {
            console.log("yes right")
        }
        else {
            console.log("rong")
        }

        const pin = document.getElementById("pin").value;
        console.log(accountNumber, pin)
    })
