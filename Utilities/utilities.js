function getInputValueById(id) {
    const value = document.getElementById(id).value
    const convertedValue = parseFloat(value)
    return convertedValue
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText
    const convertedValue = parseFloat(value)
    return convertedValue
}

function (id, value) {
    document.getElementById(id).innerText = value
}


function hendelToggle(id, status) {
    document.getElementById(id).style.display = status
}

