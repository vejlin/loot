//Loot object for displaying the end result
function Loot () {
    this.money = 0;
    this.magicItem = null;
    this.getInfo = function getInfo() {
    	if (this.magicItem !== null) {
        	return 'Treasure: ' + this.money + ' MagicItem: ' + this.magicItem.getInfo();
        } else {
        	return 'Treasure: ' + this.money;
        }

    };
}

//Magic Item object
function MagicItem () {
    this.price = 0;
    this.type = '';
    this.description = '';
    this.getInfo = function getInfo() {
        return 'Price: ' + this.price + ' Type: ' + this.type + ' Description: ' + this.description;
    };
}

//Depending on type how much loot is given
//1 = Meager
//2 = Worthwhile
//3 = Rich
//4 = Treasure trove
function treasure(type) {
	var loot = new Loot();
	var treasureDie = rollDie(10);
	var magicItemPercent = rollDie(100);
	var money = 0;
	if (type == 1) {
		money = 10 * treasureDie;
		if (magicItemPercent == 1) {
			magicItem(loot);
		}
	}
	else if (type == 2) {
		money = 100 * treasureDie;
		if (magicItemPercent <= 25) {
			magicItem(loot);
		}
	}
	else if (type == 3) {
		money = 500 * treasureDie;
		if (magicItemPercent <= 50) {
			magicItem(loot);
		}
	}
	else if (type == 4) {
		money = 1000 * treasureDie;
		magicItem(loot);
	}
	loot.money = money;
	return loot;
}

function magicItem(loot) {
	loot.magicItem = new MagicItem();
	var die = rollDie(2);
	if (die <= 2 ) {
		table1A(loot.magicItem);
	// } else if (die > 2 && die <= 5 ) {
	// 	table2A(magicItem);
	// } else if (die > 6 && die <= 7 ) {
	// 	table3A(magicItem);
	// } else if (die > 8 && die <= 11 ) {
	// 	table4A(magicItem);
	// } else if (die > 12 && die <= 14 ) {
	// 	table5(magicItem);
	// } else if (die > 15 && die <= 16 ) {
	// 	table6(magicItem);
	// } else if (die > 16 && die <= 18 ) {
	// 	table7A(magicItem);
	// } else if (die == 19 ) {
	// 	table8(magicItem);
	// } else if (die == 20 ) {
	// 	table9A(magicItem);
	}
}

function table1A(magicItem) {
	var die = rollDie(20);
	if (die <= 15) {
		magicItem.type = 'Armor';
		table1B(magicItem);
	} else if (die > 15 && die <= 19 ) {
		magicItem.type = 'Shield';
		table1D(magicItem);
	} else if (die == 20 ) {
		table1J(magicItem);
	}
}
// //Table 1B: Armor
// //Roll a d20 to determine the exact armor type, then roll on Table 1C to determine the specific bonus.
function table1B(magicItem) {
	var die = rollDie(20);
	if (die <= 7 ) {
		magicItem.price = 50;
		magicItem.subType = 'Leather';
	} else if (die > 7 && die <= 12 ) {
		magicItem.price = 300;
		magicItem.subType = 'Chain hauberk';
	} else if (die > 12 && die <= 15 ) {
		magicItem.price = 400;
		magicItem.subType = 'Plate corselet';
	} else if (die == 16 ) {
		magicItem.price = 200;
		magicItem.subType = 'Plate arms (vambrace)';
	} else if (die == 17 ) {
		magicItem.price = 300;
		magicItem.subType = 'Plate leggings (greaves)';
	} else if (die > 17 && die <= 19 ) {
		magicItem.price = 75;
		magicItem.type = 'Helm'
		magicItem.subType = 'Pot Helm';
	} else if (die == 20 ) {
		magicItem.price = 150;
		magicItem.type = 'Helm';
		magicItem.subType = 'Steel Helmet';
	}
	table1C(magicItem,20);
}

function table1C(magicItem, dieNumber) {
	var die = rollDie(dieNumber);
	if (die <= 10) {
		magicItem.price += 1000;
		magicItem.description = '+1 Toughness';
	} else if (die > 10 && die <= 16 ) {
		magicItem.price += 2000;
		magicItem.description = '+2 Toughness';
	} else if (die > 16 && die <= 19 ) {
		magicItem.price += 3000;
		magicItem.description = '+3 Toughness';
	} else if (die == 20 ) {
		table1C(magicItem, 19);
		// table1F(magicItem);
	}
}

