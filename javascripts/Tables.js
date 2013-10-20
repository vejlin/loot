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
    this.description = '';
    this.getInfo = function getInfo() {
        return 'Price: ' + this.money + ' Description: ' + this.description;
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
			loot.magicItem = new MagicItem();
		}
	}
	else if (type == 2) {
		money = 100 * treasureDie;
		if (magicItemPercent <= 25) {
			loot.magicItem = new MagicItem();
		}
	}
	else if (type == 3) {
		money = 500 * treasureDie;
		if (magicItemPercent <= 50) {
			loot.magicItem = new MagicItem();
		}
	}
	else if (type == 4) {
		money = 1000 * treasureDie;
		loot.magicItem = new MagicItem();
	}
	loot.money = money;
	alert(loot.getInfo());
}

function magicItem() {

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

//Object Loot(Gold,Magicitems)
//Object Magicitem(Cost (indholder basis pris + magic pris),Text)


//print XX Gold + Magic Item from tables

//Magic Item Table
//d20 Table
// 1 Table1A
// 2 Table1A
// 3 Table2A
// 4 Table2A
// 5 Table2A
// 6 Table3A
// 7 Table3A
// 8 Table4A
// 9 Table4A
// 10 Table4A
// 11 Table4A
// 12 Table5
// 13 Table5
// 14 Table5
// 15 Table6
// 16 Table6
// 17 Table7A
// 18 Table7A
// 19 Table8
// 20 Table9A

// //Table 1A: Armor Type
// //d20 Type
// 1 Table1B
// 2 Table1B
// 3 Table1B
// 4 Table1B
// 5 Table1B
// 6 Table1B
// 7 Table1B
// 8 Table1B
// 9 Table1B
// 10 Table1B
// 11 Table1B
// 12 Table1B
// 13 Table1B
// 14 Table1B
// 15 Table1B
// 16 Table1D
// 17 Table1D
// 18 Table1D
// 19 Table1D
// 20 Table1J

// //Table 1B: Armor
// //Roll a d20 to determine the exact armor type, then roll on Table 1C to determine the specific bonus.
// //d20 Cost Type
// 1 "$50 Leather" + Table1C
// 2 "$50 Leather" + Table1C
// 3 "$50 Leather" + Table1C
// 4 "$50 Leather" + Table1C
// 5 "$50 Leather" + Table1C
// 6 "$50 Leather" + Table1C
// 7 "$50 Leather" + Table1C
// 8 "$300 Chain hauberk" + Table1C
// 9 "$300 Chain hauberk" + Table1C
// 10 "$300 Chain hauberk" + Table1C
// 11 "$300 Chain hauberk" + Table1C
// 12 "$300 Chain hauberk" + Table1C
// 13 "$400 Plate corselet" + Table1C
// 14 "$400 Plate corselet" + Table1C
// 15 "$400 Plate corselet" + Table1C
// 16 "$200 Plate arms (vambrace)" + Table1C
// 17 "$300 Plate leggings (greaves)" + Table1C
// 18 "$75 Pot Helm" + Table1C
// 19 "$75 Pot Helm" + Table1C
// 20 "$150 Steel Helmet" + Table1C

// //Table 1C: Armor Bonus
// //d20 Cost Bonus
// 1 +$1000 "+1 Toughness"
// 2 +$1000 "+1 Toughness"
// 3 +$1000 "+1 Toughness"
// 4 +$1000 "+1 Toughness"
// 5 +$1000 "+1 Toughness"
// 6 +$1000 "+1 Toughness"
// 7 +$1000 "+1 Toughness"
// 8 +$1000 "+1 Toughness"
// 9 +$1000 "+1 Toughness"
// 10 +$1000 "+1 Toughness"
// 11 +$2000 "+2 Toughness"
// 12 +$2000 "+2 Toughness"
// 13 +$2000 "+2 Toughness"
// 14 +$2000 "+2 Toughness"
// 15 +$2000 "+2 Toughness"
// 16 +$2000 "+2 Toughness"
// 17 +$3000 "+3 Toughness"
// 18 +$3000 "+3 Toughness"
// 19 +$3000 "+3 Toughness"
// 20 Table1C + Table1F // d19+Table1F

// //Table 1D: Shield Type
// //Roll a d20 to determine the exact shield type, then roll on Table 1E to determine the specific bonus.
// //d20 Cost Type
// 1 "$25 Small" + Table1E
// 2 "$25 Small" + Table1E
// 3 "$25 Small" + Table1E
// 4 "$25 Small" + Table1E
// 5 "$25 Small" + Table1E
// 6 "$25 Small" + Table1E
// 7 "$25 Small" + Table1E
// 8 "$50 Medium" + Table1E
// 9 "$50 Medium" + Table1E
// 10 "$50 Medium" + Table1E
// 11 "$50 Medium" + Table1E
// 12 "$50 Medium" + Table1E
// 13 "$50 Medium" + Table1E
// 14 "$50 Medium" + Table1E
// 15 "$50 Medium" + Table1E
// 16 "$200 Large" + Table1E
// 17 "$200 Large" + Table1E
// 18 "$200 Large" + Table1E
// 19 "$200 Large" + Table1E
// 20 "$200 Large" + Table1E

// //Table 1E: Shield Bonus
// //d20 Cost Bonus
// 1 "+$6000 +1 Parry (Block)"
// 2 "+$6000 +1 Parry (Block)"
// 3 "+$6000 +1 Parry (Block)"
// 4 "+$6000 +1 Parry (Block)"
// 5 "+$6000 +1 Parry (Block)"
// 6 "+$6000 +1 Parry (Block)"
// 7 "+$6000 +1 Parry (Block)"
// 8 "+$6000 +1 Parry (Block)"
// 9 "+$6000 +1 Parry (Block)"
// 10 "+$6000 +1 Parry (Block)"
// 11 "+$6000 +1 Parry (Block)"
// 12 "+$6000 +1 Parry (Block)"
// 13 "+$6000 +1 Parry (Block)"
// 14 "+$8000 +2 Parry (Imp Block)"
// 15 "+$8000 +2 Parry (Imp Block)"
// 16 "+$8000 +2 Parry (Imp Block)"
// 17 "+$8000 +2 Parry (Imp Block)"
// 18 "+$8000 +2 Parry (Imp Block)"
// 19 "+$8000 +2 Parry (Imp Block)"
// 20 Table1E + Table1F // d19+Table1F

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

// //Table 1J: Named Items
// //d20 Cost Type
// 1 "$6550 Assassin’s Armor"
// 2 "$6550 Assassin’s Armor"
// 3 "$2400 Breastplate of Heroes"
// 4 "$2400 Breastplate of Heroes"
// 5 "$2400 Breastplate of Heroes"
// 6 "$2400 Breastplate of Heroes"
// 7 "$2400 Breastplate of Heroes"
// 8 "$5150 Dragon Shield"
// 9 "$5150 Dragon Shield"
// 10 "$4300 Dragon Slayer’s Armor"
// 11 "$4300 Dragon Slayer’s Armor"
// 12 "$4300 Dragon Slayer’s Armor"
// 13 "$5300 Hauberk of the Mage Slayer"
// 14 "$5300 Hauberk of the Mage Slayer"
// 15 "$5300 Hauberk of the Mage Slayer"
// 16 "$4650 Helm of the General"
// 17 "$4650 Helm of the General"
// 18 "$2050 Thief’s Jerkin"
// 19 "$2050 Thief’s Jerkin"
// 20 "$2050 Thief’s Jerkin"
