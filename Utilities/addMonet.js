document.getElementById("add-money-btn")
    .addEventListener("click", function (event) {
        event.preventDefault
        const inputAmount = getInputValueById("input-amount")
        const mainBalance = getInnerTextById("main-balances")

        const pin = getInputValueById("pin")
        const accountNumber = document.getElementById("account-number").value

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + inputAmount
                // document.getElementById("main-balances").innerText = sum
                setEnnerTextByIdAndValu("main-balances", sum)
            }
            else {
                alert("incorrect your pin number")
            }
        } else {
            alert("input valid number")
        }



    })