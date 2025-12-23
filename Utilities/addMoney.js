
document.getElementById("add-money-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const inputAmount = getInputValueById("input-amount")

        const mainBalance = getInnerTextById("main-balances")

        const pin = getInputValueById("pin")
        const accountNumber = document.getElementById("account-number").value

        const selectBank = document.getElementById("allBank").value


        if (inputAmount < 0) {
            alert("please add positive number")
            return;
        }

        if (accountNumber.length === 11) {
            if (pin === 1234) {
                if (inputAmount) {
                    const sum = mainBalance + inputAmount
                    // document.getElementById("main-balances").innerText = sum
                    setEnnerTextByIdAndValu("main-balances", sum)

                    const Transaction = document.getElementById("Transaction-container")
                    const div = document.createElement("div")
                    div.innerHTML = `
                    <h1 class = "text-yellow-700"> added money from ${selectBank}</h1>
                    <h3 class = "text-green-700">${inputAmount}</h3>
                    <p class = "text-blue-700">account number ${accountNumber}</p>
                `
                    Transaction.appendChild(div)
                }
                else {
                    alert("add your amount")
                }

            }
            else {
                alert("incorrect your pin number")
            }
        } else {
            alert("input valid number")
        }
    })