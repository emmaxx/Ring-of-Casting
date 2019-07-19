const lsz = 404;

const Col0 = Array([lsz]);
const Col1 = Array([lsz]);

//refactor during lunch
const spell = function() {
  const arrayID = parseInt((Math.random() * Col0.length), 10);
  const node = document.createElement('li');
  const text = document.createTextNode(Col1[arrayID]);
  
  node.appendChild(text);
  document.getElementById('spell-name').appendChild(node);
};

Col0[0] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=41";
Col1[0] = "Acid Splash";

Col0[1] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=70";
Col1[1] = "Blade Ward";

Col0[2] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=80";
Col1[2] = "Chill Touch";

Col0[3] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=381";
Col1[3] = "Control Flames";

Col0[4] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=380";
Col1[4] = "Create Bonfire";

Col0[5] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=98";
Col1[5] = "Dancing Lights";

Col0[6] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=119";
Col1[6] = "Druidcraft";

Col0[7] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=145";
Col1[7] = "Eldritch Blast";

Col0[8] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=276";
Col1[8] = "Fire Bolt";

Col0[9] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=290";
Col1[9] = "Friends";

Col0[10] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=389";
Col1[10] = "Frostbite";

Col0[11] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=170";
Col1[11] = "Guidance";

Col0[12] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=390";
Col1[12] = "Gust";

Col0[13] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=35";
Col1[13] = "Light";

Col0[14] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=208";
Col1[14] = "Mage Hand";

Col0[15] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=398";
Col1[15] = "Magic Stone";

Col0[16] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=223";
Col1[16] = "Mending";

Col0[17] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=220";
Col1[17] = "Message";

Col0[18] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=226";
Col1[18] = "Minor Illusion";

Col0[19] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=401";
Col1[19] = "Mold Earth";

Col0[20] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=252";
Col1[20] = "Poison Spray";

Col0[21] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=257";
Col1[21] = "Prestidigitation";

Col0[22] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=260";
Col1[22] = "Produce Flame";

Col0[23] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=295";
Col1[23] = "Ray Of Frost";

Col0[24] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=37";
Col1[24] = "Resistance";

Col0[25] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=38";
Col1[25] = "Sacred Flame";

Col0[26] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=404";
Col1[26] = "Shape Water";

Col0[27] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=313";
Col1[27] = "Shillelagh";

Col0[28] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=314";
Col1[28] = "Shocking Grasp";

Col0[29] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=39";
Col1[29] = "Spare The Dying";

Col0[30] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=40";
Col1[30] = "Thaumaturgy";

Col0[31] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=342";
Col1[31] = "Thorn Whip";

Col0[32] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=409";
Col1[32] = "Thunderclap";

Col0[33] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=351";
Col1[33] = "True Strike";

Col0[34] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=356";
Col1[34] = "Vicious Mockery";

Col0[35] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=375";
Col1[35] = "Absorb Elements";

Col0[36] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=42";
Col1[36] = "Alarm";

Col0[37] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=44";
Col1[37] = "Animal Friendship";

Col0[38] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=55";
Col1[38] = "Armor Of Agathys";

Col0[39] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=56";
Col1[39] = "Arms Of Hadar";

Col0[40] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=377";
Col1[40] = "Beast Bond";

Col0[41] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=3";
Col1[41] = "Bless";

Col0[42] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=76";
Col1[42] = "Burning Hands";

Col0[43] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=379";
Col1[43] = "Catapult";

Col0[44] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=79";
Col1[44] = "Charm Person";

Col0[45] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=81";
Col1[45] = "Chromatic Orb";

Col0[46] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=88";
Col1[46] = "Color Spray";

Col0[47] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=4";
Col1[47] = "Command";

Col0[48] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=91";
Col1[48] = "Compelled Duel";

Col0[49] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=92";
Col1[49] = "Comprehend Languages";

Col0[50] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=141";
Col1[50] = "Create Or Destroy Water";

Col0[51] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=6";
Col1[51] = "Cure Wounds";

Col0[52] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=7";
Col1[52] = "Detect Evil And Good";

