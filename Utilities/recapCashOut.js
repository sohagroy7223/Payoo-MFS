document.getElementById("cashout-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const cashoutAmount = getInputValueById("cashout-amount")
        const mainBalance = getInnerTextById("main-balance")

        const pin = getInputValueById("pin")
        const accountNumber = document.getElementById("number").value

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const subtract = mainBalance - cashoutAmount
                document.getElementById("main-balance").innerText = subtract
            } else {
                console.log("incorrect your pin number")
            }
        } else {
            console.log("please add a valid number")
        }
    })