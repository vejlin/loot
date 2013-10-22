
function table2A(magicItem) {
	var die = rollDice(2,20);
	if (die <= 4) {
		magicItem.type = 'Axe';
		magicItem.price = 200;
	} else if (die > 4 && die <= 6) {
	} else if (die > 6 && die <= 10) {
	} else if (die == 11) {
	} else if (die > 11 && die <= 13) {
	} else if (die > 13 && die <= 15) {
	} else if (die == 16) {
	} else if (die == 17) {
	} else if (die > 17 && die <= 19) {
	} else if (die == 20) {
		magicItem.type = 'Shield';
		table1D(magicItem);
	} else if (die == 20 ) {
		table1J(magicItem);
	}
	// table2B(magicItem);
}
// // //Table 1B: Armor
// // //Roll a d20 to determine the exact armor type, then roll on Table 1C to determine the specific bonus.
// function table1B(magicItem) {
// 	var die = rollDie(20);
// 	if (die <= 7 ) {
// 		magicItem.price = 50;
// 		magicItem.subType = 'Leather';
// 	} else if (die > 7 && die <= 12 ) {
// 		magicItem.price = 300;
// 		magicItem.subType = 'Chain hauberk';
// 	} else if (die > 12 && die <= 15 ) {
// 		magicItem.price = 400;
// 		magicItem.subType = 'Plate corselet';
// 	} else if (die == 16 ) {
// 		magicItem.price = 200;
// 		magicItem.subType = 'Plate arms (vambrace)';
// 	} else if (die == 17 ) {
// 		magicItem.price = 300;
// 		magicItem.subType = 'Plate leggings (greaves)';
// 	} else if (die > 17 && die <= 19 ) {
// 		magicItem.price = 75;
// 		magicItem.type = 'Helm'
// 		magicItem.subType = 'Pot Helm';
// 	} else if (die == 20 ) {
// 		magicItem.price = 150;
// 		magicItem.type = 'Helm';
// 		magicItem.subType = 'Steel Helmet';
// 	}
// 	table1C(magicItem,20);
// }

// function table1C(magicItem, dieNumber) {
// 	var die = rollDie(dieNumber);
// 	if (die <= 10) {
// 		magicItem.price += 1000;
// 		magicItem.description = '+1 Toughness';
// 	} else if (die > 10 && die <= 16 ) {
// 		magicItem.price += 2000;
// 		magicItem.description = '+2 Toughness';
// 	} else if (die > 16 && die <= 19 ) {
// 		magicItem.price += 3000;
// 		magicItem.description = '+3 Toughness';
// 	} else if (die == 20 ) {
// 		table1C(magicItem, 19);
// 		table1F(magicItem, 20);
// 	}
// }

// //Table 1D: Shield Type
// function table1D(magicItem) {
// 	var die = rollDie(20);
// 	if (die <= 7 ) {
// 		magicItem.price = 25;
// 		magicItem.subType = 'Small';
// 	} else if (die > 7 && die <= 15 ) {
// 		magicItem.price = 50;
// 		magicItem.subType = 'Medium';
// 	} else if (die > 15) {
// 		magicItem.price = 200;
// 		magicItem.subType = 'Large';
// 	}
// 	table1E(magicItem,20);
// }

// //Table 1E: Shield Bonus
// function table1E(magicItem, dieNumber) {
// 	var die = rollDie(dieNumber);
// 	if (die <= 10) {
// 		magicItem.price += 6000;
// 		magicItem.description = '+1 Parry (Block)';
// 	} else if (die > 10 && die <= 19 ) {
// 		magicItem.price += 8000;
// 		magicItem.description = '+2 Parry (Imp Block)';
// 	} else if (die == 20 ) {
// 		table1C(magicItem, 19);
// 		table1F(magicItem, 20);
// 	}
// }

// // //Table 1F: Special Armor & Shields
// // //Roll on the table below to determine the specific powers. Prices for skills are per bonus. If a power has no extra effect on a raise, treat rolls of 19 as rolls of 17–18.
// // //* Plus $1000 per spell Rank.
// // //** Per Power Point of the power invested, plus $1000 per spell Rank
// function table1F(magicItem, dieNumber) {
// 	var die = rollDie(dieNumber);
// 	if (die <= 9) {
// 		magicItem.price += 1000;
// 		table1G(magicItem);
// 	} else if (die > 9 && die <= 13 ) {
// 		table1H(magicItem);
// 	} else if (die > 13 && die <= 16 ) {
// 		magicItem.price += 3500;
// 		table1I(magicItem, rollDie(2), "Minor");
// 	} else if (die > 16 && die <= 18 ) {
// 		magicItem.price += 2000;
// 		table1I(magicItem, 1, "Major");
// 	} else if (die == 19 ) {
// 		magicItem.price += 3000;
// 		table1I(magicItem, 1, "Major with raise");
// 	} else if (die == 20 ) {
// 		table1F(magicItem, 19);
// 		table1F(magicItem, 19);
// 	}
// }