Col0[53] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=8";
Col1[53] = "Detect Magic";

Col0[54] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=9";
Col1[54] = "Detect Poison And Disease";

Col0[55] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=106";
Col1[55] = "Disguise Self";

Col0[56] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=110";
Col1[56] = "Dissonant Whispers";

Col0[57] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=113";
Col1[57] = "Divine Favor";

Col0[58] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=385";
Col1[58] = "Earth Tremor";

Col0[59] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=148";
Col1[59] = "Ensnaring Strike";

Col0[60] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=149";
Col1[60] = "Entangle";

Col0[61] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=153";
Col1[61] = "Expeditious Retreat";

Col0[62] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=265";
Col1[62] = "Faerie Fire";

Col0[63] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=266";
Col1[63] = "False Life";

Col0[64] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=268";
Col1[64] = "Feather Fall";

Col0[65] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=271";
Col1[65] = "Find Familiar";

Col0[66] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=341";
Col1[66] = "Floating Disk";

Col0[67] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=285";
Col1[67] = "Fog Cloud";

Col0[68] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=372";
Col1[68] = "Goodberry";

Col0[69] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=165";
Col1[69] = "Grease";

Col0[70] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=10";
Col1[70] = "Guiding Bolt";

Col0[71] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=172";
Col1[71] = "Hail Of Thorns";

Col0[72] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=11";
Col1[72] = "Healing Word";

Col0[73] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=178";
Col1[73] = "Hellish Rebuke";

Col0[74] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=181";
Col1[74] = "Heroism";

Col0[75] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=187";
Col1[75] = "Hex";

Col0[76] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=336";
Col1[76] = "Hideous Laughter";

Col0[77] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=185";
Col1[77] = "Hunter\'s Mark";

Col0[78] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=391";
Col1[78] = "Ice Knife";

Col0[79] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=189";
Col1[79] = "Identify";

Col0[80] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=190";
Col1[80] = "Illusory Script";

Col0[81] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=12";
Col1[81] = "Inflict Wounds";

Col0[82] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=195";
Col1[82] = "Jump";

Col0[83] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=206";
Col1[83] = "Longstrider";

Col0[84] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=207";
Col1[84] = "Mage Armor";

Col0[85] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=211";
Col1[85] = "Magic Missile";

Col0[86] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=13";
Col1[86] = "Protection From Evil And Good";

Col0[87] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=14";
Col1[87] = "Purify Food And Drink";

Col0[88] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=296";
Col1[88] = "Ray Of Sickness";

Col0[89] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=15";
Col1[89] = "Sanctuary";

Col0[90] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=305";
Col1[90] = "Searing Smite";

Col0[91] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=312";
Col1[91] = "Shield";

Col0[92] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=16";
Col1[92] = "Shield Of Faith";

Col0[93] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=315";
Col1[93] = "Silent Image";

Col0[94] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=317";
Col1[94] = "Sleep";

Col0[95] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=320";
Col1[95] = "Speak With Animals";

Col0[96] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=343";
Col1[96] = "Thunderous Smite";

Col0[97] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=344";
Col1[97] = "Thunderwave";

Col0[98] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=354";
Col1[98] = "Unseen Servant";

Col0[99] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=369";
Col1[99] = "Witch Bolt";

Col0[100] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=371";
Col1[100] = "Wrathful Smite";

Col0[101] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=222";
Col1[101] = "Acid Arrow";

Col0[102] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=376";
Col1[102] = "Aganazzar\'s Scorcher";

Col0[103] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=17";
Col1[103] = "Aid";

Col0[104] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=43";
Col1[104] = "Alter Self";

Col0[105] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=45";
Col1[105] = "Animal Messenger";

Col0[106] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=54";
Col1[106] = "Arcane Lock";

Col0[107] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=239";
Col1[107] = "Arcanist\'s Magic Aura";

Col0[108] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=18";
Col1[108] = "Augury";

Col0[109] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=2";
Col1[109] = "Bane";

Col0[110] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=64";
Col1[110] = "Barkskin";

