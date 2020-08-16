//Banking -  Reading UML & Implementation(Skeleton only)

class Bank{
    constructor(code, address) {
        this.code = code;
        this.address = address;
        this.ATM = ATM;
        this.Account = Account;
    }
    manages() {
        
    }
    maintains() {
        
    }
}
class customer{
    constructor(name, address, dob, cardNo, pin) {
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cardNo = cardNo;
        this.pin = pin;
    }
    verifyPass() {
        
    }
}

class ATM{
    constructor(locatn, mngdby) {
        this.locatn = locatn;
        this.mngdby = mngdby;
        this.currentcust = custObject;
    }
    identifies() {
        
    }
    transactions() {
        
    }

}

class ATM_Transac{
    constructor(transid, date, type, amount, postbal) {
        this.transid = transid;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.postbal = postbal;         
    }
    modifies() {
        
    }
}

class Account{
    constructor(number, balance) {
        this.number = number;
        this.balance = balance;
    }
    deposit() {
        
    }
    withdrawal() {
        
    }
    createTransac() {
        
    }
}

class curAcc extends Account{
    constructor() {
        super();
        super.withdrawal();
    }
    
}

class SavAcc extends Account {
    constructor() {
        super();
        
    }

}