//Table 1D: Shield Type
function table1D(magicItem) {
	var die = rollDie(20);
	if (die <= 7 ) {
		magicItem.price = 25;
		magicItem.subType = 'Small';
	} else if (die > 7 && die <= 15 ) {
		magicItem.price = 50;
		magicItem.subType = 'Medium';
	} else if (die > 15) {
		magicItem.price = 200;
		magicItem.subType = 'Large';
	}
	table1E(magicItem,20);
}

//Table 1E: Shield Bonus
function table1E(magicItem, dieNumber) {
	var die = rollDie(dieNumber);
	if (die <= 10) {
		magicItem.price += 6000;
		magicItem.description = '+1 Parry (Block)';
	} else if (die > 10 && die <= 19 ) {
		magicItem.price += 8000;
		magicItem.description = '+2 Parry (Imp Block)';
	} else if (die == 20 ) {
		table1C(magicItem, 19);
		table1F(magicItem, 20);
	}
}

// //Table 1F: Special Armor & Shields
// //Roll on the table below to determine the specific powers. Prices for skills are per bonus. If a power has no extra effect on a raise, treat rolls of 19 as rolls of 17–18.
// //* Plus $1000 per spell Rank.
// //** Per Power Point of the power invested, plus $1000 per spell Rank
function table1F(magicItem, dieNumber) {
	var die = rollDie(dieNumber);
	if (die <= 9) {
		magicItem.price += 1000;
		//table1G(magicItem);
	} else if (die > 9 && die <= 13 ) {
		//table1H(magicItem, rollDie(3));
	} else if (die > 13 && die <= 16 ) {
		magicItem.price += 3500;
		//table1I(magicItem, rollDie(2), "Minor");
	} else if (die > 16 && die <= 18 ) {
		magicItem.price += 2000;
		//table1I(magicItem, 1, "Major");
	} else if (die == 19 ) {
		magicItem.price += 3000;
		//table1I(magicItem, 1, "Major with raise");
	} else if (die == 20 ) {
		//table1F(magicItem, 19);
		//table1F(magicItem, 19);
	}
}