Col0[111] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=66";
Col1[111] = "Beast Sense";

Col0[112] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=19";
Col1[112] = "Blindness/Deafness";

Col0[113] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=74";
Col1[113] = "Blur";

Col0[114] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=75";
Col1[114] = "Branding Smite";

Col0[115] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=20";
Col1[115] = "Calm Emotions";

Col0[116] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=86";
Col1[116] = "Cloud Of Daggers";

Col0[117] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=21";
Col1[117] = "Continual Flame";

Col0[118] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=135";
Col1[118] = "Cordon Of Arrows";

Col0[119] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=138";
Col1[119] = "Crown Of Madness";

Col0[120] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=97";
Col1[120] = "Darkness";

Col0[121] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=99";
Col1[121] = "Darkvision";

Col0[122] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=104";
Col1[122] = "Detect Thoughts";

Col0[123] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=383";
Col1[123] = "Dust Devil";

Col0[124] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=384";
Col1[124] = "Earthbind";

Col0[125] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=399";
Col1[125] = "Earthen Grasp";

Col0[126] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=22";
Col1[126] = "Enhance Ability";

Col0[127] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=147";
Col1[127] = "Enlarge/Reduce";

Col0[128] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=150";
Col1[128] = "Enthrall";

Col0[129] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=272";
Col1[129] = "Find Steed";

Col0[130] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=274";
Col1[130] = "Find Traps";

Col0[131] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=280";
Col1[131] = "Flame Blade";

Col0[132] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=282";
Col1[132] = "Flaming Sphere";

Col0[133] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=24";
Col1[133] = "Gentle Repose";

Col0[134] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=171";
Col1[134] = "Gust Of Wind";

Col0[135] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=179";
Col1[135] = "Heat Metal";

Col0[136] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=25";
Col1[136] = "Hold Person";

Col0[137] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=194";
Col1[137] = "Invisibility";

Col0[138] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=196";
Col1[138] = "Knock";

Col0[139] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=200";
Col1[139] = "Lesser Restoration";

Col0[140] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=201";
Col1[140] = "Levitate";

Col0[141] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=204";
Col1[141] = "Locate Animals Or Plants";

Col0[142] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=27";
Col1[142] = "Locate Object";

Col0[143] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=212";
Col1[143] = "Magic Mouth";

Col0[144] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=213";
Col1[144] = "Magic Weapon";

Col0[145] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=228";
Col1[145] = "Mirror Image";

Col0[146] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=230";
Col1[146] = "Misty Step";

Col0[147] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=232";
Col1[147] = "Moonbeam";

Col0[148] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=244";
Col1[148] = "Pass Without Trace";

Col0[149] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=245";
Col1[149] = "Phantasmal Force";

Col0[150] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=28";
Col1[150] = "Prayer Of Healing";

Col0[151] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=29";
Col1[151] = "Protection From Poison";

Col0[152] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=403";
Col1[152] = "Pyrotechnics";

Col0[153] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=294";
Col1[153] = "Ray Of Enfeeblement";

Col0[154] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=302";
Col1[154] = "Rope Trick";

Col0[155] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=303";
Col1[155] = "Scorching Ray";

Col0[156] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=306";
Col1[156] = "See Invisibility";

Col0[157] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=311";
Col1[157] = "Shatter";

Col0[158] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=30";
Col1[158] = "Silence";

Col0[159] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=406";
Col1[159] = "Skywrite";

Col0[160] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=407";
Col1[160] = "Snowball Swarm";

Col0[161] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=323";
Col1[161] = "Spider Climb";

Col0[162] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=324";
Col1[162] = "Spike Growth";

Col0[163] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=31";
Col1[163] = "Spiritual Weapon";

Col0[164] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=331";
Col1[164] = "Suggestion";

Col0[165] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=32";
Col1[165] = "Warding Bond";

Col0[166] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=415";
Col1[166] = "Warding Wind";

Col0[167] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=364";
Col1[167] = "Web";

Col0[168] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=33";
Col1[168] = "Zone Of Truth";

Col0[169] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=50";
Col1[169] = "Animate Dead";

