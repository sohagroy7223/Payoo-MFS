
document.getElementById("add-money-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const inputAmount = getInputValueById("input-amount")

        const mainBalance = getInnerTextById("main-balances")

        const pin = getInputValueById("pin")
        const accountNumber = document.getElementById("account-number").value

        const Transaction = document.getElementById("Transaction-container")

        if (inputAmount < 0) {
            alert("please add positive number")
            return;
        }

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + inputAmount
                // document.getElementById("main-balances").innerText = sum
                setEnnerTextByIdAndValu("main-balances", sum)


                const p = document.createElement("p");
                p.style.color = "blue"
                p.innerText = `
                    addad ${inputAmount} from ${accountNumber} account
                `
                Transaction.appendChild(p)
            }
            else {
                alert("incorrect your pin number")
            }
        } else {
            alert("input valid number")
        }
    })