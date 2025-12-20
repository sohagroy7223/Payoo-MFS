document.getElementById("add-money")
    .addEventListener("click", function (event) {
        event.preventDefault
        const pin = document.getElementById("pin").value
        const convertPin = parseInt(pin)
        const amount = document.getElementById("amount").value
        const convertAmount = parseFloat(amount)
        const mainBalance = document.getElementById("main-balance").innerText
        const convertMainBalance = parseFloat(mainBalance)

        if (convertPin === 1234) {
            if (convertAmount) {
                const sum = convertAmount + convertMainBalance
                document.getElementById("main-balance").innerText = sum
            } else {
                alert("add your amount")
            }
        } else {
            alert("incorrect password")
        }
    })