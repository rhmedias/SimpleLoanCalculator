function computeLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interestRate').value;
    const months = document.querySelector('#repayDuration').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2); //calculate monthly payment
    let totalPayment = (payment * months).toFixed(2); //show total repayment amount

    //regedit to add a comma after every three digits
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    totalPayment = totalPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");//\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row
    document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`
    document.querySelector('#totalPayment').innerHTML = `Total Repayment = ${totalPayment}`

}
