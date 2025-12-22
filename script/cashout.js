document.getElementById("cashout-btn")
    .addEventListener("click", function (event) {
        event.preventDefault()
        const amount = document.getElementById("cashout-amount").value
        const convertAmount = parseFloat(amount)
        const mainBalance = document.getElementById("main-balance").innerText
        const convertMainBalance = parseFloat(mainBalance)

        const pin = document.getElementById("cashout-pin").value
        const convertPin = parseInt(pin)

        const number = document.getElementById("number").value

        if (number.length === 11 && convertPin === 1234) {
            const subtract = convertMainBalance - convertAmount
            document.getElementById("main-balance").innerText = subtract
        } else {
            console.log("tomar pin tik ni Or number tik ni")
        }
    })