Col0[170] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=60";
Col1[170] = "Aura Of Vitality";

Col0[171] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=65";
Col1[171] = "Beacon Of Hope";

Col0[172] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=67";
Col1[172] = "Bestow Curse";

Col0[173] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=72";
Col1[173] = "Blinding Smite";

Col0[174] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=73";
Col1[174] = "Blink";

Col0[175] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=77";
Col1[175] = "Call Lightning";

Col0[176] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=84";
Col1[176] = "Clairvoyance";

Col0[177] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=124";
Col1[177] = "Conjure Animals";

Col0[178] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=125";
Col1[178] = "Conjure Barrage";

Col0[179] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=136";
Col1[179] = "Counterspell";

Col0[180] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=134";
Col1[180] = "Create Food And Water";

Col0[181] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=142";
Col1[181] = "Crusader\'s Mantle";

Col0[182] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=100";
Col1[182] = "Daylight";

Col0[183] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=109";
Col1[183] = "Dispel Magic";

Col0[184] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=146";
Col1[184] = "Elemental Weapon";

Col0[185] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=387";
Col1[185] = "Erupting Earth";

Col0[186] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=267";
Col1[186] = "Fear";

Col0[187] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=270";
Col1[187] = "Feign Death";

Col0[188] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=277";
Col1[188] = "Fireball";

Col0[189] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=388";
Col1[189] = "Flame Arrows";

Col0[190] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=284";
Col1[190] = "Fly";

Col0[191] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=155";
Col1[191] = "Gaseous Form";

Col0[192] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=162";
Col1[192] = "Glyph Of Warding";

Col0[193] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=176";
Col1[193] = "Haste";

Col0[194] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=184";
Col1[194] = "Hunger Of Horror";

Col0[195] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=186";
Col1[195] = "Hypnotic Pattern";

Col0[196] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=202";
Col1[196] = "Lightning Arrow";

Col0[197] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=203";
Col1[197] = "Lightning Bolt";

Col0[198] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=209";
Col1[198] = "Magic Circle";

Col0[199] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=214";
Col1[199] = "Major Image";

Col0[200] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=217";
Col1[200] = "Mass Healing Word";

Col0[201] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=221";
Col1[201] = "Meld Into Stone";

Col0[202] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=400";
Col1[202] = "Minute Meteors";

Col0[203] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=238";
Col1[203] = "Nondetection";

Col0[204] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=247";
Col1[204] = "Phantom Steed";

Col0[205] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=251";
Col1[205] = "Plant Growth";

Col0[206] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=263";
Col1[206] = "Protection From Energy";

Col0[207] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=298";
Col1[207] = "Remove Curse";

Col0[208] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=301";
Col1[208] = "Revivify";

Col0[209] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=308";
Col1[209] = "Sending";

Col0[210] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=318";
Col1[210] = "Sleet Storm";

Col0[211] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=319";
Col1[211] = "Slow";

Col0[212] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=321";
Col1[212] = "Speak With Dead";

Col0[213] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=322";
Col1[213] = "Speak With Plants";

Col0[214] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=325";
Col1[214] = "Spirit Guardians";

Col0[215] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=327";
Col1[215] = "Stinking Cloud";

Col0[216] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=410";
Col1[216] = "Tidal Wave";

Col0[217] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=199";
Col1[217] = "Tiny Hut";

Col0[218] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=346";
Col1[218] = "Tongues";

Col0[219] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=355";
Col1[219] = "Vampiric Touch";

Col0[220] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=413";
Col1[220] = "Wall of Sand";

Col0[221] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=414";
Col1[221] = "Wall of Water";

Col0[222] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=362";
Col1[222] = "Water Breathing";

Col0[223] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=363";
Col1[223] = "Water Walk";

Col0[224] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=367";
Col1[224] = "Wind Wall";

Col0[225] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=52";
Col1[225] = "Arcane Eye";

Col0[226] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=58";
Col1[226] = "Aura Of Life";

Col0[227] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=59";
Col1[227] = "Aura Of Purity";

