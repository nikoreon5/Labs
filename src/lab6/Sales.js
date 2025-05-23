const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const customers = {};
rl.on('line', line => {
    const [customer, product, quantity] = line.split(' ');
    const count = parseInt(quantity, 10);
    if (!customers[customer]) {
        customers[customer] = {};
    }
    customers[customer][product] = (customers[customer][product] || 0) + count;
});

rl.on('close', () => {
    const customerNames = Object.keys(customers).sort();
    let output = '';
    for (const customer of customerNames) {
        output += `${customer}:\n`;
        const products = Object.keys(customers[customer]).sort();
        for (const product of products) {
            output += `${product} ${customers[customer][product]}\n`;
        }
    }
    console.log(output.trim());
});