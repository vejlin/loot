//Potions
//3d20
function table5(magicItem) {
	var die = rollDice(3,20);
	magicItem.type = 'Potion';
	if (die == 3) {
		magicItem.price = 450;
		magicItem.description = 'Armor';
	} else if (die == 4) {
		magicItem.price = 675;
		magicItem.description = 'Armor with raise';
	} else if (die == 5) {
		magicItem.price = 450;
		magicItem.description = 'Boost Agility';
	} else if (die == 6) {
		magicItem.price = 675;
		magicItem.description = 'Boost Agility with raise';
	} else if (die > 6 && die <= 8) {
		magicItem.price = 450;
		magicItem.description = 'Boost Smarts';
	} else if (die == 9) {
		magicItem.price = 675;
		magicItem.description = 'Boost Smarts with raise';
	} else if (die > 9 && die <= 11) {
		magicItem.price = 450;
		magicItem.description = 'Boost Spirit';
	} else if (die == 12) {
		magicItem.price = 675;
		magicItem.description = 'Boost Spirit with raise';
	} else if (die > 12 && die <= 14) {
		magicItem.price = 450;
		magicItem.description = 'Boost Strength';
	} else if (die == 15) {
		magicItem.price = 675;
		magicItem.description = 'Boost Strength with raise';
	} else if (die > 15 && die <= 17) {
		magicItem.price = 450;
		magicItem.description = 'Boost Vigor';
	} else if (die == 18) {
		magicItem.price = 675;
		magicItem.description = 'Boost Vigor with raise';
	} else if (die > 18 && die <= 20) {
		magicItem.price = 450;
		magicItem.description = 'Boost skill (*)';
	} else if (die == 21) {
		magicItem.price = 675;
		magicItem.description = 'Boost skill (*) with raise';
	} else if (die == 22) {
		magicItem.price = 100;
		magicItem.description = 'Detect Arcana';
	} else if (die == 23) {
		magicItem.price = 550;
		magicItem.description = 'Environment Protection (cold)';
	} else if (die == 24) {
		magicItem.price = 550;
		magicItem.description = 'Environment Protection (heat)';
	} else if (die == 25) {
		magicItem.price = 550;
		magicItem.description = 'Environment Protection (water)';
	} else if (die == 26) {
		magicItem.price = 500;
		magicItem.description = 'Fly (Pace 6)';
	} else if (die == 27) {
		magicItem.price = 650;
		magicItem.description = 'Fly (Pace 12)';
	} else if (die == 28) {
		magicItem.price = 500;
		magicItem.description = 'Greater Healing (wounds only)';
	} else if (die == 29) {
		magicItem.price = 1000;
		magicItem.description = 'Greater Healing (injuries or wounds)';
	} else if (die > 29 && die <= 34) {
		magicItem.price = 150;
		magicItem.description = 'Healing';
	} else if (die > 34 && die <= 36) {
		magicItem.price = 225;
		magicItem.description = 'Healing with raise';
	} else if (die > 36 && die <= 38) {
		magicItem.price = 700;
		magicItem.description = 'Invisibility';
	} else if (die == 39) {
		magicItem.price = 1050;
		magicItem.description = 'Invisibility with raise';
	} else if (die == 40) {
		magicItem.price = 500;
		magicItem.description = 'Puppet';
	} else if (die > 40 && die <= 42) {
		magicItem.price = 900;
		magicItem.description = 'Quickness';
	} else if (die == 43) {
		magicItem.price = 1350;
		magicItem.description = 'Quickness with raise';
	} else if (die > 43 && die <= 45) {
		magicItem.price = 600;
		magicItem.description = 'Shape Change (Novice animal)';
	} else if (die > 45 && die <= 47) {
		magicItem.price = 650;
		magicItem.description = 'Shape Change (Seasoned animal)';
	} else if (die == 48) {
		magicItem.price = 700;
		magicItem.description = 'Shape Change (Veteran animal)';
	} else if (die == 49) {
		magicItem.price = 750;
		magicItem.description = 'Shape Change (Heroic animal)';
	} else if (die == 50) {
		magicItem.price = 800;
		magicItem.description = 'Shape Change (Legendary animal)';
	} else if (die > 50 && die <= 52) {
		magicItem.price = 500;
		magicItem.description = 'Speak Language';
	} else if (die > 52 && die <= 55) {
		magicItem.price = 400;
		magicItem.description = 'Speed';
	} else if (die > 55 && die <= 57) {
		magicItem.price = 600;
		magicItem.description = 'Speed with raise';
	} else if (die == 59) {
		magicItem.price = 700;
		magicItem.description = 'Telekinesis';
	} else if (die == 60) {
		magicItem.price = 150;
		magicItem.description = "Teleport (10'')";
	}
}
