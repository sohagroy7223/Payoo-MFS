document.getElementById("cashout-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const cashoutAmount = getInputValueById("cashout-amount")

        const mainBalance = getInnerTextById("main-balances")


        const pin = getInputValueById("pin")
        const accountNumber = document.getElementById("number").value



        if (mainBalance < cashoutAmount) {
            alert("check your balance")
            return;
        }

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                if (cashoutAmount) {
                    const subtract = mainBalance - cashoutAmount
                    // document.getElementById("main-balances").innerText = subtract
                    setEnnerTextByIdAndValu("main-balances", subtract)

                    const p = document.createElement("p")
                    p.style.color = "blue"
                    p.innerText = `
                cashout ${cashoutAmount} from ${accountNumber} number
                `
                    const Transaction = document.getElementById("Transaction-container")
                    Transaction.appendChild(p)
                }
                else {
                    alert("add your amount")
                }

            } else {
                alert("incorrect your pin number")
            }
        } else {
            alert("please add a valid number")
        }
    })