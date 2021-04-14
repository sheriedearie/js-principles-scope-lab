var customerName = `bob`;

function upperCaseCustomerName(){
    customerName = customerName. toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}
// setBestCustomer(bestCustomer);

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
// overwriteBestCustomer(bestCustomer);

const LeastFavoriteCustomer = 'Pedro';

function changeLeastFavoriteCustomer(){
    LeastFavoriteCustomer = 'Harry';
}

// changeLeastFavoriteCustomer()