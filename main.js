var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if(this.drinkRequirements[drinkType]==undefined){
      alert("Sorry, we don't make "+drinkType);
    }
    else if(this.beans<this.drinkRequirements[drinkType]){
      alert("Sorry, we're all out of beans!");
    }
    else{
      this.beans-=this.drinkRequirements[drinkType];
      alert(this.beans);
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");