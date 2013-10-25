//Scrolls
//d20
function table7A(magicItem) {
	var die = rollDie(20);
	if (die <= 13) {
		magicItem.type = 'Scroll (Magic)';
	} else if (die > 13) {
		magicItem.type = 'Scroll (Miracles)';
	}
	table7B(magicItem)
}

// Powers
// d20
function table7B(magicItem) {
	var die = rollDice(3,20);
	magicItem.description = '';
	if (die <= 6 ) {
		magicItem.price = 450;
		magicItem.description = 'Armor (9 PP)';
	} else if (die == 7 ) {
		magicItem.price = 500;
		magicItem.description = 'Barrier (10 PP)';
	} else if (die == 8 ) {
		magicItem.price = 1000;
		magicItem.description = 'Beast Friend (20 PP)';
	} else if (die > 8 && die <= 10 ) {
		magicItem.price = 300;
		magicItem.description = 'Blast (6 PP)';
	} else if (die > 10 && die <= 13 ) {
		magicItem.price = 300;
		magicItem.description = 'Bolt (6 PP)';
	} else if (die > 13 && die <= 15 ) {
		magicItem.price = 450;
		magicItem.description = 'Boost/Lower Trait (9 PP)';
	} else if (die == 16 ) {
		magicItem.price = 850;
		magicItem.description = 'Burrow (17 PP)';
	} else if (die > 16 && die <= 18 ) {
		magicItem.price = 100;
		magicItem.description = 'Burst (2 PP)';
	} else if (die > 18 && die <= 20 ) {
		magicItem.price = 450;
		magicItem.description = 'Deflection';
	} else if (die > 20 && die <= 23 ) {
		magicItem.price = 100;
		magicItem.description = 'Detect/Conceal Arcana (2 PP)';
	} else if (die > 23 && die <= 25 ) {
		magicItem.price = 150;
		magicItem.description = 'Dispel (3 PP)';		
	} else if (die == 26 ) {
		magicItem.price = 50;
		magicItem.description = 'Elemental Manipulation (1 PP)';
	} else if (die > 26 && die <= 28 ) {
		magicItem.price = 300;
		magicItem.description = 'Entangle (6 PP)';
	} else if (die > 28 && die <= 31 ) {
		magicItem.price = 550;
		magicItem.description = 'Environ Protection (11 PP)';
	} else if (die == 32 ) {
		magicItem.price = 100;
		magicItem.description = 'Fear (2 PP)';
	} else if (die == 33 ) {
		magicItem.price = 750;
		magicItem.description = 'Fly (17 PP)';
	} else if (die == 34 ) {
		magicItem.price = 1000;
		magicItem.description = 'Greater Healing (20 PP)';
	} else if (die > 34 && die <= 37 ) {
		magicItem.price = 150;
		magicItem.description = 'Healing (3 PP)';		
	} else if (die == 38 ) {
		magicItem.price = 600;
		magicItem.description = 'Invisibility (12 PP)';
	} else if (die > 38 && die <= 41 ) {
		magicItem.price = 500;
		magicItem.description = 'Light (10 PP)';
	} else if (die > 41 && die <= 43 ) {
		magicItem.price = 450;
		magicItem.description = 'Obscure (9 PP)';
	} else if (die == 44 ) {
		magicItem.price = 500;
		magicItem.description = 'Puppet (10 PP)';
	} else if (die > 44 && die <= 46 ) {
		magicItem.price = 1100;
		magicItem.description = 'Quickness (22 PP)';
	} else if (die == 47 ) {
		magicItem.price = 800;
		magicItem.description = 'Shape Change (16 PP)';
	} else if (die > 47 && die <= 49 ) {
		magicItem.price = 450;
		magicItem.description = 'Smite (9 PP)';
	} else if (die > 49 && die <= 51 ) {
		magicItem.price = 400;
		magicItem.description = 'Speak Language (8 PP)';
	} else if (die > 51 && die <= 53 ) {
		magicItem.price = 400;
		magicItem.description = 'Speed (8 PP)';
	} else if (die > 53 && die <= 55 ) {
		magicItem.price = 100;
		magicItem.description = 'Stun (2 PP)';
	} else if (die > 55 && die <= 57 ) {
		magicItem.price = 600;
		magicItem.description = 'Telekinisis (12 PP)';
	} else if (die > 57 && die <= 59 ) {
		magicItem.price = 600;
		magicItem.description = 'Teleport (12 PP)';
	} else if (die == 60 ) {
		magicItem.price = 600;
		magicItem.description = 'Zombie (12 PP)';
	}
}
