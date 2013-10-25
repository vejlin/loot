//Rings
//d20
function table6(magicItem) {
	var die = rollDie(20);
	magicItem.type = 'Ring';
	if (die <= 6) {
		table6A(magicItem);
	} else if (die > 6 && die <= 12) {
		table6B(magicItem);
	} else if (die > 12 && die <= 18) {
		table6C(magicItem);
	} else if (die > 18) {
		table6D(magicItem);
	}
}

// Lesser rings 1
// d20
function table6A(magicItem) {
	var die = rollDie(20);
	magicItem.description = '';
	if (die <= 3 ) {
		magicItem.price = 2000;
		magicItem.description = 'Arcane Resistance (p80)';
	} else if (die > 3 && die <= 5 ) {
		magicItem.price = 4000;
		magicItem.description = 'Arcane Resistance, Greater (p80)';
	} else if (die > 5 && die <= 7 ) {
		magicItem.price = 4000;
		magicItem.description = 'Archer (p80)';
	} else if (die > 7 && die <= 9 ) {
		magicItem.price = 4000;
		magicItem.description = 'Avoidance (p80)';
	} else if (die == 10 ) {
		magicItem.price = 10000;
		magicItem.description = 'Avoidance, Greater (p80)';
	} else if (die > 10 && die <= 13 ) {
		magicItem.price = 2000;
		magicItem.description = 'Bonding (p81)';
	} else if (die == 14 ) {
		magicItem.price = 2000;
		magicItem.description = 'Brawn (p81)';
	} else if (die > 14 && die <= 16 ) {
		magicItem.price = 6000;
		magicItem.description = 'Dampening (p81)';
	} else if (die > 16 && die <= 18 ) {
		magicItem.price = 4000;
		magicItem.description = 'Elemental Manipulation, Air (p81)';
	} else if (die > 18) {
		magicItem.price = 4000;
		magicItem.description = 'Elemental Manipulation, Earth (p81)';
	}
}

// Lesser rings 2
// d20
function table6B(magicItem) {
	var die = rollDie(20);
	magicItem.description = '';
	if (die <= 2 ) {
		magicItem.price = 4000;
		magicItem.description = 'Elemental Manipulation, Fire (p81)';
	} else if (die > 2 && die <= 4 ) {
		magicItem.price = 4000;
		magicItem.description = 'Elemental Manipulation, Water (p81)';
	} else if (die > 4 && die <= 6 ) {
		magicItem.price = 6000;
		magicItem.description = 'Fire Protection (p81)';
	} else if (die >6 && die <= 8 ) {
		magicItem.price = 4500;
		magicItem.description = 'Force (p81)';
	} else if (die > 8 && die <= 10 ) {
		magicItem.price = 7000;
		magicItem.description = 'Hammerhand (p81)';
	} else if (die > 10 && die <= 12 ) {
		magicItem.price = 4500;
		magicItem.description = 'Healing (p81)';
	} else if (die > 12 && die <= 15 ) {
		magicItem.price = 4000;
		magicItem.description = 'Light (p82)';
	} else if (die > 15 && die <= 17 ) {
		magicItem.price = 5500;
		magicItem.description = 'Magical Warding (Magic) (p82)';
	} else if (die == 18 ) {
		magicItem.price = 5500;
		magicItem.description = 'Magical Warding (Miracles) (p82)';
	} else if (die > 18) {
		magicItem.price = 2000;
		magicItem.description = 'Pain Resistance (p82)';
	}
}

// Lesser rings 3
// d20
function table6C(magicItem) {
	var die = rollDie(20);
	magicItem.description = '';
	if (die == 1 ) {
		magicItem.price = 4000;
		magicItem.description = 'Pain Resistance, Greater (p82)';
	} else if (die > 1 && die <= 3 ) {
		magicItem.price = 5000;
		magicItem.description = 'Power Surge (p82)';
	} else if (die > 3 && die <= 6 ) {
		magicItem.price = 7000;
		magicItem.description = 'Protection (p82)';
	} else if (die > 7 && die <= 9 ) {
		magicItem.price = 4000;
		magicItem.description = 'Protection, Greater (p82)';
	} else if (die > 9 && die <= 11 ) {
		magicItem.price = 2000;
		magicItem.description = 'Rapid Recharge (p82)';
	} else if (die == 12 ) {
		magicItem.price = 4500;
		magicItem.description = 'Second Hand (p82)';
	} else if (die == 13 ) {
		magicItem.price = 2000;
		magicItem.description = 'Shielding (p83)';
	} else if (die > 13 && die <= 17 ) {
		magicItem.price = 2000;
		magicItem.description = 'Storing (p83)';
	} else if (die == 18 ) {
		magicItem.price = 2000;
		magicItem.description = 'Swordsman (p83)';
	} else if (die > 18) {
		magicItem.price = 4000;
		magicItem.description = 'Water Walking (p83)';
	}
}

// Greater rings
// d20
function table6D(magicItem) {
	var die = rollDie(20);
	magicItem.description = '';
	if (die <= 5 ) {
		magicItem.price = 13000;
		magicItem.description = 'Invisibility (p81)';
	} else if (die > 5 && die <= 8 ) {
		magicItem.price = 17000;
		magicItem.description = 'Invisibility, Greater (p82)';
	} else if (die > 8 && die <= 14 ) {
		magicItem.price = 10000;
		magicItem.description = 'Mastery (p82)';
	} else if (die > 14 && die <= 16 ) {
		magicItem.price = 10000;
		magicItem.description = 'Rapid Recharge, Greater (p82)';
	} else if (die > 16 && die <= 18 ) {
		magicItem.price = 11000;
		magicItem.description = 'Teleportation (p83)';
	} else if (die > 18) {
		magicItem.price = 10000;
		magicItem.description = 'Time Control (p83)';
	}
}