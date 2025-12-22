document.getElementById("cashout-section").style.display = "none"


document.getElementById("cashout-div")
    .addEventListener("click", function () {

        hendelToggle("cashout-section", "block")
        hendelToggle("add-money-section", "none")

    })

document.getElementById("add-money-div")
    .addEventListener("click", function () {

        hendelToggle("cashout-section", "none")
        hendelToggle("add-money-section", "block")

    })


