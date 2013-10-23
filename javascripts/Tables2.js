//Melee Weapon Type
//2d20
function table2A(magicItem) {
	var die = rollDice(2,20);
	if (die <= 4) {
		magicItem.type = 'Axe';
		magicItem.price = 200;
	} else if (die > 4 && die <= 6) {
		magicItem.type = 'Battle Axe';
		magicItem.price = 300;
	} else if (die > 6 && die <= 10) {
		magicItem.type = 'Dagger';
		magicItem.price = 25;
	} else if (die == 11) {
		magicItem.type = 'Flail';
		magicItem.price = 200;
	} else if (die > 11 && die <= 13) {
		magicItem.type = 'Great Axe';
		magicItem.price = 500;
	} else if (die > 13 && die <= 15) {
		magicItem.type = 'Great sword';
		magicItem.price = 400;
	} else if (die == 16) {
		magicItem.type = 'Halberd';
		magicItem.price = 250;
	} else if (die == 17) {
		magicItem.type = 'Katana';
		magicItem.price = 1000;
	} else if (die > 17 && die <= 19) {
		magicItem.type = 'Long sword';
		magicItem.price = 300;
	} else if (die == 20) {
		table2G(magicItem);
	} else if (die > 20 && die <= 23) {
		magicItem.type = 'Long Sword';
		magicItem.price = 300;
	} else if (die == 24 ) {
		magicItem.type = 'Lance';
		magicItem.price = 500;
	} else if (die == 25 ) {
		magicItem.type = 'Maul';
		magicItem.price = 400;
	} else if (die > 25 && die <= 27) {
		magicItem.type = 'Pike';
		magicItem.price = 40;
	} else if (die > 27 && die <= 29) {
		magicItem.type = 'Rapier';
		magicItem.price = 150;
	} else if (die == 30 ) {
		magicItem.type = 'Saber';
		magicItem.price = 200;
	} else if (die > 30 && die <= 34) {
		magicItem.type = 'Short sword';
		magicItem.price = 200;
	} else if (die > 34 && die <= 36) {
		magicItem.type = 'Spear';
		magicItem.price = 250;
	} else if (die > 36 && die <= 39) {
		magicItem.type = 'Staff';
		magicItem.price = 10;
	} else if (die == 40 ) {
		magicItem.type = 'Warhammer';
		magicItem.price = 250;
	}
	table2B(magicItem,20);
}

// Damage Bonus
// d20
function table2B(magicItem,dieNumber) {
	var die = rollDie(dieNumber);
	if (die <= 5 ) {
		magicItem.description = "+1 damage";
		magicItem.price += 1000;
	} else if (die > 5 && die <= 10 ) {
		magicItem.description = "+2 damage";
		magicItem.price += 2000;
	} else if (die > 10 && die <= 13 ) {
		magicItem.description = "+3 damage";
		magicItem.price += 3000;
	} else if (die > 13 && die <= 16 ) {
		magicItem.description = "+1 damage";
		magicItem.price += 1000;
		table2C(magicItem);
	} else if (die > 16 && die <= 18 ) {
		magicItem.description = "+2 damage";
		magicItem.price += 2000;
		table2C(magicItem);
	} else if (die == 19 ) {
		magicItem.description = "+3 damage";
		magicItem.price += 3000;
		table2C(magicItem);
	} else if (die == 20 ) {
		table2B(magicItem,19);
		table2D(magicItem,20);
	}
}

// Fighting Bonus
// d20
function table2C(magicItem) {
	var die = rollDie(20);
	if (die <= 10 ) {
		magicItem.description += " +1 Fighting";
		magicItem.price += 1000;
	} else if (die > 10 && die <= 16 ) {
		magicItem.description += " +2 Fighting";
		magicItem.price += 2000;
	} else if (die > 16) {
		magicItem.description += " +3 Fighting";
		magicItem.price += 3000;
	}
}


//Table 2D: Special Weapons
//d20
function table2D(magicItem, dieNumber) {
	var die = rollDie(dieNumber);
	if (die <= 13) {
		table2E(magicItem);
	} else if (die > 13 && die <= 16 ) {
		magicItem.price += 3500;
		table2F(magicItem, rollDie(2), "Minor");
	} else if (die > 16 && die <= 18 ) {
		magicItem.price += 2000;
		table2F(magicItem, 1, "Major");
	} else if (die == 19 ) {
		magicItem.price += 3000;
		table2F(magicItem, 1, "Major with raise");
	} else if (die == 20 ) {
		table2D(magicItem, 19);
		table2D(magicItem, 19);
	}
}

