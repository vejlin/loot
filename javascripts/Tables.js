
//Side 48 Fantasy Companion
//Loot object for displaying the end result
function Loot () {
    this.money = 0;
    this.magicItem = null;
}

//Magic Item object
function MagicItem () {
    this.price = 0;
    this.type = '';
    this.subType = null;
    this.description = null;
}

//Depending on type how much loot is given
//1 = Meager
//2 = Worthwhile
//3 = Rich
//4 = Treasure trove
function treasure(type,scenario) {
	var loot = new Loot();
	var treasureDie = rollDie(10);
	var magicItemPercent = rollDie(100);
	var money = 0;
	if (type == 1) {
		money = treasureCalc(10,100);
		if (magicItemPercent == 1) {
			magicItem(loot,scenario);
		}
	}
	else if (type == 2) {
		money = treasureCalc(100,1000);
		if (magicItemPercent <= 25) {
			magicItem(loot,scenario);
		}
	}
	else if (type == 3) {
		money = treasureCalc(500,5000);
		if (magicItemPercent <= 50) {
			magicItem(loot,scenario);
		}
	}
	else if (type == 4) {
		money = treasureCalc(1000,10000);
		magicItem(loot,scenario);
	}
	loot.money = money;
	return loot;
}

function treasureCalc(min, max) {
	var money = rollDie(max);
	while (money < min) {
		money = rollDie(max);
	}
	return money;
}

function magicItem(loot,scenario) {
	loot.magicItem = new MagicItem();
	var die = 15;//rollDie(16);
	if (die <= 2 ) {
		table1A(loot.magicItem);
	} else if (die > 2 && die <= 5 ) {
		table2A(loot.magicItem);
	} else if (die > 5 && die <= 7 ) {
		table3A(loot.magicItem,scenario);
	} else if (die > 7 && die <= 11 ) {
		table4(loot.magicItem);
	} else if (die > 11 && die <= 14 ) {
		table5(loot.magicItem);
	} else if (die > 14 && die <= 16 ) {
		table6(loot.magicItem);
	// } else if (die > 16 && die <= 18 ) {
	// 	table7A(loot.magicItem);
	// } else if (die == 19 ) {
	// 	table8(loot.magicItem);
	// } else if (die == 20 ) {
	// 	table9A(loot.magicItem);
	}
}

function rollDie(sides)
  {
    if(!sides) sides = 6;
    with(Math) return 1 + floor(random() * sides);
  }

  function rollDice(number, sides)
  {
    var total = 0;
    while(number-- > 0) total += rollDie(sides);
    return total;
  }



