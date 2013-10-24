//Melee Weapon Type
//2d20
function table3A(magicItem,scenario) {
	if (scenario == 1) {
		table3A_SF(magicItem);
	} else {
		table3A_BF(magicItem);
	}
}
function table3A_SF(magicItem) {
	var die = rollDie(20);
	if (die <= 3) {
		magicItem.type = 'Axe, throwing';
		magicItem.price = 75;
	} else if (die > 3 && die <= 8) {
		magicItem.type = 'Bow';
		magicItem.price = 250;
	} else if (die > 8 && die <= 10) {
		magicItem.type = 'Crossbow';
		magicItem.price = 500;
	} else if (die > 10 && die <= 12) {
		magicItem.type = 'English Long Bow';
		magicItem.price = 200;
	} else if (die > 12 && die <= 15) {
		magicItem.type = 'Knife/Dagger';
		magicItem.price = 25;
	} else if (die > 15 && die <= 17) {
		magicItem.type = 'Sling';
		magicItem.price = 10;
	} else if (die > 17) {
		magicItem.type = 'Spear/Javelin';
		magicItem.price = 250;
	}
	table3B(magicItem,20);
}
function table3A_BF(magicItem) {
	var die = rollDie(20);
	if (die <= 2) {
		magicItem.type = 'Axe, throwing';
		magicItem.price = 75;
	} else if (die > 2 && die <= 4) {
		magicItem.type = 'Bow';
		magicItem.price = 250;
	} else if (die > 4 && die <= 7) {
		magicItem.type = 'Crossbow';
		magicItem.price = 500;
	} else if (die == 8) {
		magicItem.type = 'English Long Bow';
		magicItem.price = 200;
	} else if (die > 8 && die <= 10) {
		magicItem.type = 'Knife/Dagger';
		magicItem.price = 25;
	} else if (die == 11) {
		magicItem.type = 'Sling';
		magicItem.price = 10;
	} else if (die == 12) {
		magicItem.type = 'Spear/Javelin';
		magicItem.price = 250;
	} else if (die > 12 && die <= 14) {
		magicItem.type = 'Musket';
		magicItem.price = 300;
	} else if (die > 14 && die <= 16) {
		magicItem.type = 'Blunderbuss';
		magicItem.price = 300;
	} else if (die > 16) {
		magicItem.type = 'Flintlock Pistol';
		magicItem.price = 150;
	}
	table3B(magicItem,20);
}

// Damage Bonus
// d20
function table3B(magicItem,dieNumber) {
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
		table3C(magicItem);
	} else if (die > 16 && die <= 18 ) {
		magicItem.description = "+2 damage";
		magicItem.price += 2000;
		table3C(magicItem);
	} else if (die == 19 ) {
		magicItem.description = "+3 damage";
		magicItem.price += 3000;
		table3C(magicItem);
	} else if (die == 20 ) {
		table3B(magicItem,19);
		table3D(magicItem,20);
	}
}

// Fighting Bonus
// d20
function table3C(magicItem) {
	var die = rollDie(20);
	if (die <= 8 ) {
		magicItem.description += " +1 Shooting/Throwing";
		magicItem.price += 1000;
	} else if (die > 8 && die <= 14 ) {
		magicItem.description += " +2 Shooting/Throwing";
		magicItem.price += 2000;
	} else if (die > 14 && die <= 18 ) {
		magicItem.description += " +3 Shooting/Throwing";
		magicItem.price += 3000;
	} else if (die > 18) {
		magicItem.description += " Increased Range";
		magicItem.price += 3000;
	}
}


//Table 2D: Special Weapons
//d20
function table3D(magicItem, dieNumber) {
	var die = rollDie(dieNumber);
	if (die <= 13) {
		table3E(magicItem);
	} else if (die > 13 && die <= 16 ) {
		magicItem.price += 3500;
		table3F(magicItem, rollDie(2), "Minor");
	} else if (die > 16 && die <= 18 ) {
		magicItem.price += 2000;
		table3F(magicItem, 1, "Major");
	} else if (die == 19 ) {
		magicItem.price += 3000;
		table3F(magicItem, 1, "Major with raise");
	} else if (die == 20 ) {
		table3D(magicItem, 19);
		table3D(magicItem, 19);
	}
}

