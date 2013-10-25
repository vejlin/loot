//Miscellaneous magic Type
//d20
function table4(magicItem) {
	var die = rollDie(20);
	if (die == 1) {
		magicItem.type = 'Pendant';
	} else if (die == 2) {
		magicItem.type = 'Figurine';
	} else if (die == 3) {
		magicItem.type = 'Cloak';
	} else if (die == 4) {
		magicItem.type = 'Boots';
	} else if (die == 5) {
		magicItem.type = 'Shirt';
	} else if (die == 6) {
		magicItem.type = 'Hat';
	} else if (die == 7) {
		magicItem.type = 'Musical Instrument';
	} else if (die == 8) {
		magicItem.type = 'Artwork';
	} else if (die == 9) {
		magicItem.type = 'Dice';
	} else if (die == 10) {
		magicItem.type = 'Scabbard';
	} else if (die == 11) {
		magicItem.type = 'Card deck';
	} else if (die == 12) {
		magicItem.type = 'Key';
	} else if (die == 13) {
		magicItem.type = 'Whistle';
	} else if (die == 14) {
		magicItem.type = 'Horn';
	} else if (die == 15) {
		magicItem.type = 'Coin';
	} else if (die == 16) {
		magicItem.type = 'Cup';
	} else if (die == 17) {
		magicItem.type = 'Tool';
	} else if (die == 18) {
		magicItem.type = 'Container';
	} else if (die == 19) {
		magicItem.type = 'Belt';
	} else if (die == 20) {
		magicItem.type = 'Cape';
	}
	table4A(magicItem,20);
}

// Item powers
// d20
function table4A(magicItem,dieNumber) {
	var die = rollDie(dieNumber);
	magicItem.description = '';
	if (die <= 6 ) {
		table4B(magicItem);
	} else if (die > 5 && die <= 13 ) {
		table4D(magicItem);
	} else if (die > 10 && die <= 16 ) {
		magicItem.price = 3500;
		table4E(magicItem, rollDie(2), "Minor");
	} else if (die > 13 && die <= 18 ) {
		magicItem.price = 2000;
		table4E(magicItem, 1, "Major");
	} else if (die == 19 ) {
		magicItem.price = 3000;
		table4E(magicItem, 1, "Major with raise");
	} else if (die == 20 ) {
		table4A(magicItem,19);
		table4A(magicItem,19);
	}
}

// Skill
// d20
function table4B(magicItem) {
	var die = rollDie(20);
	if (die == 1) {
		magicItem.description = 'Boating';
	} else if (die == 2) {
		magicItem.description = 'Climbing';
	} else if (die == 3) {
		magicItem.description = 'Fighting';
	} else if (die == 4) {
		magicItem.description = 'Gambling';
	} else if (die == 5) {
		magicItem.description = 'Spirit rolls against fear';
	} else if (die == 6) {
		magicItem.description = 'Healing';
	} else if (die == 7) {
		magicItem.description = 'Intimidation';
	} else if (die == 8) {
		magicItem.description = 'Investigation';
	} else if (die == 9) {
		magicItem.description = 'Knowledge';
	} else if (die == 10) {
		magicItem.description = 'Lockpicking';
	} else if (die == 11) {
		magicItem.description = 'Notice';
	} else if (die == 12) {
		magicItem.description = 'Persuasion';
	} else if (die == 13) {
		magicItem.description = 'Riding';
	} else if (die == 14) {
		magicItem.description = 'Shooting';
	} else if (die == 15) {
		magicItem.description = 'Stealth';
	} else if (die == 16) {
		magicItem.description = 'Streetwise';
	} else if (die == 17) {
		magicItem.description = 'Swimming';
	} else if (die == 18) {
		magicItem.description = 'Taunt';
	} else if (die == 19) {
		magicItem.description = 'Throwing';
	} else if (die == 20) {
		magicItem.description = 'Tracking';
	}
	table4C(magicItem);
}


//Table 4C: Skill bonus
//d20
function table4C(magicItem) {
	var die = rollDie(20);
	if (die <= 12) {
		magicItem.price += 1000;
		magicItem.description += ' +1 bonus';
	} else if (die > 12 && die <= 17 ) {
		magicItem.price += 2000;
		magicItem.description += ' +2 bonus';
	} else if (die > 17 ) {
		magicItem.price += 3000;
		magicItem.description += ' +3 bonus';
	}
}