// //Table 1J: Named Items
function table1J(magicItem) {
	var die = rollDie(20);
	if (die <= 2) {
		magicItem.price = 6550;
		magicItem.type = 'Armor';
		magicItem.subType = 'Leather';
		magicItem.description = "Assassin's Armor (p51)";
	} else if (die > 2 && die <= 7 ) {
		magicItem.price = 2400;
		magicItem.type = 'Armor';
		magicItem.subType = 'Plate corselet';
		magicItem.description = 'Breastplate of Heroes (p51)';		
	} else if (die > 7 && die <= 9 ) {
		magicItem.price = 5150;
		magicItem.type = 'Shield';
		magicItem.subType = 'Medium';
		magicItem.description = 'Dragon Shield (p51)';		
	} else if (die > 9 && die <= 12 ) {
		magicItem.price = 4300;
		magicItem.type = 'Armor';
		magicItem.subType = 'Chain hauberk';
		magicItem.description = "Dragon Slayer's Armor (p51)";		
	} else if (die > 12 && die <= 15 ) {
		magicItem.price = 5300;
		magicItem.type = 'Armor';
		magicItem.subType = 'Chain hauberk';
		magicItem.description = 'Hauberk of the Mage Slayer (p51)';		
	} else if (die > 15 && die <= 17 ) {
		magicItem.price = 4650;
		magicItem.type = 'Helm';
		magicItem.subType = 'Steel helmet';
		magicItem.description = 'Helm of the General (p51)';		
	} else if (die > 17) {
		magicItem.price = 2050;
		magicItem.type = 'Armor';
		magicItem.subType = 'Leather';
		magicItem.description = "Thief's Jerkin (p51)";		
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


  //Side 48 Fantasy Companion



// //Table 1F: Special Armor & Shields
// //Roll on the table below to determine the specific powers. Prices for skills are per bonus. If a power has no extra effect on a raise, treat rolls of 19 as rolls of 17–18.
// //d20 Cost Type
// 1 $1000 + Table1G
// 2 $1000 + Table1G
// 3 $1000 + Table1G
// 4 $1000 + Table1G
// 5 $1000 + Table1G
// 6 $1000 + Table1G
// 7 $1000 + Table1G
// 8 $1000 + Table1G
// 9 $1000 + Table1G
// 10 Var 1d3 x Table1H
// 11 Var 1d3 x Table1H
// 12 Var 1d3 x Table1H
// 13 Var 1d3 x Table1H
// 14 +$3500 Minor Artifact: 1d2 powers (Table 1I)*
// 15 +$3500 Minor Artifact: 1d2 powers (Table 1I)*
// 16 +$3500 Minor Artifact: 1d2 powers (Table 1I)*
// 17 +$2000 Major Artifact: 1 power (Table 1I)**
// 18 +$2000 Major Artifact: 1 power (Table 1I)**
// 19 +$3000 Major Artifact: 1 power " with raise" (Table 1I)**
// 20 2x1d19 på Table1F
// //* Plus $1000 per spell Rank.
// //** Per Power Point of the power invested, plus $1000 per spell Rank


// //Table 1G: Skill Bonuses
// //Bonuses can be applied to a single skill (to a maximum of +3) or spread across multiple skills. You can either pick skills or roll randomly on Table 1G, applying a +1 bonus to each skill rolled.

// //random 1-6 hvis 1-3 bliver værdien sat som +X til en skill
// //hvis 4-6 deles værdien op på 2 skills

// //d20 Type
// 1 "Climbing"
// 2 "Climbing"
// 3 "Climbing"
// 4 "Climbing"
// 5 "Spirit rolls against fear"
// 6 "Spirit rolls against fear"
// 7 "Spirit rolls against fear"
// 8 "Intimidation"
// 9 "Intimidation"
// 10 "Intimidation"
// 11 "Persuasion"
// 12 "Persuasion"
// 13 "Persuasion"
// 14 "Stealth"
// 15 "Stealth"
// 16 "Stealth"
// 17 "Stealth"
// 18 "Swimming"
// 19 "Swimming"
// 20 "Swimming"

// //Table 1H: Edges
// //Either choose one or roll on Table 1H. Edge names followed by a (2) are Edges which have an Edge requirement, and so fill two slots. Reroll if you roll one when you have a single Edge slot left. Should you roll such an Edge and already have the requisite version (such as rolling Improved Dodge when you have Dodge), upgrade the Edge at the cost of one additional slot.
// //d20 Cost Type
// 1 "+$2000 Arcane Resistance"
// 2 "+$2000 Arcane Resistance"
// 3 "+$2000 Arcane Resistance"
// 4 "+$2000 Berserk"
// 5 "+$2000 Berserk"
// 6 "+$2000 Charismatic"
// 7 "+$2000 Charismatic"
// 8 "+$2000 Command"
// 9 "+$2000 Danger Sense"
// 10 "+$6000 Dodge"
// 11 "+$6000 Dodge"
// 12 "+$2000 Fleet Footed"
// 13 "+$2000 Fleet Footed"
// 14 "+$2000 Hard to Kill"
// 15 "+$2000 Hard to Kill"
// 16 "+$8000 Harder to Kill (2)"
// 17 "+$4000 Improved Arcane Resistance (2)"
// 18 "+$14000 Improved Dodge (2)"
// 19 "+$2000 Quick"
// 20 "+$2000 Quick"

// //Table 1I: Powers
// //Powers are rolled or chosen from Table 1I. Powers which can affect multiple aspects (such as boost trait) must have a single, fixed aspect chosen during creation. This cannot be changed. Unless otherwise stated, magic items that cast powers have an arcane skill of d8 and 10 Power Points.
// //d20 Type
// 1 "Beast Friend"
// 2 "Boost Trait (usually Smarts or Spirit in a helmet, Agility, Strength, or Vigor in armor)"
// 3 "Boost Trait (usually Smarts or Spirit in a helmet, Agility, Strength, or Vigor in armor)"
// 4 "Burrow"
// 5 "Burrow"
// 6 "Burst"
// 7 "Deflection"
// 8 "Environmental Protection (one element)"
// 9 "Environmental Protection (one element)"
// 10 "Environmental Protection (one element)"
// 11 "Fear"
// 12 "Fly"
// 13 "Invisibility"
// 14 "Invisibility"
// 15 "Quickness"
// 16 "Quickness"
// 17 "Shape Change"
// 18 "Speed"
// 19 "Speed"
// 20 "Teleport"

