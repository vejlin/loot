//Wands & Staves
//d20
function table9A(magicItem) {
	var die = rollDie(20);
	if (die <= 2) {
		magicItem.type = 'Staff';
		table9B(magicItem);
	} else if (die > 2) {
		magicItem.type = 'Wand';
		table9C(magicItem);
	}
}

// Staves 
//d20
function table9B(magicItem) {
	var die = rollDie(20);
	if (die <= 3) {
		magicItem.price = 13000;
		magicItem.description = 'Earthquakes (p86)';
	} else if (die > 3 && die <= 6) {
		magicItem.price = 27000;
		magicItem.description = 'Fiery Doom (p87)';
	} else if (die > 6 && die <= 10) {
		magicItem.price = 23000;
		magicItem.description = 'Mage Lord (p87)';
	} else if (die > 10 && die <= 12) {
		magicItem.price = 18000;
		magicItem.description = 'Necromancer (p88)';
	} else if (die > 12 && die <= 14) {
		magicItem.price = 9000;
		magicItem.description = 'Pupperty (p88)';
	} else if (die > 14 && die <= 16) {
		magicItem.price = 18000;
		magicItem.description = 'Tempests (p89)';
	} else if (die > 16) {
		magicItem.price = 9000;
		magicItem.description = 'Warriors Blessing (p90)';
	}
}
// Wands 
//d20
function table9C(magicItem) {
	var die = rollDice(2,20);
	if (die <= 3) {
		magicItem.price = 4500;
		magicItem.description = 'Blade Wand (p86)';
	} else if (die > 3 && die <= 5) {
		magicItem.price = 5500;
		magicItem.description = 'Dragon Breath (p86)';
	} else if (die == 6) {
		magicItem.price = 7500;
		magicItem.description = 'Draining (p86)';
	} else if (die > 6 && die <= 9) {
		magicItem.price = 5900;
		magicItem.description = 'Fireballs (p86)';
	} else if (die > 9 && die <= 13) {
		magicItem.price = 4500;
		magicItem.description = 'Healing (p87)';
	} else if (die > 13 && die <= 16) {
		magicItem.price = 5500;
		magicItem.description = 'Heroes (p87)';
	} else if (die > 16 && die <= 18) {
		magicItem.price = 6900;
		magicItem.description = 'Lightning (p87)';
	} else if (die > 18 && die <= 20) {
		magicItem.price = 4500;
		magicItem.description = 'Luck (p87)';
	} else if (die > 20 && die <= 25) {
		magicItem.price = 4900;
		magicItem.description = 'Mini-Fireballs (p87)';
	} else if (die > 25 && die <= 27) {
		magicItem.price = 5500;
		magicItem.description = 'Misfortune (p87)';
	} else if (die == 28) {
		magicItem.price = 6500;
		magicItem.description = 'Petrification (p88)';
	} else if (die == 29) {
		magicItem.price = 5500;
		magicItem.description = 'Shrinking (p88)';
	} else if (die > 29 && die <= 31) {
		magicItem.price = 6500;
		magicItem.description = 'Sluggish Reflexes (p89)';
	} else if (die > 31 && die <= 33) {
		magicItem.price = 6500;
		magicItem.description = 'Spirit Banishing (p89)';
	} else if (die == 34) {
		magicItem.price = 7500;
		magicItem.description = 'Time control (p89)';
	} else if (die > 34 && die <= 36) {
		magicItem.price = 4500;
		magicItem.description = 'Tongue Tied (p89)';
	} else if (die > 36 && die <= 38) {
		magicItem.price = 4500;
		magicItem.description = 'Vines (p89)';
	} else if (die > 38) {
		magicItem.price = 5500;
		magicItem.description = 'Viper (p90)';
	}
}