Col0[228] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=63";
Col1[228] = "Banishment";

Col0[229] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=152";
Col1[229] = "Black Tentacles";

Col0[230] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=71";
Col1[230] = "Blight";

Col0[231] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=94";
Col1[231] = "Compulsion";

Col0[232] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=93";
Col1[232] = "Confusion";

Col0[233] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=373";
Col1[233] = "Conjure Minor Elementals";

Col0[234] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=130";
Col1[234] = "Conjure Woodland Beings";

Col0[235] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=137";
Col1[235] = "Control Water";

Col0[236] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=96";
Col1[236] = "Death Ward";

Col0[237] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=105";
Col1[237] = "Dimension Door";

Col0[238] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=111";
Col1[238] = "Divination";

Col0[239] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=114";
Col1[239] = "Dominate Beast";

Col0[240] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=386";
Col1[240] = "Elemental Bane";

Col0[241] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=264";
Col1[241] = "Fabricate";

Col0[242] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=233";
Col1[242] = "Faithful Hound";

Col0[243] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=278";
Col1[243] = "Fire Shield";

Col0[244] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=289";
Col1[244] = "Freedom Of Movement";

Col0[245] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=159";
Col1[245] = "Giant Insect";

Col0[246] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=164";
Col1[246] = "Grasping Vine";

Col0[247] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=166";
Col1[247] = "Greater Invisibility";

Col0[248] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=168";
Col1[248] = "Guardian Of Faith";

Col0[249] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=174";
Col1[249] = "Hallucinatory Terrain";

Col0[250] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=188";
Col1[250] = "Ice Storm";

Col0[251] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=205";
Col1[251] = "Locate Creature";

Col0[252] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=246";
Col1[252] = "Phantasmal Killer";

Col0[253] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=254";
Col1[253] = "Polymorph";

Col0[254] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=235";
Col1[254] = "Private Sanctum";

Col0[255] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=241";
Col1[255] = "Resilient Sphere";

Col0[256] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=198";
Col1[256] = "Secret Chest";

Col0[257] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=326";
Col1[257] = "Staggering Smite";

Col0[258] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=328";
Col1[258] = "Stone Shape";

Col0[259] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=329";
Col1[259] = "Stoneskin";

Col0[260] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=408";
Col1[260] = "Storm Sphere";

Col0[261] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=412";
Col1[261] = "Vitriolic Sphere";

Col0[262] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=357";
Col1[262] = "Wall Of Fire";

Col0[263] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=416";
Col1[263] = "Watery Sphere";

Col0[264] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=47";
Col1[264] = "Animate Objects";

Col0[265] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=48";
Col1[265] = "Antilife Shell";

Col0[266] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=68";
Col1[266] = "Arcane Hand";

Col0[267] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=61";
Col1[267] = "Awaken";

Col0[268] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=62";
Col1[268] = "Banishing Smite";

Col0[269] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=83";
Col1[269] = "Circle Of Power";

Col0[270] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=87";
Col1[270] = "Cloudkill";

Col0[271] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=89";
Col1[271] = "Commune";

Col0[272] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=90";
Col1[272] = "Commune With Nature";

Col0[273] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=95";
Col1[273] = "Cone Of Cold";

Col0[274] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=126";
Col1[274] = "Conjure Elemental";

Col0[275] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=128";
Col1[275] = "Conjure Volley";

Col0[276] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=131";
Col1[276] = "Contact Other Plane";

Col0[277] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=129";
Col1[277] = "Contagion";

Col0[278] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=382";
Col1[278] = "Control Winds";

Col0[279] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=139";
Col1[279] = "Creation";

Col0[280] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=102";
Col1[280] = "Destructive Wave";

Col0[281] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=108";
Col1[281] = "Dispel Evil And Good";

Col0[282] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=116";
Col1[282] = "Dominate Person";

Col0[283] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=118";
Col1[283] = "Dream";

Col0[284] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=281";
Col1[284] = "Flame Strike";

Col0[285] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=157";
Col1[285] = "Geas";

Col0[286] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=167";
Col1[286] = "Greater Restoration";