//Table 2E: Edges
//d20 Cost Type
function table2E(magicItem) {
	var edgeValue = rollDie(3);
	while (edgeValue != 0) {
		var die = rollDie(20);
		var edge = '';
		var price = 0;
		var slot = 1;
		if (die <= 2) {
			price += 2000;
			edge = ' Arcane Resistance ';
		} else if (die == 3 ) {
			price += 2000;
			edge = ' Berserk ';
		} else if (die > 3 && die <= 6 ) {
			price += 4000;
			edge = ' Block ';
		} else if (die == 7 ) {
			price += 2000;
			edge = ' Command ';
		} else if (die > 7 && die <= 9 ) {
			price += 2000;
			edge = ' First Strike ';
		} else if (die == 10 ) {
			price += 4000;
			edge = ' Frenzy ';
		} else if (die > 10 && die <= 12 ) {
			price += 6000;
			edge = ' Giant Killer ';
		} else if (die == 13 ) {
			price += 10000;
			edge = ' Improved Block ';
			slot = 2;
		} else if (die == 14 ) {
			price += 2000;
			edge = ' Improved First Strike ';
			slot = 2;
		} else if (die == 15 ) {
			price += 2000;
			edge = ' Improved Frenzy ';
			slot = 2;
		} else if (die == 16 ) {
			price += 2000;
			edge = ' Improved Sweep ';
			slot = 2;
		} else if (die > 16 && die <= 18 ) {
			price += 2000;
			edge = ' Quick Draw ';
		} else if (die > 18 ) {
			price += 2000;
			edge = ' Sweep ';			
		}
		if (magicItem.description.indexOf(edge) == -1) {
			edgeValue = edgeValue - slot;
			magicItem.description += edge;		
			magicItem.price += price;
		}
	}
}

// //Table 2F: Powers
// //Powers are rolled or chosen from Table 1I. Powers which can affect multiple aspects (such as boost trait) must have a single, fixed aspect chosen during creation. This cannot be changed. Unless otherwise stated, magic items that cast powers have an arcane skill of d8 and 10 Power Points.
function table2F(magicItem, powerNumber, typeOfPower) {
	while(powerNumber != 0) {
		var die = rollDie(20);
		if (die <= 3) {
			magicItem.description += ' ' + typeOfPower + ' Armor';
		} else if (die > 3 && die <= 7 ) {
			if (rollDie(2) == 1) {
				magicItem.description += ' ' + typeOfPower + ' Boost Trait(Strength)';
			} else {
				magicItem.description += ' ' + typeOfPower + ' Boost Trait(Vigor)';
			}
		} else if (die > 7 && die <= 9 ) {
			magicItem.description += ' ' + typeOfPower + ' Burst';
		} else if (die > 9 && die <= 11 ) {
			magicItem.description += ' ' + typeOfPower + ' Fear';
		} else if (die > 11 && die <= 15 ) {
			magicItem.description += ' ' + typeOfPower + ' Light';
		} else if (die > 15 && die <= 17 ) {
			magicItem.description += ' ' + typeOfPower + ' Quickness';
		} else if (die > 17) {
			magicItem.description += ' ' + typeOfPower + ' Smite (fire trapping)';
		}
		powerNumber--;
	}
}

// //Table 2G: Named Items
function table2G(magicItem) {
	var die = rollDie(20);
	if (die <= 2) {
		magicItem.price = 7500;
		magicItem.type = 'Axe';
		magicItem.description = "Axe of the Berserker (p53)";
	} else if (die > 2 && die <= 5 ) {
		magicItem.price = 13150;
		magicItem.type = 'Rapier';
		magicItem.description = 'Duelists blade (p53)';		
	} else if (die > 5 && die <= 7 ) {
		magicItem.price = 9025;
		magicItem.type = 'Dagger';
		magicItem.description = 'Fearmonger (p51)';		
	} else if (die > 7 && die <= 10 ) {
		magicItem.price = 5500;
		magicItem.type = 'Great Axe';
		magicItem.description = "Giant slayer (p54)";		
	} else if (die > 10 && die <= 13 ) {
		magicItem.price = 1900;
		magicItem.type = 'Great sword';
		magicItem.description = 'Head taker (p54)';		
	} else if (die > 13 && die <= 17 ) {
		magicItem.price = 3300;
		magicItem.type = 'Long sword';
		magicItem.description = 'Orcbane (p54)';		
	} else if (die > 17) {
		magicItem.price = 14250;
		magicItem.type = 'Spear';
		magicItem.description = "Pathblocker (p51)";		
	}
}