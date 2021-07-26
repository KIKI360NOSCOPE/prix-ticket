let priceInput = document.getElementById("ticketPrice")
let cashInput = document.getElementById("cashCustomer")

document.getElementById("result").addEventListener("click", function () {
    let price = parseInt(priceInput.value)
    let cash = parseInt(cashInput.value)

    if (cash >= price) {
        let exchange = cash - price
        console.log(exchange);
    
        let nombreBillets10 = Math.floor(exchange / 10)
        console.log('nombre de billet de 10 : ' + nombreBillets10);
    
        let nombreBillets5 = Math.floor( (exchange - 10 * nombreBillets10) / 5 )
        console.log('nombre de billet de 5 : ' + nombreBillets5);
    
        if (nombreBillets5 >= 1) {
            var nombrePieces1 = exchange - 10 * nombreBillets10 - 5 * nombreBillets5
            console.log('nombre de pieces de 1 : ' + nombrePieces1);
        } else {
            var nombrePieces1 = exchange - 10 * nombreBillets10
            console.log('nombre de pieces de 1 : ' + nombrePieces1);
        }

        let output = "Il faut rendre "
        if (nombreBillets10 >= 1) {
            output += `${nombreBillets10} billet(s) de 10€ `
        }
        if (nombreBillets5 >= 1) {
            output += `${nombreBillets5} billet(s) de 5€ `
            
        }
        if (nombrePieces1 >= 1) {
            output += `${nombrePieces1} pièce(s) de 1€ `
        }

        var result = `${exchange}€ : ${output}`

    } else {
        var result = 'Vous avez donné autant voir moins d\'argent que le prix'
    }    

    document.getElementById('monnaie').innerHTML = result
})