// // //Table 1G: Skill Bonuses
// // //Bonuses can be applied to a single skill (to a maximum of +3) or spread across multiple skills. You can either pick skills or roll randomly on Table 1G, applying a +1 bonus to each skill rolled.

// // //random 1-6 hvis 1-3 bliver værdien sat som +X til en skill
// // //hvis 4-6 deles værdien op på 2 skills
// function table1G(magicItem) {
// 	var skillValue = rollDie(6);
// 	while (skillValue != 0) {
// 		var die = rollDie(20);
// 		var skill = '';
// 		if (die <= 4) {
// 			skill = ' Climbing ';
// 		} else if (die > 4 && die <= 7 ) {
// 			skill = ' Spirit rolls against fear ';
// 		} else if (die > 7 && die <= 10 ) {
// 			skill = ' Intimidation ';
// 		} else if (die > 10 && die <= 13 ) {
// 			skill = ' Persuasion ';
// 		} else if (die > 13 && die <= 17 ) {
// 			skill = ' Stealth ';
// 		} else if (die > 17 ) {
// 			skill = ' Swimming ';
// 		}
// 		if (skillValue >= 3) {
// 			magicItem.description += skill + '+' + 3;
// 			skillValue = skillValue - 3;
// 		} else {
// 			magicItem.description += skill + '+' + skillValue;		
// 			skillValue = 0;	
// 		}
// 	}
// }



// // //Table 1H: Edges
// // //Either choose one or roll on Table 1H. Edge names followed by a (2) are Edges which have an Edge requirement, and so fill two slots. Reroll if you roll one when you have a single Edge slot left. Should you roll such an Edge and already have the requisite version (such as rolling Improved Dodge when you have Dodge), upgrade the Edge at the cost of one additional slot.
// // //d20 Cost Type
// function table1H(magicItem) {
// 	var edgeValue = rollDie(3);
// 	while (edgeValue != 0) {
// 		var die = rollDie(20);
// 		var edge = '';
// 		var price = 0;
// 		var slot = 1;
// 		if (die <= 3) {
// 			price += 2000;
// 			edge = ' Arcane Resistance ';
// 		} else if (die > 3 && die <= 5 ) {
// 			price += 2000;
// 			edge = ' Berserk ';
// 		} else if (die > 5 && die <= 7 ) {
// 			price += 2000;
// 			edge = ' Charismatic ';
// 		} else if (die == 8 ) {
// 			price += 2000;
// 			edge = ' Command ';
// 		} else if (die == 9 ) {
// 			price += 2000;
// 			edge = ' Danger Sense ';
// 		} else if (die > 9 && die <= 11 ) {
// 			price += 6000;
// 			edge = ' Dodge ';
// 		} else if (die > 11 && die <= 13 ) {
// 			price += 2000;
// 			edge = ' Fleet Footed ';
// 		} else if (die > 13 && die <= 15 ) {
// 			price += 2000;
// 			edge = ' Hard to Kill ';
// 		} else if (die == 16 && edgeValue >= 2) {
// 			price += 8000;
// 			edge = ' Harder to Kill ';
// 			slot = 2;
// 		} else if (die == 17 && edgeValue >= 2) {
// 			price += 4000;
// 			edge = ' Improved Arcane Resistance ';
// 			slot = 2;
// 		} else if (die == 18 && edgeValue >= 2) {
// 			price += 14000;
// 			edge = ' Improved Dodge ';
// 			slot = 2
// 		} else if (die > 18 ) {
// 			price += 2000;
// 			edge = ' Quick ';			
// 		}
// 		if (magicItem.description.indexOf(edge) == -1) {
// 			edgeValue = edgeValue - slot;
// 			magicItem.description += edge;		
// 			magicItem.price += price;
// 		}
// 	}
// }