//Table 2E: Edges
//d20 Cost Type
function table3E(magicItem) {
	var edgeValue = rollDie(3);
	while (edgeValue > 0) {
		var die = rollDie(20);
		var edge = '';
		var price = 0;
		var slot = 1;
		if (die <= 2) {
			price += 2000;
			edge = ' Fast Load/Increased Range ';
		} else if (die > 2 && die <= 7 ) {
			price += 2000;
			edge = ' Increased Range ';
		} else if (die > 7 && die <= 12 ) {
			price += 4000;
			edge = ' Marksman ';
		} else if (die > 12 && die <= 15 ) {
			price += 2000;
			edge = ' Quick Draw ';
		} else if (die > 15) {
			price += 2000;
			edge = ' Steady Hands ';
		}
		edgeValue = edgeValue - slot;
		magicItem.description += edge;		
		magicItem.price += price;
	}
}

// //Table 2F: Powers
// //Powers are rolled or chosen from Table 1I. Powers which can affect multiple aspects (such as boost trait) must have a single, fixed aspect chosen during creation. This cannot be changed. Unless otherwise stated, magic items that cast powers have an arcane skill of d8 and 10 Power Points.
function table3F(magicItem, powerNumber, typeOfPower) {
	while(powerNumber > 0) {
		var die = rollDie(20);
		if (die <= 2) {
			magicItem.description += ' ' + typeOfPower + ' Blast';
		} else if (die > 2 && die <= 6 ) {
			magicItem.description += ' ' + typeOfPower + ' Bolt';
		} else if (die > 6 && die <= 8 ) {
			magicItem.description += ' ' + typeOfPower + ' Boost Trait(Agility)';
		} else if (die > 8 && die <= 11 ) {
			magicItem.description += ' ' + typeOfPower + ' Entangle';
		} else if (die > 11 && die <= 13 ) {
			magicItem.description += ' ' + typeOfPower + ' Obscure';
		} else if (die > 13 && die <= 15 ) {
			magicItem.description += ' ' + typeOfPower + ' Quickness';
		} else if (die > 15 && die <= 18 ) {
			magicItem.description += ' ' + typeOfPower + ' Smite (fire trapping)';
		} else if (die > 18) {
			magicItem.description += ' ' + typeOfPower + ' Stun';
		}
		powerNumber--;
	}
}

// //Table 2G: Named Items
function table3G(magicItem) {
	var die = rollDie(20);
	if (die <= 2) {
		magicItem.price = 10500;
		magicItem.type = 'Crossbow';
		magicItem.description = "Crossbow of Many Bolts (p56)";
	} else if (die > 2 && die <= 5 ) {
		magicItem.price = 2925;
		magicItem.type = 'Dagger';
		magicItem.description = 'Dagger of Pinning (p56)';		
	} else if (die > 5 && die <= 7 ) {
		magicItem.price = 2075;
		magicItem.type = 'Axe, Throwing';
		magicItem.description = 'Dwarven Throwing Axe (p56)';		
	} else if (die > 7 && die <= 10 ) {
		magicItem.price = 7200;
		magicItem.type = 'Bow';
		magicItem.description = "Elf Bow (p56)";		
	} else if (die > 10 && die <= 13 ) {
		magicItem.price = 5250;
		magicItem.type = 'Bow';
		magicItem.description = 'Fire Bow (p56)';		
	} else if (die > 13 && die <= 17 ) {
		magicItem.price = 550;
		magicItem.type = 'Javelin';
		magicItem.description = 'Javelin of the Gods (p54)';		
	} else if (die > 17 && die <= 19) {
		magicItem.price = 3250;
		magicItem.type = 'Bow';
		magicItem.description = "Nomad's Bow (p57)";		
	} else if (die == 20) {
		magicItem.price = 9250;
		magicItem.type = 'Bow';
		magicItem.description = "Target Seeker (p57)";				
	}
}