Col0[287] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=173";
Col1[287] = "Hallow";

Col0[288] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=182";
Col1[288] = "Hold Monster";

Col0[289] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=392";
Col1[289] = "Immolation";

Col0[290] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=193";
Col1[290] = "Insect Plague";

Col0[291] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=197";
Col1[291] = "Legend Lore";

Col0[292] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=397";
Col1[292] = "Maelstrom";

Col0[293] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=215";
Col1[293] = "Mass Cure Wounds";

Col0[294] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=229";
Col1[294] = "Mislead";

Col0[295] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=231";
Col1[295] = "Modify Memory";

Col0[296] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=243";
Col1[296] = "Passwall";

Col0[297] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=249";
Col1[297] = "Planar Binding";

Col0[298] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=291";
Col1[298] = "Raise Dead";

Col0[299] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=297";
Col1[299] = "Reincarnate";

Col0[300] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=304";
Col1[300] = "Scrying";

Col0[301] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=307";
Col1[301] = "Seeming";

Col0[302] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=334";
Col1[302] = "Swift Quiver";

Col0[303] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=337";
Col1[303] = "Telekinesis";

Col0[304] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=293";
Col1[304] = "Telepathic Bond";

Col0[305] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=339";
Col1[305] = "Teleportation Circle";

Col0[306] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=411";
Col1[306] = "Transmute Rock";

Col0[307] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=348";
Col1[307] = "Tree Stride";

Col0[308] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=358";
Col1[308] = "Wall Of Force";

Col0[309] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=360";
Col1[309] = "Wall Of Stone";

Col0[310] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=53";
Col1[310] = "Arcane Gate";

Col0[311] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=69";
Col1[311] = "Blade Barrier";

Col0[312] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=378";
Col1[312] = "Bones of the Earth";

Col0[313] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=78";
Col1[313] = "Chain Lightning";

Col0[314] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=82";
Col1[314] = "Circle Of Death";

Col0[315] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=123";
Col1[315] = "Conjure Fey";

Col0[316] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=132";
Col1[316] = "Contingency";

Col0[317] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=140";
Col1[317] = "Create Undead";

Col0[318] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=107";
Col1[318] = "Disintegrate";

Col0[319] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=154";
Col1[319] = "Eyebite";

Col0[320] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=273";
Col1[320] = "Find The Path";

Col0[321] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=283";
Col1[321] = "Flesh To Stone";

Col0[322] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=286";
Col1[322] = "Forbiddance";

Col0[323] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=240";
Col1[323] = "Freezing Sphere";

Col0[324] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=161";
Col1[324] = "Globe Of Invulnerability";

Col0[325] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=169";
Col1[325] = "Guards And Wards";

Col0[326] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=175";
Col1[326] = "Harm";

Col0[327] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=177";
Col1[327] = "Heal";

Col0[328] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=180";
Col1[328] = "Heroes\' Feast";

Col0[329] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=117";
Col1[329] = "Instant Summons";

Col0[330] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=393";
Col1[330] = "Investiture of Flame";

Col0[331] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=394";
Col1[331] = "Investiture of Ice";

Col0[332] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=395";
Col1[332] = "Investiture of Stone";

Col0[333] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=396";
Col1[333] = "Investiture of Wind";

Col0[334] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=242";
Col1[334] = "Irresistible Dance";

Col0[335] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=210";
Col1[335] = "Magic Jar";

Col0[336] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=218";
Col1[336] = "Mass Suggestion";

Col0[337] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=237";
Col1[337] = "Move Earth";

Col0[338] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=248";
Col1[338] = "Planar Ally";

Col0[339] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=402";
Col1[339] = "Primordial Ward";

Col0[340] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=261";
Col1[340] = "Programmed Illusion";

Col0[341] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=332";
Col1[341] = "Sunbeam";

Col0[342] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=347";
Col1[342] = "Transport Via Plants";

Col0[343] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=352";
Col1[343] = "True Seeing";

Col0[344] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=359";
Col1[344] = "Wall Of Ice";

Col0[345] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=361";
Col1[345] = "Wall Of Thorns";

