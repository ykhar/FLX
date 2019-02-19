function userCard (n) {
  const obj = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: n
  };

  function addTrackingAction(operationType, credits) {
    obj.historyLogs.push({
      operationType: operationType,
      credits: credits,
      operationTime: new Date().toISOString()
    });
  }

  return {
    getCardOptions: function() {
      return {
        balance: obj.balance,
        transactionLimit: obj.transactionLimit,
        historyLogs: obj.historyLogs,
        key: obj.key
      }
    },
    putCredits: function(amount) {
      obj.balance += amount;
      addTrackingAction('Received credits', amount);
    },
    takeCredits: function(amount) {
      if(amount <= obj.transactionLimit && amount <= obj.balance) {
        obj.balance -= amount;
      } else {
        console.error('Transaction limit and remaining balance are lower than credits you want to take!');
      }
      addTrackingAction('Withdrawal of credits', amount);
    },
    setTransactionLimit: function(amount) {
      obj.transactionLimit = amount;
      addTrackingAction('Transaction limit change', amount);
    },
    transferCredits: function(amount, recepientCard) {
      const taxes = 0.005;
      const amountWithTax = amount * taxes + amount;

      if(amountWithTax > obj.balance || amountWithTax > obj.transactionLimit) {
        console.log('Credits exceeded balance or transaction limit')
      } else {
        this.takeCredits(amountWithTax);
        recepientCard.putCredits(amount);
      }
    }
  }
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxCards = 3;
  }
  addCard() {
    if(this.cards.length < this.maxCards) {
      this.cards.push(userCard(this.cards.length));
    }
  }
  getCardByKey(key) {
    return this.cards[key - 1];
  }
}