//Table 4D: Edges
//d20 Cost Type
function table4D(magicItem) {
	var edgeValue = rollDie(3);
	magicItem.price = 0;
	magicItem.description = '';
	while (edgeValue > 0) {
		var die = rollDie(20);
		var edge = '';
		var price = 0;
		var slot = 1;
		if (die == 1) {
			price += 2000;
			edge = ' Ambidextrous ';
		} else if (die > 1 && die <= 3 ) {
			var text = " Arcane Resistance ";
			if (magicItem.description.indexOf(text) == -1) {
				price += 2000;
				edge = text;
			} else {
				price += 2000;
				edge = ' Improved ';
			}
		} else if (die > 3 && die <= 5 ) {
			price += 2000;
			edge = ' Charismatic ';
		} else if (die == 6 ) {
			price += 4000;
			edge = ' Combat Reflexes ';
		} else if (die == 7 ) {
			var text = " Command ";
			if (magicItem.description.indexOf(text) == -1) {
				price += 2000;
				edge = text;
			} else {
				var extra = rollDie(4);
				if (extra == 1) {
					price += 6000;
					edge = " Fervor ";
				} else if (extra == 2) {
					price += 4000;
					edge = " Hold the Line ";
				} else if (extra == 3) {
					price += 4000;
					edge = " Inspire ";
				} else if (extra == 4) {
					price += 4000;
					edge = " Natural Leader ";
				}
			}
			price += 2000;
			edge = ' Command ';
		} else if (die == 8 ) {
			price += 2000;
			edge = ' Danger Sense ';
		} else if (die == 9 ) {
			price += 2000;
			edge = ' Fast Healer ';
		} else if (die == 10 ) {
			var text = " Level Headed ";
			if (magicItem.description.indexOf(text) == -1) {
				price += 2000;
				edge = text;
			} else {
				price += 2000;
				edge = ' Improved ';
			}
		} else if (die > 10 && die <= 12 ) {
			var text = " Luck ";
			if (magicItem.description.indexOf(text) == -1) {
				price += 2000;
				edge = text;
			} else {
				price += 2000;
				edge = ' Improved ';
			}
		} else if (die == 13 ) {
			price += 2000;
			edge = ' Fleet Footed ';
		} else if (die == 14 ) {
			var text = " Hard to Kill ";
			if (magicItem.description.indexOf(text) == -1) {
				price += 2000;
				edge = text;
			} else {
				price += 2000;
				edge = ' Improved ';
			}
		} else if (die == 15 ) {
			price += 4000;
			edge = ' Marksman ';
		} else if (die > 15 && die <= 17 ) {
			price += 2000;
			edge = ' Nerves of Steel ';
		} else if (die == 18 ) {
			price += 2000;
			edge = ' Quick ';
		} else if (die == 19 ) {
			price += 2000;
			edge = ' Steady Hands ';
		} else if (die == 20) {
			price += 2000;
			edge = ' Strong Willed ';
		}
		edgeValue = edgeValue - slot;
		magicItem.description += edge;		
		magicItem.price += price;
	}
}

// //Table 4E: Powers
// //Powers are rolled or chosen from Table 4E. Powers which can affect multiple aspects (such as boost trait) must have a single, fixed aspect chosen during creation. This cannot be changed. Unless otherwise stated, magic items that cast powers have an arcane skill of d8 and 10 Power Points.
function table4E(magicItem, powerNumber, typeOfPower) {
	while(powerNumber > 0) {
		var die = rollDice(2,20);
		if (die <= 5) {
			magicItem.description += ' ' + typeOfPower + ' Armor';
		} else if (die == 6 ) {
			magicItem.description += ' ' + typeOfPower + ' Barrier';
		} else if (die == 7 ) {
			magicItem.description += ' ' + typeOfPower + ' Beast Friend';
		} else if (die > 7 && die <= 10 ) {
			magicItem.description += ' ' + typeOfPower + ' Boost/Lower Trait(*)';
		} else if (die == 11 ) {
			magicItem.description += ' ' + typeOfPower + ' Burrow';
		} else if (die > 11 && die <= 13 ) {
			magicItem.description += ' ' + typeOfPower + ' Deflection';
		} else if (die == 14 ) {
			magicItem.description += ' ' + typeOfPower + ' Detect/Conceal Arcana';
		} else if (die == 15 ) {
			magicItem.description += ' ' + typeOfPower + ' Dispel';
		} else if (die > 15 && die <= 17 ) {
			magicItem.description += ' ' + typeOfPower + ' Elemental Manipulation';
		} else if (die == 18 ) {
			magicItem.description += ' ' + typeOfPower + ' Entangle';
		} else if (die > 18 && die <= 20 ) {
			magicItem.description += ' ' + typeOfPower + ' Environmental Protection';
		} else if (die == 21 ) {
			magicItem.description += ' ' + typeOfPower + ' Fear';
		} else if (die > 21 && die <= 23 ) {
			magicItem.description += ' ' + typeOfPower + ' Fly';
		} else if (die == 24 ) {
			magicItem.description += ' ' + typeOfPower + ' Invisibility';
		} else if (die > 24 && die <= 27 ) {
			magicItem.description += ' ' + typeOfPower + ' Light';
		} else if (die == 28 ) {
			magicItem.description += ' ' + typeOfPower + ' Obscure';
		} else if (die == 29 ) {
			magicItem.description += ' ' + typeOfPower + ' Puppet';
		} else if (die == 30 ) {
			magicItem.description += ' ' + typeOfPower + ' Quickness';
		} else if (die > 30 && die <= 32 ) {
			magicItem.description += ' ' + typeOfPower + ' Shape Change';
		} else if (die == 33 ) {
			magicItem.description += ' ' + typeOfPower + ' Smite';
		} else if (die == 34 ) {
			magicItem.description += ' ' + typeOfPower + ' Speak Language';
		} else if (die > 34 && die <= 36 ) {
			magicItem.description += ' ' + typeOfPower + ' Speed';
		} else if (die == 37 ) {
			magicItem.description += ' ' + typeOfPower + ' Telekinesis';
		} else if (die > 37 && die <= 39 ) {
			magicItem.description += ' ' + typeOfPower + ' Teleport';
		} else if (die == 40 ) {
			magicItem.description += ' ' + typeOfPower + ' Zombie';
		}
		powerNumber--;
	}
}