Col0[346] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=366";
Col1[346] = "Wind Walk";

Col0[347] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=370";
Col1[347] = "Word Of Recall";

Col0[348] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=236";
Col1[348] = "Arcane Sword";

Col0[349] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=127";
Col1[349] = "Conjure Celestial";

Col0[350] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=101";
Col1[350] = "Delayed Blast Fireball";

Col0[351] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=112";
Col1[351] = "Divine Word";

Col0[352] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=151";
Col1[352] = "Etherealness";

Col0[353] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=275";
Col1[353] = "Finger Of Death";

Col0[354] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=279";
Col1[354] = "Fire Storm";

Col0[355] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=287";
Col1[355] = "Forcecage";

Col0[356] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=234";
Col1[356] = "Magnificent Mansion";

Col0[357] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=227";
Col1[357] = "Mirage Arcane";

Col0[358] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=250";
Col1[358] = "Plane Shift";

Col0[359] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=258";
Col1[359] = "Prismatic Spray";

Col0[360] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=262";
Col1[360] = "Project Image";

Col0[361] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=292";
Col1[361] = "Regenerate";

Col0[362] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=299";
Col1[362] = "Resurrection";

Col0[363] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=300";
Col1[363] = "Reverse Gravity";

Col0[364] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=309";
Col1[364] = "Sequester";

Col0[365] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=316";
Col1[365] = "Simulacrum";

Col0[366] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=335";
Col1[366] = "Symbol";

Col0[367] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=340";
Col1[367] = "Teleport";

Col0[368] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=417";
Col1[368] = "Whirlwind";

Col0[369] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=46";
Col1[369] = "Animal Shapes";

Col0[370] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=49";
Col1[370] = "Antimagic Field";

Col0[371] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=51";
Col1[371] = "Antipathy/sympathy";

Col0[372] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=85";
Col1[372] = "Clone";

Col0[373] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=143";
Col1[373] = "Control Weather";

Col0[374] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=103";
Col1[374] = "Demiplane";

Col0[375] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=115";
Col1[375] = "Dominate Monster";

Col0[376] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=120";
Col1[376] = "Earthquake";

Col0[377] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=269";
Col1[377] = "Feeblemind";

Col0[378] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=160";
Col1[378] = "Glibness";

Col0[379] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=183";
Col1[379] = "Holy Aura";

Col0[380] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=374";
Col1[380] = "Horrid Wilting";

Col0[381] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=192";
Col1[381] = "Incendiary Cloud";

Col0[382] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=219";
Col1[382] = "Maze";

Col0[383] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=225";
Col1[383] = "Mind Blank";

Col0[384] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=256";
Col1[384] = "Power Word Stun";

Col0[385] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=333";
Col1[385] = "Sunburst";

Col0[386] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=338";
Col1[386] = "Telepathy";

Col0[387] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=353";
Col1[387] = "Tsunami";

Col0[388] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=57";
Col1[388] = "Astral Projection";

Col0[389] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=288";
Col1[389] = "Foresight";

Col0[390] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=156";
Col1[390] = "Gate";

Col0[391] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=191";
Col1[391] = "Imprisonment";

Col0[392] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=216";
Col1[392] = "Mass Heal";

Col0[393] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=224";
Col1[393] = "Meteor Swarm";

Col0[394] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=253";
Col1[394] = "Power Word Heal";

Col0[395] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=255";
Col1[395] = "Power Word Kill";

Col0[396] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=259";
Col1[396] = "Prismatic Wall";

Col0[397] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=310";
Col1[397] = "Shapechange";

Col0[398] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=330";
Col1[398] = "Storm Of Vengeance";

Col0[399] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=345";
Col1[399] = "Time Stop";

Col0[400] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=349";
Col1[400] = "True Polymorph";

Col0[401] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=350";
Col1[401] = "True Resurrection";

Col0[402] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=365";
Col1[402] = "Weird";

Col0[403] = "http://www.dxcontent.com/SDB5e_SpellBlock.asp?SDBID=368";
Col1[403] = "Wish";