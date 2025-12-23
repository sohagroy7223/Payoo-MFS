document.getElementById("cashout-section").style.display = "none"
document.getElementById("transaction-section").style.display = "none"
document.getElementById("Transfer-section").style.display = "none"


document.getElementById("cashout-div")
    .addEventListener("click", function () {

        hendelToggle("cashout-section", "block")
        hendelToggle("add-money-section", "none")
        hendelToggle("transaction-section", "none")
        hendelToggle("Transfer-section", "none")


    })

document.getElementById("add-money-div")
    .addEventListener("click", function () {

        hendelToggle("add-money-section", "block")
        hendelToggle("cashout-section", "none")
        hendelToggle("transaction-section", "none")
        hendelToggle("Transfer-section", "none")


    })


document.getElementById("Transactions-div")
    .addEventListener("click", function () {

        hendelToggle("transaction-section", "block")
        hendelToggle("cashout-section", "none")
        hendelToggle("add-money-section", "none")
        hendelToggle("Transfer-section", "none")


    })

document.getElementById("Transfer-div")
    .addEventListener("click", function () {

        hendelToggle("Transfer-section", "block")
        hendelToggle("transaction-section", "none")
        hendelToggle("cashout-section", "none")
        hendelToggle("add-money-section", "none")

    })    