// // //Table 1I: Powers
// // //Powers are rolled or chosen from Table 1I. Powers which can affect multiple aspects (such as boost trait) must have a single, fixed aspect chosen during creation. This cannot be changed. Unless otherwise stated, magic items that cast powers have an arcane skill of d8 and 10 Power Points.
// function table1I(magicItem, powerNumber, typeOfPower) {
// 	while(powerNumber != 0) {
// 		var die = rollDie(20);
// 		if (die == 1) {
// 			magicItem.description += ' ' + typeOfPower + ' Beast Friend';
// 		} else if (die > 1 && die <= 3 ) {
// 			if (magicItem.type == 'Helm') {
// 				if (rollDie(2) == 1) {
// 					magicItem.description += ' ' + typeOfPower + ' Boost Trait(Smarts)';
// 				} else {
// 					magicItem.description += ' ' + typeOfPower + ' Boost Trait(Spirit)';
// 				}
// 			} else {
// 				var trait = rollDie(3);
// 				if (trait == 1) {
// 					magicItem.description += ' ' + typeOfPower + ' Boost Trait(Agility)';
// 				} else if (trait == 2) {
// 					magicItem.description += ' ' + typeOfPower + ' Boost Trait(Strength)';
// 				} else {
// 					magicItem.description += ' ' + typeOfPower + ' Boost Trait(Vigor)';
// 				}
// 			}
// 		} else if (die > 3 && die <= 5 ) {
// 			magicItem.description += ' ' + typeOfPower + ' Burrow';
// 		} else if (die == 6) {
// 			magicItem.description += ' ' + typeOfPower + ' Burst';
// 		} else if (die == 7) {
// 			magicItem.description += ' ' + typeOfPower + ' Deflection';
// 		} else if (die > 7 && die <= 10 ) {
// 			magicItem.description += ' ' + typeOfPower + ' Environmental Protection (element)';
// 		} else if (die == 11) {
// 			magicItem.description += ' ' + typeOfPower + ' Fear';
// 		} else if (die == 12) {
// 			magicItem.description += ' ' + typeOfPower + ' Fly';
// 		} else if (die > 12 && die <= 14 ) {
// 			magicItem.description += ' ' + typeOfPower + ' Invisibility';
// 		} else if (die > 14 && die <= 16 ) {
// 			magicItem.description += ' ' + typeOfPower + ' Quickness';
// 		} else if (die == 17) {
// 			magicItem.description += ' ' + typeOfPower + ' Shape Change';
// 		} else if (die > 17 && die <= 19 ) {
// 			magicItem.description += ' ' + typeOfPower + ' Speed';
// 		} else if (die == 20) {
// 			magicItem.description += ' ' + typeOfPower + ' Teleport';
// 		}
// 		powerNumber--;
// 	}
// }


// // //Table 1J: Named Items
// function table1J(magicItem) {
// 	var die = rollDie(20);
// 	if (die <= 2) {
// 		magicItem.price = 6550;
// 		magicItem.type = 'Armor';
// 		magicItem.subType = 'Leather';
// 		magicItem.description = "Assassin's Armor (p51)";
// 	} else if (die > 2 && die <= 7 ) {
// 		magicItem.price = 2400;
// 		magicItem.type = 'Armor';
// 		magicItem.subType = 'Plate corselet';
// 		magicItem.description = 'Breastplate of Heroes (p51)';		
// 	} else if (die > 7 && die <= 9 ) {
// 		magicItem.price = 5150;
// 		magicItem.type = 'Shield';
// 		magicItem.subType = 'Medium';
// 		magicItem.description = 'Dragon Shield (p51)';		
// 	} else if (die > 9 && die <= 12 ) {
// 		magicItem.price = 4300;
// 		magicItem.type = 'Armor';
// 		magicItem.subType = 'Chain hauberk';
// 		magicItem.description = "Dragon Slayer's Armor (p51)";		
// 	} else if (die > 12 && die <= 15 ) {
// 		magicItem.price = 5300;
// 		magicItem.type = 'Armor';
// 		magicItem.subType = 'Chain hauberk';
// 		magicItem.description = 'Hauberk of the Mage Slayer (p51)';		
// 	} else if (die > 15 && die <= 17 ) {
// 		magicItem.price = 4650;
// 		magicItem.type = 'Helm';
// 		magicItem.subType = 'Steel helmet';
// 		magicItem.description = 'Helm of the General (p51)';		
// 	} else if (die > 17) {
// 		magicItem.price = 2050;
// 		magicItem.type = 'Armor';
// 		magicItem.subType = 'Leather';
// 		magicItem.description = "Thief's Jerkin (p51)";		
// 	}
// }




