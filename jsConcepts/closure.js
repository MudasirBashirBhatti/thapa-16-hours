// A closure is a function that retains access to variables from its outer scope, even after that outer function has finished executing. Closures are commonly used in programming to create private variables or to maintain state between function calls.

// even the outer function has closed the execution but inner function also has access the variables of outer function.

const myAccount = (balance) => {
    let newBalance = balance

    return {
        insertBalance: (amount) => {
            newBalance += amount
            console.log('new balance', newBalance);
        },
        withdrawMoney: (amount) => {
            if (amount > newBalance) {
                console.log('Insufficient funds');
                return;
            }
            newBalance -= amount
            console.log('balance after withdraw', newBalance);
        },
        checkBalance: () => {
            console.log('final balance', newBalance);
        }
    }
}

const bankaccount = myAccount(5)
bankaccount.withdrawMoney(200)
bankaccount.insertBalance(300)
bankaccount.checkBalance()