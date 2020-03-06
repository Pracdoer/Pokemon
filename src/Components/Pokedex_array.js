// Array of Pokemons 

export const Pokedex_array =
[
	{
		id: 1,
		name: "Bulbasaur",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 2,
		name: "Ivysaur",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 3,
		name: "Venusaur",
		type: ["grass", "poison"],
		"forms": [
			{
				name: "Venusaur",
				type: ["grass", "poison"]
			},
			{
				name: "Venusaur Mega",
				type: ["grass", "poison"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 4,
		name: "Charmander",
		isNfe: true,
		type: ["fire"]
	},
 {
		id: 5,
		name: "Charmeleon",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 6,
		name: "Charizard",
		type: ["fire", "flying"],
		"forms": [
			{
				name: "Charizard",
				type: ["fire", "flying"]
			},
			{
				name: "Charizard Mega X",
				type: ["fire", "dragon"],
				"spriteSuffix": "mega-x",
				isMega: true
			},
			{
				name: "Charizard Mega Y",
				type: ["fire", "flying"],
				"spriteSuffix": "mega-y",
				isMega: true
			},
			{
				name: "Charizard Gigantamax",
				type: [
					"fire",
					"flying"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 7,
		name: "Squirtle",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 8,
		name: "Wartortle",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 9,
		name: "Blastoise",
		type: ["water"],
		"forms": [
			{
				name: "Blastoise",
				type: ["water"]
			},
			{
				name: "Blastoise Mega",
				type: ["water"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 10,
		name: "Caterpie",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 11,
		name: "Metapod",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 12,
		name: "Butterfree",
		type: ["bug", "flying"],
		"forms": [
			{
				name: "Butterfree",
				type: [
					"bug",
					"flying"
				]
			},
			{
				name: "Butterfree Gigantamax",
				type: [
					"bug",
					"flying"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 13,
		name: "Weedle",
		isNfe: true,
		type: ["bug", "poison"]
	},
	{
		id: 14,
		name: "Kakuna",
		isNfe: true,
		type: ["bug", "poison"]
	},
	{
		id: 15,
		name: "Beedrill",
		type: ["bug", "poison"],
		"forms": [
			{
				name: "Beedrill",
				type: ["bug", "poison"]
			},
			{
				name: "Beedrill Mega",
				type: ["bug", "poison"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 16,
		name: "Pidgey",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 17,
		name: "Pidgeotto",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 18,
		name: "Pidgeot",
		type: ["normal", "flying"],
		"forms": [
			{
				name: "Pidgeot",
				type: ["normal", "flying"]
			},
			{
				name: "Pidgeot Mega",
				type: ["normal", "flying"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 19,
		name: "Rattata",
		isNfe: true,
		type: ["normal"],
		"forms": [
			{
				name: "Rattata",
				isNfe: true,
				type: ["normal"]
			},
			{
				name: "Rattata Alola",
				isNfe: true,
				type: ["dark", "normal"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 20,
		name: "Raticate",
		type: ["normal"],
		"forms": [
			{
				name: "Raticate",
				type: ["normal"]
			},
			{
				name: "Raticate Alola",
				type: ["dark", "normal"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 21,
		name: "Spearow",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 22,
		name: "Fearow",
		type: ["normal", "flying"]
	},
	{
		id: 23,
		name: "Ekans",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 24,
		name: "Arbok",
		type: ["poison"]
	},
	{
		id: 25,
		name: "Pikachu",
		isNfe: true,
		type: ["electric"],
		"forms": [
			{
				name: "Pikachu",
				isNfe: true,
				type: ["electric"]
			},
			{
				name: "Pikachu",
				isNfe: true,
				type: ["electric"],
				"spriteSuffix": "hat"
			},
			{
				name: "Pikachu Gigantamax",
				type: [
					"electric"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 26,
		name: "Raichu",
		type: ["electric"],
		"forms": [
			{
				name: "Raichu",
				type: ["electric"]
			},
			{
				name: "Raichu Alola",
				type: ["electric", "psychic"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 27,
		name: "Sandshrew",
		isNfe: true,
		type: ["ground"],
		"forms": [
			{
				name: "Sandshrew",
				isNfe: true,
				type: ["ground"]
			},
			{
				name: "Sandshrew Alola",
				isNfe: true,
				type: ["ice", "steel"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 28,
		name: "Sandslash",
		type: ["ground"],
		"forms": [
			{
				name: "Sandslash",
				type: ["ground"]
			},
			{
				name: "Sandslash Alola",
				type: ["ice", "steel"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 29,
		name: "Nidoran ♀",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 30,
		name: "Nidorina",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 31,
		name: "Nidoqueen",
		type: ["poison", "ground"]
	},
	{
		id: 32,
		name: "Nidoran ♂",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 33,
		name: "Nidorino",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 34,
		name: "Nidoking",
		type: ["poison", "ground"]
	},
	{
		id: 35,
		name: "Clefairy",
		isNfe: true,
		type: ["fairy"]
	},
	{
		id: 36,
		name: "Clefable",
		type: ["fairy"]
	},
	{
		id: 37,
		name: "Vulpix",
		isNfe: true,
		type: ["fire"],
		"forms": [
			{
				name: "Vulpix",
				isNfe: true,
				type: ["fire"]
			},
			{
				name: "Vulpix Alola",
				isNfe: true,
				type: ["ice"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 38,
		name: "Ninetales",
		type: ["fire"],
		"forms": [
			{
				name: "Ninetales",
				type: ["fire"]
			},
			{
				name: "Ninetales Alola",
				type: ["ice", "fairy"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 39,
		name: "Jigglypuff",
		isNfe: true,
		type: ["normal", "fairy"]
	},
	{
		id: 40,
		name: "Wigglytuff",
		type: ["normal", "fairy"]
	},
	{
		id: 41,
		name: "Zubat",
		isNfe: true,
		type: ["poison", "flying"]
	},
	{
		id: 42,
		name: "Golbat",
		isNfe: true,
		type: ["poison", "flying"]
	},
	{
		id: 43,
		name: "Oddish",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 44,
		name: "Gloom",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 45,
		name: "Vileplume",
		type: ["grass", "poison"]
	},
	{
		id: 46,
		name: "Paras",
		isNfe: true,
		type: ["bug", "grass"]
	},
	{
		id: 47,
		name: "Parasect",
		type: ["bug", "grass"]
	},
	{
		id: 48,
		name: "Venonat",
		isNfe: true,
		type: ["bug", "poison"]
	},
	{
		id: 49,
		name: "Venomoth",
		type: ["bug", "poison"]
	},
	{
		id: 50,
		name: "Diglett",
		isNfe: true,
		type: ["ground"],
		"forms": [
			{
				name: "Diglett",
				isNfe: true,
				type: ["ground"]
			},
			{
				name: "Diglett Alola",
				isNfe: true,
				type: ["ground", "steel"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 51,
		name: "Dugtrio",
		type: ["ground"],
		"forms": [
			{
				name: "Dugtrio",
				type: ["ground"]
			},
			{
				name: "Dugtrio Alola",
				type: ["ground", "steel"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 52,
		name: "Meowth",
		isNfe: true,
		type: ["normal"],
		"forms": [
			{
				name: "Meowth",
				isNfe: true,
				type: ["normal"]
			},
			{
				name: "Meowth Alola",
				isNfe: true,
				type: ["dark"],
				"spriteSuffix": "alola"
			},
			{
				name: "Meowth Galar",
				isNfe: true,
				type: [
					"steel"
				],
				"spriteSuffix": "galar"
			},
			{
				name: "Meowth Gigantamax",
				isNfe: true,
				type: [
					"normal"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 53,
		name: "Persian",
		type: ["normal"],
		"forms": [
			{
				name: "Persian",
				type: ["normal"]
			},
			{
				name: "Persian Alola",
				type: ["dark"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 54,
		name: "Psyduck",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 55,
		name: "Golduck",
		type: ["water"]
	},
	{
		id: 56,
		name: "Mankey",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 57,
		name: "Primeape",
		type: ["fighting"]
	},
	{
		id: 58,
		name: "Growlithe",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 59,
		name: "Arcanine",
		type: ["fire"]
	},
	{
		id: 60,
		name: "Poliwag",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 61,
		name: "Poliwhirl",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 62,
		name: "Poliwrath",
		type: ["water", "fighting"]
	},
	{
		id: 63,
		name: "Abra",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 64,
		name: "Kadabra",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 65,
		name: "Alakazam",
		type: ["psychic"],
		"forms": [
			{
				name: "Alakazam",
				type: ["psychic"]
			},
			{
				name: "Alakazam Mega",
				type: ["psychic"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 66,
		name: "Machop",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 67,
		name: "Machoke",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 68,
		name: "Machamp",
		type: ["fighting"],
		"forms": [
			{
				name: "Machamp",
				type: [
					"fighting"
				]
			},
			{
				name: "Machamp Gigantamax",
				type: [
					"fighting"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 69,
		name: "Bellsprout",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 70,
		name: "Weepinbell",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 71,
		name: "Victreebel",
		type: ["grass", "poison"]
	},
	{
		id: 72,
		name: "Tentacool",
		isNfe: true,
		type: ["water", "poison"]
	},
	{
		id: 73,
		name: "Tentacruel",
		type: ["water", "poison"]
	},
	{
		id: 74,
		name: "Geodude",
		isNfe: true,
		type: ["rock", "ground"],
		"forms": [
			{
				name: "Geodude",
				isNfe: true,
				type: ["rock", "ground"]
			},
			{
				name: "Geodude Alola",
				isNfe: true,
				type: ["rock", "electric"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 75,
		name: "Graveler",
		isNfe: true,
		type: ["rock", "ground"],
		"forms": [
			{
				name: "Graveler",
				isNfe: true,
				type: ["rock", "ground"]
			},
			{
				name: "Graveler Alola",
				isNfe: true,
				type: ["rock", "electric"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 76,
		name: "Golem",
		type: ["rock", "ground"],
		"forms": [
			{
				name: "Golem",
				type: ["rock", "ground"]
			},
			{
				name: "Golem Alola",
				type: ["rock", "electric"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 77,
		name: "Ponyta",
		isNfe: true,
		type: ["fire"],
		"forms": [
			{
				name: "Ponyta",
				isNfe: true,
				type: [
					"fire"
				]
			},
			{
				name: "Ponyta Galar",
				isNfe: true,
				type: [
					"psychic"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 78,
		name: "Rapidash",
		type: ["fire"],
		"forms": [
			{
				name: "Rapidash",
				type: [
					"fire"
				]
			},
			{
				name: "Rapidash Galar",
				type: [
					"psychic",
					"fairy"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 79,
		name: "Slowpoke",
		isNfe: true,
		type: ["water", "psychic"]
	},
	{
		id: 80,
		name: "Slowbro",
		type: ["water", "psychic"],
		"forms": [
			{
				name: "Slowbro",
				type: ["water", "psychic"]
			},
			{
				name: "Slowbro Mega",
				type: ["water", "psychic"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 81,
		name: "Magnemite",
		isNfe: true,
		type: ["electric", "steel"]
	},
	{
		id: 82,
		name: "Magneton",
		isNfe: true,
		type: ["electric", "steel"]
	},
	{
		id: 83,
		name: "Farfetch'd",
		type: ["normal", "flying"],
		"forms": [
			{
				name: "Farfetch'd",
				type: [
					"normal",
					"flying"
				]
			},
			{
				name: "Farfetch'd Galar",
				isNfe: true,
				type: [
					"fighting"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 84,
		name: "Doduo",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 85,
		name: "Dodrio",
		type: ["normal", "flying"]
	},
	{
		id: 86,
		name: "Seel",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 87,
		name: "Dewgong",
		type: ["water", "ice"]
	},
	{
		id: 88,
		name: "Grimer",
		isNfe: true,
		type: ["poison"],
		"forms": [
			{
				name: "Grimer",
				isNfe: true,
				type: ["poison"]
			},
			{
				name: "Grimer Alola",
				isNfe: true,
				type: ["poison", "dark"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 89,
		name: "Muk",
		type: ["poison"],
		"forms": [
			{
				name: "Muk",
				type: ["poison"]
			},
			{
				name: "Muk Alola",
				type: ["poison", "dark"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 90,
		name: "Shellder",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 91,
		name: "Cloyster",
		type: ["water", "ice"]
	},
	{
		id: 92,
		name: "Gastly",
		isNfe: true,
		type: ["ghost", "poison"]
	},
	{
		id: 93,
		name: "Haunter",
		isNfe: true,
		type: ["ghost", "poison"]
	},
	{
		id: 94,
		name: "Gengar",
		type: ["ghost", "poison"],
		"forms": [
			{
				name: "Gengar",
				type: ["ghost", "poison"]
			},
			{
				name: "Gengar Mega",
				"isUber": true,
				type: ["ghost", "poison"],
				"spriteSuffix": "mega",
				isMega: true
			},
			{
				name: "Gengar Gigantamax",
				type: [
					"ghost",
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 95,
		name: "Onix",
		isNfe: true,
		type: ["rock", "ground"]
	},
	{
		id: 96,
		name: "Drowzee",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 97,
		name: "Hypno",
		type: ["psychic"]
	},
	{
		id: 98,
		name: "Krabby",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 99,
		name: "Kingler",
		type: ["water"],
		"forms": [
			{
				name: "Kingler",
				type: [
					"water"
				]
			},
			{
				name: "Kingler Gigantamax",
				type: [
					"water"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 100,
		name: "Voltorb",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 101,
		name: "Electrode",
		type: ["electric"]
	},
	{
		id: 102,
		name: "Exeggcute",
		isNfe: true,
		type: ["grass", "psychic"]
	},
	{
		id: 103,
		name: "Exeggutor",
		type: ["grass", "psychic"],
		"forms": [
			{
				name: "Exeggutor",
				type: ["grass", "psychic"]
			},
			{
				name: "Exeggutor Alola",
				type: ["grass", "dragon"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 104,
		name: "Cubone",
		isNfe: true,
		type: ["ground"]
	},
	{
		id: 105,
		name: "Marowak",
		type: ["ground"],
		"forms": [
			{
				name: "Marowak",
				type: ["ground"]
			},
			{
				name: "Marowak Alola",
				type: ["fire", "ghost"],
				"spriteSuffix": "alola"
			}
		]
	},
	{
		id: 106,
		name: "Hitmonlee",
		type: ["fighting"]
	},
	{
		id: 107,
		name: "Hitmonchan",
		type: ["fighting"]
	},
	{
		id: 108,
		name: "Lickitung",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 109,
		name: "Koffing",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 110,
		name: "Weezing",
		type: ["poison"],
		"forms": [
			{
				name: "Weezing",
				type: [
					"poison"
				]
			},
			{
				name: "Weezing Galar",
				type: [
					"poison",
					"fairy"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 111,
		name: "Rhyhorn",
		isNfe: true,
		type: ["ground", "rock"]
	},
	{
		id: 112,
		name: "Rhydon",
		isNfe: true,
		type: ["ground", "rock"]
	},
	{
		id: 113,
		name: "Chansey",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 114,
		name: "Tangela",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 115,
		name: "Kangaskhan",
		type: ["normal"],
		"forms": [
			{
				name: "Kangaskhan",
				type: ["normal"]
			},
			{
				name: "Kangaskhan Mega",
				"isUber": true,
				type: ["normal"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 116,
		name: "Horsea",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 117,
		name: "Seadra",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 118,
		name: "Goldeen",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 119,
		name: "Seaking",
		type: ["water"]
	},
	{
		id: 120,
		name: "Staryu",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 121,
		name: "Starmie",
		type: ["water", "psychic"]
	},
	{
		id: 122,
		name: "Mr. Mime",
		type: ["psychic", "fairy"],
		"forms": [
			{
				name: "Mr. Mime",
				type: [
					"psychic",
					"fairy"
				]
			},
			{
				name: "Mr. Mime Galar",
				isNfe: true,
				type: [
					"ice",
					"psychic"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 123,
		name: "Scyther",
		isNfe: true,
		type: ["bug", "flying"]
	},
	{
		id: 124,
		name: "Jynx",
		type: ["ice", "psychic"]
	},
	{
		id: 125,
		name: "Electabuzz",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 126,
		name: "Magmar",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 127,
		name: "Pinsir",
		type: ["bug"],
		"forms": [
			{
				name: "Pinsir",
				type: ["bug"]
			},
			{
				name: "Pinsir Mega",
				type: ["bug", "flying"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 128,
		name: "Tauros",
		type: ["normal"]
	},
	{
		id: 129,
		name: "Magikarp",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 130,
		name: "Gyarados",
		type: ["water", "flying"],
		"forms": [
			{
				name: "Gyarados",
				type: ["water", "flying"]
			},
			{
				name: "Gyarados Mega",
				type: ["water", "dark"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 131,
		name: "Lapras",
		type: ["water", "ice"],
		"forms": [
			{
				name: "Lapras",
				type: [
					"water",
					"ice"
				]
			},
			{
				name: "Lapras Gigantamax",
				type: [
					"water",
					"ice"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 132,
		name: "Ditto",
		type: ["normal"]
	},
	{
		id: 133,
		name: "Eevee",
		isNfe: true,
		type: ["normal"],
		"forms": [
			{
				name: "Eevee",
				isNfe: true,
				type: [
					"normal"
				]
			},
			{
				name: "Eevee Gigantamax",
				isNfe: true,
				type: [
					"normal"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 134,
		name: "Vaporeon",
		type: ["water"]
	},
	{
		id: 135,
		name: "Jolteon",
		type: ["electric"]
	},
	{
		id: 136,
		name: "Flareon",
		type: ["fire"]
	},
	{
		id: 137,
		name: "Porygon",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 138,
		name: "Omanyte",
		isNfe: true,
		type: ["rock", "water"]
	},
	{
		id: 139,
		name: "Omastar",
		type: ["rock", "water"]
	},
	{
		id: 140,
		name: "Kabuto",
		isNfe: true,
		type: ["rock", "water"]
	},
	{
		id: 141,
		name: "Kabutops",
		type: ["rock", "water"]
	},
	{
		id: 142,
		name: "Aerodactyl",
		type: ["rock", "flying"],
		"forms": [
			{
				name: "Aerodactyl",
				type: ["rock", "flying"]
			},
			{
				name: "Aerodactyl Mega",
				type: ["rock", "flying"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 143,
		name: "Snorlax",
		type: ["normal"],
		"forms": [
			{
				name: "Snorlax",
				type: [
					"normal"
				]
			},
			{
				name: "Snorlax Gigantamax",
				type: [
					"normal"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 144,
		name: "Articuno",
		type: ["ice", "flying"]
	},
	{
		id: 145,
		name: "Zapdos",
		type: ["electric", "flying"]
	},
	{
		id: 146,
		name: "Moltres",
		type: ["fire", "flying"]
	},
	{
		id: 147,
		name: "Dratini",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 148,
		name: "Dragonair",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 149,
		name: "Dragonite",
		type: ["dragon", "flying"]
	},
	{
		id: 150,
		name: "Mewtwo",
		"isUber": true,
		type: ["psychic"],
		"forms": [
			{
				name: "Mewtwo",
				"isUber": true,
				type: ["psychic"]
			},
			{
				name: "Mewtwo Mega X",
				"isUber": true,
				type: ["psychic", "fighting"],
				"spriteSuffix": "mega-x",
				isMega: true
			},
			{
				name: "Mewtwo Mega Y",
				"isUber": true,
				type: ["psychic"],
				"spriteSuffix": "mega-y",
				isMega: true
			}
		]
	},
	{
		id: 151,
		name: "Mew",
		type: ["psychic"]
	},
	{
		id: 152,
		name: "Chikorita",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 153,
		name: "Bayleef",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 154,
		name: "Meganium",
		type: ["grass"]
	},
	{
		id: 155,
		name: "Cyndaquil",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 156,
		name: "Quilava",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 157,
		name: "Typhlosion",
		type: ["fire"]
	},
	{
		id: 158,
		name: "Totodile",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 159,
		name: "Croconaw",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 160,
		name: "Feraligatr",
		type: ["water"]
	},
	{
		id: 161,
		name: "Sentret",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 162,
		name: "Furret",
		type: ["normal"]
	},
	{
		id: 163,
		name: "Hoothoot",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 164,
		name: "Noctowl",
		type: ["normal", "flying"]
	},
	{
		id: 165,
		name: "Ledyba",
		isNfe: true,
		type: ["bug", "flying"]
	},
	{
		id: 166,
		name: "Ledian",
		type: ["bug", "flying"]
	},
	{
		id: 167,
		name: "Spinarak",
		isNfe: true,
		type: ["bug", "poison"]
	},
	{
		id: 168,
		name: "Ariados",
		type: ["bug", "poison"]
	},
	{
		id: 169,
		name: "Crobat",
		type: ["poison", "flying"]
	},
	{
		id: 170,
		name: "Chinchou",
		isNfe: true,
		type: ["water", "electric"]
	},
	{
		id: 171,
		name: "Lanturn",
		type: ["water", "electric"]
	},
	{
		id: 172,
		name: "Pichu",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 173,
		name: "Cleffa",
		isNfe: true,
		type: ["fairy"]
	},
	{
		id: 174,
		name: "Igglybuff",
		isNfe: true,
		type: ["normal", "fairy"]
	},
	{
		id: 175,
		name: "Togepi",
		isNfe: true,
		type: ["fairy"]
	},
	{
		id: 176,
		name: "Togetic",
		isNfe: true,
		type: ["fairy", "flying"]
	},
	{
		id: 177,
		name: "Natu",
		isNfe: true,
		type: ["psychic", "flying"]
	},
	{
		id: 178,
		name: "Xatu",
		type: ["psychic", "flying"]
	},
	{
		id: 179,
		name: "Mareep",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 180,
		name: "Flaaffy",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 181,
		name: "Ampharos",
		type: ["electric"],
		"forms": [
			{
				name: "Ampharos",
				type: ["electric"]
			},
			{
				name: "Ampharos Mega",
				type: ["electric", "dragon"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 182,
		name: "Bellossom",
		type: ["grass"]
	},
	{
		id: 183,
		name: "Marill",
		isNfe: true,
		type: ["water", "fairy"]
	},
	{
		id: 184,
		name: "Azumarill",
		type: ["water", "fairy"]
	},
	{
		id: 185,
		name: "Sudowoodo",
		type: ["rock"]
	},
	{
		id: 186,
		name: "Politoed",
		type: ["water"]
	},
	{
		id: 187,
		name: "Hoppip",
		isNfe: true,
		type: ["grass", "flying"]
	},
	{
		id: 188,
		name: "Skiploom",
		isNfe: true,
		type: ["grass", "flying"]
	},
	{
		id: 189,
		name: "Jumpluff",
		type: ["grass", "flying"]
	},
	{
		id: 190,
		name: "Aipom",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 191,
		name: "Sunkern",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 192,
		name: "Sunflora",
		type: ["grass"]
	},
	{
		id: 193,
		name: "Yanma",
		isNfe: true,
		type: ["bug", "flying"]
	},
	{
		id: 194,
		name: "Wooper",
		isNfe: true,
		type: ["water", "ground"]
	},
	{
		id: 195,
		name: "Quagsire",
		type: ["water", "ground"]
	},
	{
		id: 196,
		name: "Espeon",
		type: ["psychic"]
	},
	{
		id: 197,
		name: "Umbreon",
		type: ["dark"]
	},
	{
		id: 198,
		name: "Murkrow",
		isNfe: true,
		type: ["dark", "flying"]
	},
	{
		id: 199,
		name: "Slowking",
		type: ["water", "psychic"]
	},
	{
		id: 200,
		name: "Misdreavus",
		isNfe: true,
		type: ["ghost"]
	},
	{
		id: 201,
		name: "Unown",
		type: ["psychic"],
		"forms": [
			{
				name: "Unown A",
				type: ["psychic"]
			},
			{
				name: "Unown B",
				type: ["psychic"],
				"spriteSuffix": "b"
			},
			{
				name: "Unown C",
				type: ["psychic"],
				"spriteSuffix": "c"
			},
			{
				name: "Unown D",
				type: ["psychic"],
				"spriteSuffix": "d"
			},
			{
				name: "Unown E",
				type: ["psychic"],
				"spriteSuffix": "e"
			},
			{
				name: "Unown F",
				type: ["psychic"],
				"spriteSuffix": "f"
			},
			{
				name: "Unown G",
				type: ["psychic"],
				"spriteSuffix": "g"
			},
			{
				name: "Unown H",
				type: ["psychic"],
				"spriteSuffix": "h"
			},
			{
				name: "Unown I",
				type: ["psychic"],
				"spriteSuffix": "i"
			},
			{
				name: "Unown J",
				type: ["psychic"],
				"spriteSuffix": "j"
			},
			{
				name: "Unown M",
				type: ["psychic"],
				"spriteSuffix": "m"
			},
			{
				name: "Unown K",
				type: ["psychic"],
				"spriteSuffix": "k"
			},
			{
				name: "Unown L",
				type: ["psychic"],
				"spriteSuffix": "l"
			},
			{
				name: "Unown N",
				type: ["psychic"],
				"spriteSuffix": "n"
			},
			{
				name: "Unown O",
				type: ["psychic"],
				"spriteSuffix": "o"
			},
			{
				name: "Unown P",
				type: ["psychic"],
				"spriteSuffix": "p"
			},
			{
				name: "Unown Q",
				type: ["psychic"],
				"spriteSuffix": "q"
			},
			{
				name: "Unown R",
				type: ["psychic"],
				"spriteSuffix": "r"
			},
			{
				name: "Unown S",
				type: ["psychic"],
				"spriteSuffix": "s"
			},
			{
				name: "Unown T",
				type: ["psychic"],
				"spriteSuffix": "t"
			},
			{
				name: "Unown U",
				type: ["psychic"],
				"spriteSuffix": "u"
			},
			{
				name: "Unown V",
				type: ["psychic"],
				"spriteSuffix": "v"
			},
			{
				name: "Unown W",
				type: ["psychic"],
				"spriteSuffix": "w"
			},
			{
				name: "Unown X",
				type: ["psychic"],
				"spriteSuffix": "x"
			},
			{
				name: "Unown Y",
				type: ["psychic"],
				"spriteSuffix": "y"
			},
			{
				name: "Unown Z",
				type: ["psychic"],
				"spriteSuffix": "z"
			},
			{
				name: "Unown !",
				type: ["psychic"],
				"spriteSuffix": "exclamation"
			},
			{
				name: "Unown ?",
				type: ["psychic"],
				"spriteSuffix": "question"
			}
		]
	},
	{
		id: 202,
		name: "Wobbuffet",
		type: ["psychic"]
	},
	{
		id: 203,
		name: "Girafarig",
		type: ["normal", "psychic"]
	},
	{
		id: 204,
		name: "Pineco",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 205,
		name: "Forretress",
		type: ["bug", "steel"]
	},
	{
		id: 206,
		name: "Dunsparce",
		type: ["normal"]
	},
	{
		id: 207,
		name: "Gligar",
		isNfe: true,
		type: ["ground", "flying"]
	},
	{
		id: 208,
		name: "Steelix",
		type: ["steel", "ground"],
		"forms": [
			{
				name: "Steelix",
				type: ["steel", "ground"]
			},
			{
				name: "Steelix Mega",
				type: ["steel", "ground"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 209,
		name: "Snubbull",
		isNfe: true,
		type: ["fairy"]
	},
	{
		id: 210,
		name: "Granbull",
		type: ["fairy"]
	},
	{
		id: 211,
		name: "Qwilfish",
		type: ["water", "poison"]
	},
	{
		id: 212,
		name: "Scizor",
		type: ["bug", "steel"],
		"forms": [
			{
				name: "Scizor",
				type: ["bug", "steel"]
			},
			{
				name: "Scizor Mega",
				type: ["bug", "steel"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 213,
		name: "Shuckle",
		type: ["bug", "rock"]
	},
	{
		id: 214,
		name: "Heracross",
		type: ["bug", "fighting"],
		"forms": [
			{
				name: "Heracross",
				type: ["bug", "fighting"]
			},
			{
				name: "Heracross Mega",
				type: ["bug", "fighting"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 215,
		name: "Sneasel",
		isNfe: true,
		type: ["dark", "ice"]
	},
	{
		id: 216,
		name: "Teddiursa",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 217,
		name: "Ursaring",
		type: ["normal"]
	},
	{
		id: 218,
		name: "Slugma",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 219,
		name: "Magcargo",
		type: ["fire", "rock"]
	},
	{
		id: 220,
		name: "Swinub",
		isNfe: true,
		type: ["ice", "ground"]
	},
	{
		id: 221,
		name: "Piloswine",
		isNfe: true,
		type: ["ice", "ground"]
	},
	{
		id: 222,
		name: "Corsola",
		type: ["water", "rock"],
		"forms": [
			{
				name: "Corsola",
				type: [
					"water",
					"rock"
				]
			},
			{
				name: "Corsola Galar",
				isNfe: true,
				type: [
					"ghost"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 223,
		name: "Remoraid",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 224,
		name: "Octillery",
		type: ["water"]
	},
	{
		id: 225,
		name: "Delibird",
		type: ["ice", "flying"]
	},
	{
		id: 226,
		name: "Mantine",
		type: ["water", "flying"]
	},
	{
		id: 227,
		name: "Skarmory",
		type: ["steel", "flying"]
	},
	{
		id: 228,
		name: "Houndour",
		isNfe: true,
		type: ["dark", "fire"]
	},
	{
		id: 229,
		name: "Houndoom",
		type: ["dark", "fire"],
		"forms": [
			{
				name: "Houndoom",
				type: ["dark", "fire"]
			},
			{
				name: "Houndoom Mega",
				type: ["dark", "fire"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 230,
		name: "Kingdra",
		type: ["water", "dragon"]
	},
	{
		id: 231,
		name: "Phanpy",
		isNfe: true,
		type: ["ground"]
	},
	{
		id: 232,
		name: "Donphan",
		type: ["ground"]
	},
	{
		id: 233,
		name: "Porygon2",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 234,
		name: "Stantler",
		type: ["normal"]
	},
	{
		id: 235,
		name: "Smeargle",
		type: ["normal"]
	},
	{
		id: 236,
		name: "Tyrogue",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 237,
		name: "Hitmontop",
		type: ["fighting"]
	},
	{
		id: 238,
		name: "Smoochum",
		isNfe: true,
		type: ["ice", "psychic"]
	},
	{
		id: 239,
		name: "Elekid",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 240,
		name: "Magby",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 241,
		name: "Miltank",
		type: ["normal"]
	},
	{
		id: 242,
		name: "Blissey",
		type: ["normal"]
	},
	{
		id: 243,
		name: "Raikou",
		type: ["electric"]
	},
	{
		id: 244,
		name: "Entei",
		type: ["fire"]
	},
	{
		id: 245,
		name: "Suicune",
		type: ["water"]
	},
	{
		id: 246,
		name: "Larvitar",
		isNfe: true,
		type: ["rock", "ground"]
	},
	{
		id: 247,
		name: "Pupitar",
		isNfe: true,
		type: ["rock", "ground"]
	},
	{
		id: 248,
		name: "Tyranitar",
		type: ["rock", "dark"],
		"forms": [
			{
				name: "Tyranitar",
				type: ["rock", "dark"]
			},
			{
				name: "Tyranitar Mega",
				type: ["rock", "dark"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 249,
		name: "Lugia",
		"isUber": true,
		type: ["psychic", "flying"]
	},
	{
		id: 250,
		name: "Ho-oh",
		"isUber": true,
		type: ["fire", "flying"]
	},
	{
		id: 251,
		name: "Celebi",
		type: ["psychic", "grass"]
	},
	{
		id: 252,
		name: "Treecko",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 253,
		name: "Grovyle",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 254,
		name: "Sceptile",
		type: ["grass"],
		"forms": [
			{
				name: "Sceptile",
				type: ["grass"]
			},
			{
				name: "Sceptile Mega",
				type: ["grass", "dragon"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 255,
		name: "Torchic",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 256,
		name: "Combusken",
		isNfe: true,
		type: ["fire", "fighting"]
	},
	{
		id: 257,
		name: "Blaziken",
		"isUber": true,
		type: ["fire", "fighting"],
		"forms": [
			{
				name: "Blaziken",
				"isUber": true,
				type: ["fire", "fighting"]
			},
			{
				name: "Blaziken Mega",
				"isUber": true,
				type: ["fire", "fighting"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 258,
		name: "Mudkip",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 259,
		name: "Marshtomp",
		isNfe: true,
		type: ["water", "ground"]
	},
	{
		id: 260,
		name: "Swampert",
		type: ["water", "ground"],
		"forms": [
			{
				name: "Swampert",
				type: ["water", "ground"]
			},
			{
				name: "Swampert Mega",
				type: ["water", "ground"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 261,
		name: "Poochyena",
		isNfe: true,
		type: ["dark"]
	},
	{
		id: 262,
		name: "Mightyena",
		type: ["dark"]
	},
	{
		id: 263,
		name: "Zigzagoon",
		isNfe: true,
		type: ["normal"],
		"forms": [
			{
				name: "Zigzagoon",
				isNfe: true,
				type: [
					"normal"
				]
			},
			{
				name: "Zigzagoon Galar",
				isNfe: true,
				type: [
					"dark",
					"normal"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 264,
		name: "Linoone",
		type: ["normal"],
		"forms": [
			{
				name: "Linoone",
				type: [
					"normal"
				]
			},
			{
				name: "Linoone Galar",
				isNfe: true,
				type: [
					"dark",
					"normal"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 265,
		name: "Wurmple",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 266,
		name: "Silcoon",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 267,
		name: "Beautifly",
		type: ["bug", "flying"]
	},
	{
		id: 268,
		name: "Cascoon",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 269,
		name: "Dustox",
		type: ["bug", "poison"]
	},
	{
		id: 270,
		name: "Lotad",
		isNfe: true,
		type: ["water", "grass"]
	},
	{
		id: 271,
		name: "Lombre",
		isNfe: true,
		type: ["water", "grass"]
	},
	{
		id: 272,
		name: "Ludicolo",
		type: ["water", "grass"]
	},
	{
		id: 273,
		name: "Seedot",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 274,
		name: "Nuzleaf",
		isNfe: true,
		type: ["grass", "dark"]
	},
	{
		id: 275,
		name: "Shiftry",
		type: ["grass", "dark"]
	},
	{
		id: 276,
		name: "Taillow",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 277,
		name: "Swellow",
		type: ["normal", "flying"]
	},
	{
		id: 278,
		name: "Wingull",
		isNfe: true,
		type: ["water", "flying"]
	},
	{
		id: 279,
		name: "Pelipper",
		type: ["water", "flying"]
	},
	{
		id: 280,
		name: "Ralts",
		isNfe: true,
		type: ["psychic", "fairy"]
	},
	{
		id: 281,
		name: "Kirlia",
		isNfe: true,
		type: ["psychic", "fairy"]
	},
	{
		id: 282,
		name: "Gardevoir",
		type: ["psychic", "fairy"],
		"forms": [
			{
				name: "Gardevoir",
				type: ["psychic", "fairy"]
			},
			{
				name: "Gardevoir Mega",
				type: ["psychic", "fairy"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 283,
		name: "Surskit",
		isNfe: true,
		type: ["bug", "water"]
	},
	{
		id: 284,
		name: "Masquerain",
		type: ["bug", "flying"]
	},
	{
		id: 285,
		name: "Shroomish",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 286,
		name: "Breloom",
		type: ["grass", "fighting"]
	},
	{
		id: 287,
		name: "Slakoth",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 288,
		name: "Vigoroth",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 289,
		name: "Slaking",
		type: ["normal"]
	},
	{
		id: 290,
		name: "Nincada",
		isNfe: true,
		type: ["bug", "ground"]
	},
	{
		id: 291,
		name: "Ninjask",
		type: ["bug", "flying"]
	},
	{
		id: 292,
		name: "Shedinja",
		type: ["bug", "ghost"]
	},
	{
		id: 293,
		name: "Whismur",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 294,
		name: "Loudred",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 295,
		name: "Exploud",
		type: ["normal"]
	},
	{
		id: 296,
		name: "Makuhita",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 297,
		name: "Hariyama",
		type: ["fighting"]
	},
	{
		id: 298,
		name: "Azurill",
		isNfe: true,
		type: ["normal", "fairy"]
	},
	{
		id: 299,
		name: "Nosepass",
		isNfe: true,
		type: ["rock"]
	},
	{
		id: 300,
		name: "Skitty",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 301,
		name: "Delcatty",
		type: ["normal"]
	},
	{
		id: 302,
		name: "Sableye",
		type: ["dark", "ghost"],
		"forms": [
			{
				name: "Sableye",
				type: ["dark", "ghost"]
			},
			{
				name: "Sableye Mega",
				type: ["dark", "ghost"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 303,
		name: "Mawile",
		type: ["steel", "fairy"],
		"forms": [
			{
				name: "Mawile",
				type: ["steel", "fairy"]
			},
			{
				name: "Mawile Mega",
				type: ["steel", "fairy"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 304,
		name: "Aron",
		isNfe: true,
		type: ["steel", "rock"]
	},
	{
		id: 305,
		name: "Lairon",
		isNfe: true,
		type: ["steel", "rock"]
	},
	{
		id: 306,
		name: "Aggron",
		type: ["steel", "rock"],
		"forms": [
			{
				name: "Aggron",
				type: ["steel", "rock"]
			},
			{
				name: "Aggron Mega",
				type: ["steel"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 307,
		name: "Meditite",
		isNfe: true,
		type: ["fighting", "psychic"]
	},
	{
		id: 308,
		name: "Medicham",
		type: ["fighting", "psychic"],
		"forms": [
			{
				name: "Medicham",
				type: ["fighting", "psychic"]
			},
			{
				name: "Medicham Mega",
				type: ["fighting", "psychic"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 309,
		name: "Electrike",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 310,
		name: "Manectric",
		type: ["electric"],
		"forms": [
			{
				name: "Manectric",
				type: ["electric"]
			},
			{
				name: "Manectric Mega",
				type: ["electric"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 311,
		name: "Plusle",
		type: ["electric"]
	},
	{
		id: 312,
		name: "Minun",
		type: ["electric"]
	},
	{
		id: 313,
		name: "Volbeat",
		type: ["bug"]
	},
	{
		id: 314,
		name: "Illumise",
		type: ["bug"]
	},
	{
		id: 315,
		name: "Roselia",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 316,
		name: "Gulpin",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 317,
		name: "Swalot",
		type: ["poison"]
	},
	{
		id: 318,
		name: "Carvanha",
		isNfe: true,
		type: ["water", "dark"]
	},
	{
		id: 319,
		name: "Sharpedo",
		type: ["water", "dark"],
		"forms": [
			{
				name: "Sharpedo",
				type: ["water", "dark"]
			},
			{
				name: "Sharpedo Mega",
				type: ["water", "dark"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 320,
		name: "Wailmer",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 321,
		name: "Wailord",
		type: ["water"]
	},
	{
		id: 322,
		name: "Numel",
		isNfe: true,
		type: ["fire", "ground"]
	},
	{
		id: 323,
		name: "Camerupt",
		type: ["fire", "ground"],
		"forms": [
			{
				name: "Camerupt",
				type: ["fire", "ground"]
			},
			{
				name: "Camerupt Mega",
				type: ["fire", "ground"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 324,
		name: "Torkoal",
		type: ["fire"]
	},
	{
		id: 325,
		name: "Spoink",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 326,
		name: "Grumpig",
		type: ["psychic"]
	},
	{
		id: 327,
		name: "Spinda",
		type: ["normal"]
	},
	{
		id: 328,
		name: "Trapinch",
		isNfe: true,
		type: ["ground"]
	},
	{
		id: 329,
		name: "Vibrava",
		isNfe: true,
		type: ["ground", "dragon"]
	},
	{
		id: 330,
		name: "Flygon",
		type: ["ground", "dragon"]
	},
	{
		id: 331,
		name: "Cacnea",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 332,
		name: "Cacturne",
		type: ["grass", "dark"]
	},
	{
		id: 333,
		name: "Swablu",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 334,
		name: "Altaria",
		type: ["dragon", "flying"],
		"forms": [
			{
				name: "Altaria",
				type: ["dragon", "flying"]
			},
			{
				name: "Altaria Mega",
				type: ["dragon", "fairy"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 335,
		name: "Zangoose",
		type: ["normal"]
	},
	{
		id: 336,
		name: "Seviper",
		type: ["poison"]
	},
	{
		id: 337,
		name: "Lunatone",
		type: ["rock", "psychic"]
	},
	{
		id: 338,
		name: "Solrock",
		type: ["rock", "psychic"]
	},
	{
		id: 339,
		name: "Barboach",
		isNfe: true,
		type: ["water", "ground"]
	},
	{
		id: 340,
		name: "Whiscash",
		type: ["water", "ground"]
	},
	{
		id: 341,
		name: "Corphish",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 342,
		name: "Crawdaunt",
		type: ["water", "dark"]
	},
	{
		id: 343,
		name: "Baltoy",
		isNfe: true,
		type: ["ground", "psychic"]
	},
	{
		id: 344,
		name: "Claydol",
		type: ["ground", "psychic"]
	},
	{
		id: 345,
		name: "Lileep",
		isNfe: true,
		type: ["rock", "grass"]
	},
	{
		id: 346,
		name: "Cradily",
		type: ["rock", "grass"]
	},
	{
		id: 347,
		name: "Anorith",
		isNfe: true,
		type: ["rock", "bug"]
	},
	{
		id: 348,
		name: "Armaldo",
		type: ["rock", "bug"]
	},
	{
		id: 349,
		name: "Feebas",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 350,
		name: "Milotic",
		type: ["water"]
	},
	{
		id: 351,
		name: "Castform",
		type: ["normal"],
		"forms": [
			{
				name: "Castform",
				type: ["normal"]
			},
			{
				name: "Castform",
				type: ["water"],
				"spriteSuffix": "rainy"
			},
			{
				name: "Castform",
				type: ["ice"],
				"spriteSuffix": "snowy"
			},
			{
				name: "Castform",
				type: ["fire"],
				"spriteSuffix": "sunny"
			}
		]
	},
	{
		id: 352,
		name: "Kecleon",
		type: ["normal"]
	},
	{
		id: 353,
		name: "Shuppet",
		isNfe: true,
		type: ["ghost"]
	},
	{
		id: 354,
		name: "Banette",
		type: ["ghost"],
		"forms": [
			{
				name: "Banette",
				type: ["ghost"]
			},
			{
				name: "Banette Mega",
				type: ["ghost"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 355,
		name: "Duskull",
		isNfe: true,
		type: ["ghost"]
	},
	{
		id: 356,
		name: "Dusclops",
		isNfe: true,
		type: ["ghost"]
	},
	{
		id: 357,
		name: "Tropius",
		type: ["grass", "flying"]
	},
	{
		id: 358,
		name: "Chimecho",
		type: ["psychic"]
	},
	{
		id: 359,
		name: "Absol",
		type: ["dark"],
		"forms": [
			{
				name: "Absol",
				type: ["dark"]
			},
			{
				name: "Absol Mega",
				type: ["dark"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 360,
		name: "Wynaut",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 361,
		name: "Snorunt",
		isNfe: true,
		type: ["ice"]
	},
	{
		id: 362,
		name: "Glalie",
		type: ["ice"],
		"forms": [
			{
				name: "Glalie",
				type: ["ice"]
			},
			{
				name: "Glalie Mega",
				type: ["ice"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 363,
		name: "Spheal",
		isNfe: true,
		type: ["ice", "water"]
	},
	{
		id: 364,
		name: "Sealeo",
		isNfe: true,
		type: ["ice", "water"]
	},
	{
		id: 365,
		name: "Walrein",
		type: ["ice", "water"]
	},
	{
		id: 366,
		name: "Clamperl",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 367,
		name: "Huntail",
		type: ["water"]
	},
	{
		id: 368,
		name: "Gorebyss",
		type: ["water"]
	},
	{
		id: 369,
		name: "Relicanth",
		type: ["water", "rock"]
	},
	{
		id: 370,
		name: "Luvdisc",
		type: ["water"]
	},
	{
		id: 371,
		name: "Bagon",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 372,
		name: "Shelgon",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 373,
		name: "Salamence",
		type: ["dragon", "flying"],
		"forms": [
			{
				name: "Salamence",
				type: ["dragon", "flying"]
			},
			{
				name: "Salamence Mega",
				"isUber": true,
				type: ["dragon", "flying"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 374,
		name: "Beldum",
		isNfe: true,
		type: ["steel", "psychic"]
	},
	{
		id: 375,
		name: "Metang",
		isNfe: true,
		type: ["steel", "psychic"]
	},
	{
		id: 376,
		name: "Metagross",
		type: ["steel", "psychic"],
		"forms": [
			{
				name: "Metagross",
				type: ["steel", "psychic"]
			},
			{
				name: "Metagross Mega",
				"isUber": true,
				type: ["steel", "psychic"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 377,
		name: "Regirock",
		type: ["rock"]
	},
	{
		id: 378,
		name: "Regice",
		type: ["ice"]
	},
	{
		id: 379,
		name: "Registeel",
		type: ["steel"]
	},
	{
		id: 380,
		name: "Latias",
		type: ["dragon", "psychic"],
		"forms": [
			{
				name: "Latias",
				type: ["dragon", "psychic"]
			},
			{
				name: "Latias Mega",
				type: ["dragon", "psychic"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 381,
		name: "Latios",
		type: ["dragon", "psychic"],
		"forms": [
			{
				name: "Latios",
				type: ["dragon", "psychic"]
			},
			{
				name: "Latios Mega",
				type: ["dragon", "psychic"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 382,
		name: "Kyogre",
		"isUber": true,
		type: ["water"],
		"forms": [
			{
				name: "Kyogre",
				"isUber": true,
				type: ["water"]
			},
			{
				name: "Kyogre Primal",
				"isUber": true,
				type: ["water"],
				"spriteSuffix": "primal"
			}
		]
	},
	{
		id: 383,
		name: "Groudon",
		"isUber": true,
		type: ["ground"],
		"forms": [
			{
				name: "Groudon",
				"isUber": true,
				type: ["ground"]
			},
			{
				name: "Groudon Primal",
				"isUber": true,
				type: ["ground", "fire"],
				"spriteSuffix": "primal"
			}
		]
	},
	{
		id: 384,
		name: "Rayquaza",
		"isUber": true,
		type: ["dragon", "flying"],
		"forms": [
			{
				name: "Rayquaza",
				"isUber": true,
				type: ["dragon", "flying"]
			},
			{
				name: "Rayquaza Mega",
				"isUber": true,
				type: ["dragon", "flying"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 385,
		name: "Jirachi",
		type: ["steel", "psychic"]
	},
	{
		id: 386,
		name: "Deoxys",
		"isUber": true,
		type: ["psychic"],
		"forms": [
			{
				name: "Deoxys",
				"isUber": true,
				type: ["psychic"]
			},
			{
				name: "Deoxys Attack",
				"isUber": true,
				type: ["psychic"],
				"spriteSuffix": "attack"
			},
			{
				name: "Deoxys Defense",
				"isUber": true,
				type: ["psychic"],
				"spriteSuffix": "defense"
			},
			{
				name: "Deoxys Speed",
				"isUber": true,
				type: ["psychic"],
				"spriteSuffix": "speed"
			}
		]
	},
	{
		id: 387,
		name: "Turtwig",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 388,
		name: "Grotle",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 389,
		name: "Torterra",
		type: ["grass", "ground"]
	},
	{
		id: 390,
		name: "Chimchar",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 391,
		name: "Monferno",
		isNfe: true,
		type: ["fire", "fighting"]
	},
	{
		id: 392,
		name: "Infernape",
		type: ["fire", "fighting"]
	},
	{
		id: 393,
		name: "Piplup",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 394,
		name: "Prinplup",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 395,
		name: "Empoleon",
		type: ["water", "steel"]
	},
	{
		id: 396,
		name: "Starly",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 397,
		name: "Staravia",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 398,
		name: "Staraptor",
		type: ["normal", "flying"]
	},
	{
		id: 399,
		name: "Bidoof",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 400,
		name: "Bibarel",
		type: ["normal", "water"]
	},
	{
		id: 401,
		name: "Kricketot",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 402,
		name: "Kricketune",
		type: ["bug"]
	},
	{
		id: 403,
		name: "Shinx",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 404,
		name: "Luxio",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 405,
		name: "Luxray",
		type: ["electric"]
	},
	{
		id: 406,
		name: "Budew",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 407,
		name: "Roserade",
		type: ["grass", "poison"]
	},
	{
		id: 408,
		name: "Cranidos",
		isNfe: true,
		type: ["rock"]
	},
	{
		id: 409,
		name: "Rampardos",
		type: ["rock"]
	},
	{
		id: 410,
		name: "Shieldon",
		isNfe: true,
		type: ["rock", "steel"]
	},
	{
		id: 411,
		name: "Bastiodon",
		type: ["rock", "steel"]
	},
	{
		id: 412,
		name: "Burmy",
		isNfe: true,
		type: ["bug"],
		"forms": [
			{
				name: "Burmy Plant",
				isNfe: true,
				type: ["bug"]
			},
			{
				name: "Burmy Sandy",
				isNfe: true,
				type: ["bug"],
				"spriteSuffix": "sandy"
			},
			{
				name: "Burmy Trash",
				isNfe: true,
				type: ["bug"],
				"spriteSuffix": "trash"
			}
		]
	},
	{
		id: 413,
		name: "Wormadam",
		type: ["bug", "grass"],
		"forms": [
			{
				name: "Wormadam Plant",
				type: ["bug", "grass"]
			},
			{
				name: "Wormadam Sandy",
				type: ["bug", "ground"],
				"spriteSuffix": "sandy"
			},
			{
				name: "Wormadam Trash",
				type: ["bug", "steel"],
				"spriteSuffix": "trash"
			}
		]
	},
	{
		id: 414,
		name: "Mothim",
		type: ["bug", "flying"]
	},
	{
		id: 415,
		name: "Combee",
		isNfe: true,
		type: ["bug", "flying"]
	},
	{
		id: 416,
		name: "Vespiquen",
		type: ["bug", "flying"]
	},
	{
		id: 417,
		name: "Pachirisu",
		type: ["electric"]
	},
	{
		id: 418,
		name: "Buizel",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 419,
		name: "Floatzel",
		type: ["water"]
	},
	{
		id: 420,
		name: "Cherubi",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 421,
		name: "Cherrim",
		type: ["grass"],
		"forms": [
			{
				name: "Cherrim",
				type: ["grass"]
			},
			{
				name: "Cherrim",
				type: ["grass"],
				"spriteSuffix": "sunshine"
			}
		]
	},
	{
		id: 422,
		name: "Shellos",
		isNfe: true,
		type: ["water"],
		"forms": [
			{
				name: "Shellos",
				isNfe: true,
				type: ["water"]
			},
			{
				name: "Shellos",
				isNfe: true,
				type: ["water"],
				"spriteSuffix": "east"
			}
		]
	},
	{
		id: 423,
		name: "Gastrodon",
		type: ["water", "ground"],
		"forms": [
			{
				name: "Gastrodon",
				type: ["water", "ground"]
			},
			{
				name: "Gastrodon",
				type: ["water", "ground"],
				"spriteSuffix": "east"
			}
		]
	},
	{
		id: 424,
		name: "Ambipom",
		type: ["normal"]
	},
	{
		id: 425,
		name: "Drifloon",
		isNfe: true,
		type: ["ghost", "flying"]
	},
	{
		id: 426,
		name: "Drifblim",
		type: ["ghost", "flying"]
	},
	{
		id: 427,
		name: "Buneary",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 428,
		name: "Lopunny",
		type: ["normal"],
		"forms": [
			{
				name: "Lopunny",
				type: ["normal"]
			},
			{
				name: "Lopunny Mega",
				type: ["normal", "fighting"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 429,
		name: "Mismagius",
		type: ["ghost"]
	},
	{
		id: 430,
		name: "Honchkrow",
		type: ["dark", "flying"]
	},
	{
		id: 431,
		name: "Glameow",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 432,
		name: "Purugly",
		type: ["normal"]
	},
	{
		id: 433,
		name: "Chingling",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 434,
		name: "Stunky",
		isNfe: true,
		type: ["poison", "dark"]
	},
	{
		id: 435,
		name: "Skuntank",
		type: ["poison", "dark"]
	},
	{
		id: 436,
		name: "Bronzor",
		isNfe: true,
		type: ["steel", "psychic"]
	},
	{
		id: 437,
		name: "Bronzong",
		type: ["steel", "psychic"]
	},
	{
		id: 438,
		name: "Bonsly",
		isNfe: true,
		type: ["rock"]
	},
	{
		id: 439,
		name: "Mime Jr.",
		isNfe: true,
		type: ["psychic", "fairy"]
	},
	{
		id: 440,
		name: "Happiny",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 441,
		name: "Chatot",
		type: ["normal", "flying"]
	},
	{
		id: 442,
		name: "Spiritomb",
		type: ["ghost", "dark"]
	},
	{
		id: 443,
		name: "Gible",
		isNfe: true,
		type: ["dragon", "ground"]
	},
	{
		id: 444,
		name: "Gabite",
		isNfe: true,
		type: ["dragon", "ground"]
	},
	{
		id: 445,
		name: "Garchomp",
		type: ["dragon", "ground"],
		"forms": [
			{
				name: "Garchomp",
				type: ["dragon", "ground"]
			},
			{
				name: "Garchomp Mega",
				type: ["dragon", "ground"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 446,
		name: "Munchlax",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 447,
		name: "Riolu",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 448,
		name: "Lucario",
		type: ["fighting", "steel"],
		"forms": [
			{
				name: "Lucario",
				type: ["fighting", "steel"]
			},
			{
				name: "Lucario Mega",
				"isUber": true,
				type: ["fighting", "steel"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 449,
		name: "Hippopotas",
		isNfe: true,
		type: ["ground"]
	},
	{
		id: 450,
		name: "Hippowdon",
		type: ["ground"],
		"forms": [
			{
				name: "Hippowdon",
				type: ["ground"]
			},
			{
				name: "Hippowdon",
				type: ["ground"],
				"spriteSuffix": "f"
			}
		]
	},
	{
		id: 451,
		name: "Skorupi",
		isNfe: true,
		type: ["poison", "bug"]
	},
	{
		id: 452,
		name: "Drapion",
		type: ["poison", "dark"]
	},
	{
		id: 453,
		name: "Croagunk",
		isNfe: true,
		type: ["poison", "fighting"]
	},
	{
		id: 454,
		name: "Toxicroak",
		type: ["poison", "fighting"]
	},
	{
		id: 455,
		name: "Carnivine",
		type: ["grass"]
	},
	{
		id: 456,
		name: "Finneon",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 457,
		name: "Lumineon",
		type: ["water"]
	},
	{
		id: 458,
		name: "Mantyke",
		isNfe: true,
		type: ["water", "flying"]
	},
	{
		id: 459,
		name: "Snover",
		isNfe: true,
		type: ["grass", "ice"]
	},
	{
		id: 460,
		name: "Abomasnow",
		type: ["grass", "ice"],
		"forms": [
			{
				name: "Abomasnow",
				type: ["grass", "ice"]
			},
			{
				name: "Abomasnow Mega",
				type: ["grass", "ice"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 461,
		name: "Weavile",
		type: ["dark", "ice"]
	},
	{
		id: 462,
		name: "Magnezone",
		type: ["electric", "steel"]
	},
	{
		id: 463,
		name: "Lickilicky",
		type: ["normal"]
	},
	{
		id: 464,
		name: "Rhyperior",
		type: ["ground", "rock"]
	},
	{
		id: 465,
		name: "Tangrowth",
		type: ["grass"]
	},
	{
		id: 466,
		name: "Electivire",
		type: ["electric"]
	},
	{
		id: 467,
		name: "Magmortar",
		type: ["fire"]
	},
	{
		id: 468,
		name: "Togekiss",
		type: ["fairy", "flying"]
	},
	{
		id: 469,
		name: "Yanmega",
		type: ["bug", "flying"]
	},
	{
		id: 470,
		name: "Leafeon",
		type: ["grass"]
	},
	{
		id: 471,
		name: "Glaceon",
		type: ["ice"]
	},
	{
		id: 472,
		name: "Gliscor",
		type: ["ground", "flying"]
	},
	{
		id: 473,
		name: "Mamoswine",
		type: ["ice", "ground"]
	},
	{
		id: 474,
		name: "Porygon-Z",
		type: ["normal"]
	},
	{
		id: 475,
		name: "Gallade",
		type: ["psychic", "fighting"],
		"forms": [
			{
				name: "Gallade",
				type: ["psychic", "fighting"]
			},
			{
				name: "Gallade Mega",
				type: ["psychic", "fighting"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 476,
		name: "Probopass",
		type: ["rock", "steel"]
	},
	{
		id: 477,
		name: "Dusknoir",
		type: ["ghost"]
	},
	{
		id: 478,
		name: "Froslass",
		type: ["ice", "ghost"]
	},
	{
		id: 479,
		name: "Rotom",
		type: ["electric", "ghost"],
		"forms": [
			{
				name: "Rotom",
				type: ["electric", "ghost"]
			},
			{
				name: "Rotom Fan",
				type: ["electric", "flying"],
				"spriteSuffix": "fan"
			},
			{
				name: "Rotom Frost",
				type: ["electric", "ice"],
				"spriteSuffix": "frost"
			},
			{
				name: "Rotom Heat",
				type: ["electric", "fire"],
				"spriteSuffix": "heat"
			},
			{
				name: "Rotom Mow",
				type: ["electric", "grass"],
				"spriteSuffix": "mow"
			},
			{
				name: "Rotom Wash",
				type: ["electric", "water"],
				"spriteSuffix": "wash"
			}
		]
	},
	{
		id: 480,
		name: "Uxie",
		type: ["psychic"]
	},
	{
		id: 481,
		name: "Mesprit",
		type: ["psychic"]
	},
	{
		id: 482,
		name: "Azelf",
		type: ["psychic"]
	},
	{
		id: 483,
		name: "Dialga",
		"isUber": true,
		type: ["steel", "dragon"]
	},
	{
		id: 484,
		name: "Palkia",
		"isUber": true,
		type: ["water", "dragon"]
	},
	{
		id: 485,
		name: "Heatran",
		type: ["fire", "steel"]
	},
	{
		id: 486,
		name: "Regigigas",
		type: ["normal"]
	},
	{
		id: 487,
		name: "Giratina",
		"isUber": true,
		type: ["ghost", "dragon"],
		"forms": [
			{
				name: "Giratina",
				"isUber": true,
				type: ["ghost", "dragon"]
			},
			{
				name: "Giratina Origin",
				"isUber": true,
				type: ["ghost", "dragon"],
				"spriteSuffix": "origin"
			}
		]
	},
	{
		id: 488,
		name: "Cresselia",
		type: ["psychic"]
	},
	{
		id: 489,
		name: "Phione",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 490,
		name: "Manaphy",
		type: ["water"]
	},
	{
		id: 491,
		name: "Darkrai",
		"isUber": true,
		type: ["dark"]
	},
	{
		id: 492,
		name: "Shaymin",
		type: ["grass"],
		"forms": [
			{
				name: "Shaymin",
				type: ["grass"]
			},
			{
				name: "Shaymin Sky",
				"isUber": true,
				type: ["grass", "flying"],
				"spriteSuffix": "sky"
			}
		]
	},
	{
		id: 493,
		name: "Arceus",
		"isUber": true,
		type: ["normal"],
		"forms": [
			{
				name: "Arceus",
				"isUber": true,
				type: ["normal"]
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["bug"],
				"spriteSuffix": "bug"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["dark"],
				"spriteSuffix": "dark"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["dragon"],
				"spriteSuffix": "dragon"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["electric"],
				"spriteSuffix": "electric"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["fairy"],
				"spriteSuffix": "fairy"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["fighting"],
				"spriteSuffix": "fighting"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["fire"],
				"spriteSuffix": "fire"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["flying"],
				"spriteSuffix": "flying"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["ghost"],
				"spriteSuffix": "ghost"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["grass"],
				"spriteSuffix": "grass"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["ground"],
				"spriteSuffix": "ground"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["ice"],
				"spriteSuffix": "ice"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["poison"],
				"spriteSuffix": "poison"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["psychic"],
				"spriteSuffix": "psychic"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["rock"],
				"spriteSuffix": "rock"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["steel"],
				"spriteSuffix": "steel"
			},
			{
				name: "Arceus",
				"isUber": true,
				type: ["water"],
				"spriteSuffix": "water"
			}
		]
	},
	{
		id: 494,
		name: "Victini",
		type: ["psychic", "fire"]
	},
	{
		id: 495,
		name: "Snivy",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 496,
		name: "Servine",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 497,
		name: "Serperior",
		type: ["grass"]
	},
	{
		id: 498,
		name: "Tepig",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 499,
		name: "Pignite",
		isNfe: true,
		type: ["fire", "fighting"]
	},
	{
		id: 500,
		name: "Emboar",
		type: ["fire", "fighting"]
	},
	{
		id: 501,
		name: "Oshawott",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 502,
		name: "Dewott",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 503,
		name: "Samurott",
		type: ["water"]
	},
	{
		id: 504,
		name: "Patrat",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 505,
		name: "Watchog",
		type: ["normal"]
	},
	{
		id: 506,
		name: "Lillipup",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 507,
		name: "Herdier",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 508,
		name: "Stoutland",
		type: ["normal"]
	},
	{
		id: 509,
		name: "Purrloin",
		isNfe: true,
		type: ["dark"]
	},
	{
		id: 510,
		name: "Liepard",
		type: ["dark"]
	},
	{
		id: 511,
		name: "Pansage",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 512,
		name: "Simisage",
		type: ["grass"]
	},
	{
		id: 513,
		name: "Pansear",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 514,
		name: "Simisear",
		type: ["fire"]
	},
	{
		id: 515,
		name: "Panpour",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 516,
		name: "Simipour",
		type: ["water"]
	},
	{
		id: 517,
		name: "Munna",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 518,
		name: "Musharna",
		type: ["psychic"]
	},
	{
		id: 519,
		name: "Pidove",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 520,
		name: "Tranquill",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 521,
		name: "Unfezant",
		type: ["normal", "flying"]
	},
	{
		id: 522,
		name: "Blitzle",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 523,
		name: "Zebstrika",
		type: ["electric"]
	},
	{
		id: 524,
		name: "Roggenrola",
		isNfe: true,
		type: ["rock"]
	},
	{
		id: 525,
		name: "Boldore",
		isNfe: true,
		type: ["rock"]
	},
	{
		id: 526,
		name: "Gigalith",
		type: ["rock"]
	},
	{
		id: 527,
		name: "Woobat",
		isNfe: true,
		type: ["psychic", "flying"]
	},
	{
		id: 528,
		name: "Swoobat",
		type: ["psychic", "flying"]
	},
	{
		id: 529,
		name: "Drilbur",
		isNfe: true,
		type: ["ground"]
	},
	{
		id: 530,
		name: "Excadrill",
		type: ["ground", "steel"]
	},
	{
		id: 531,
		name: "Audino",
		type: ["normal"],
		"forms": [
			{
				name: "Audino",
				type: ["normal"]
			},
			{
				name: "Audino Mega",
				type: ["normal", "fairy"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 532,
		name: "Timburr",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 533,
		name: "Gurdurr",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 534,
		name: "Conkeldurr",
		type: ["fighting"]
	},
	{
		id: 535,
		name: "Tympole",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 536,
		name: "Palpitoad",
		isNfe: true,
		type: ["water", "ground"]
	},
	{
		id: 537,
		name: "Seismitoad",
		type: ["water", "ground"]
	},
	{
		id: 538,
		name: "Throh",
		type: ["fighting"]
	},
	{
		id: 539,
		name: "Sawk",
		type: ["fighting"]
	},
	{
		id: 540,
		name: "Sewaddle",
		isNfe: true,
		type: ["bug", "grass"]
	},
	{
		id: 541,
		name: "Swadloon",
		isNfe: true,
		type: ["bug", "grass"]
	},
	{
		id: 542,
		name: "Leavanny",
		type: ["bug", "grass"]
	},
	{
		id: 543,
		name: "Venipede",
		isNfe: true,
		type: ["bug", "poison"]
	},
	{
		id: 544,
		name: "Whirlipede",
		isNfe: true,
		type: ["bug", "poison"]
	},
	{
		id: 545,
		name: "Scolipede",
		type: ["bug", "poison"]
	},
	{
		id: 546,
		name: "Cottonee",
		isNfe: true,
		type: ["grass", "fairy"]
	},
	{
		id: 547,
		name: "Whimsicott",
		type: ["grass", "fairy"]
	},
	{
		id: 548,
		name: "Petilil",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 549,
		name: "Lilligant",
		type: ["grass"]
	},
	{
		id: 550,
		name: "Basculin",
		type: ["water"],
		"forms": [
			{
				name: "Basculin",
				type: ["water"]
			},
			{
				name: "Basculin",
				type: ["water"],
				"spriteSuffix": "bluestriped"
			}
		]
	},
	{
		id: 551,
		name: "Sandile",
		isNfe: true,
		type: ["ground", "dark"]
	},
	{
		id: 552,
		name: "Krokorok",
		isNfe: true,
		type: ["ground", "dark"]
	},
	{
		id: 553,
		name: "Krookodile",
		type: ["ground", "dark"]
	},
	{
		id: 554,
		name: "Darumaka",
		isNfe: true,
		type: ["fire"],
		"forms": [
			{
				name: "Darumaka",
				isNfe: true,
				type: [
					"fire"
				]
			},
			{
				name: "Darumaka Galar",
				isNfe: true,
				type: [
					"ice"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 555,
		name: "Darmanitan",
		type: ["fire"],
		"forms": [
			{
				name: "Darmanitan",
				type: [
					"fire"
				]
			},
			{
				name: "Darmanitan Galar",
				type: [
					"ice"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 556,
		name: "Maractus",
		type: ["grass"]
	},
	{
		id: 557,
		name: "Dwebble",
		isNfe: true,
		type: ["bug", "rock"]
	},
	{
		id: 558,
		name: "Crustle",
		type: ["bug", "rock"]
	},
	{
		id: 559,
		name: "Scraggy",
		isNfe: true,
		type: ["dark", "fighting"]
	},
	{
		id: 560,
		name: "Scrafty",
		type: ["dark", "fighting"]
	},
	{
		id: 561,
		name: "Sigilyph",
		type: ["psychic", "flying"]
	},
	{
		id: 562,
		name: "Yamask",
		isNfe: true,
		type: ["ghost"],
		"forms": [
			{
				name: "Yamask",
				isNfe: true,
				type: [
					"ghost"
				]
			},
			{
				name: "Yamask Galar",
				isNfe: true,
				type: [
					"ground",
					"ghost"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 563,
		name: "Cofagrigus",
		type: ["ghost"]
	},
	{
		id: 564,
		name: "Tirtouga",
		isNfe: true,
		type: ["water", "rock"]
	},
	{
		id: 565,
		name: "Carracosta",
		type: ["water", "rock"]
	},
	{
		id: 566,
		name: "Archen",
		isNfe: true,
		type: ["rock", "flying"]
	},
	{
		id: 567,
		name: "Archeops",
		type: ["rock", "flying"]
	},
	{
		id: 568,
		name: "Trubbish",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 569,
		name: "Garbodor",
		type: ["poison"],
		"forms": [
			{
				name: "Garbodor",
				type: [
					"poison"
				]
			},
			{
				name: "Garbodor Gigantamax",
				type: [
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 570,
		name: "Zorua",
		isNfe: true,
		type: ["dark"]
	},
	{
		id: 571,
		name: "Zoroark",
		type: ["dark"]
	},
	{
		id: 572,
		name: "Minccino",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 573,
		name: "Cinccino",
		type: ["normal"]
	},
	{
		id: 574,
		name: "Gothita",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 575,
		name: "Gothorita",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 576,
		name: "Gothitelle",
		type: ["psychic"]
	},
	{
		id: 577,
		name: "Solosis",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 578,
		name: "Duosion",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 579,
		name: "Reuniclus",
		type: ["psychic"]
	},
	{
		id: 580,
		name: "Ducklett",
		isNfe: true,
		type: ["water", "flying"]
	},
	{
		id: 581,
		name: "Swanna",
		type: ["water", "flying"]
	},
	{
		id: 582,
		name: "Vanillite",
		isNfe: true,
		type: ["ice"]
	},
	{
		id: 583,
		name: "Vanillish",
		isNfe: true,
		type: ["ice"]
	},
	{
		id: 584,
		name: "Vanilluxe",
		type: ["ice"]
	},
	{
		id: 585,
		name: "Deerling",
		isNfe: true,
		type: ["normal", "grass"],
		"forms": [
			{
				name: "Deerling",
				isNfe: true,
				type: ["normal", "grass"]
			},
			{
				name: "Deerling",
				isNfe: true,
				type: ["normal", "grass"],
				"spriteSuffix": "autumn"
			},
			{
				name: "Deerling",
				isNfe: true,
				type: ["normal", "grass"],
				"spriteSuffix": "summer"
			},
			{
				name: "Deerling",
				isNfe: true,
				type: ["normal", "grass"],
				"spriteSuffix": "winter"
			}
		]
	},
	{
		id: 586,
		name: "Sawsbuck",
		type: ["normal", "grass"],
		"forms": [
			{
				name: "Sawsbuck",
				type: ["normal", "grass"]
			},
			{
				name: "Sawsbuck",
				type: ["normal", "grass"],
				"spriteSuffix": "autumn"
			},
			{
				name: "Sawsbuck",
				type: ["normal", "grass"],
				"spriteSuffix": "summer"
			},
			{
				name: "Sawsbuck",
				type: ["normal", "grass"],
				"spriteSuffix": "winter"
			}
		]
	},
	{
		id: 587,
		name: "Emolga",
		type: ["electric", "flying"]
	},
	{
		id: 588,
		name: "Karrablast",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 589,
		name: "Escavalier",
		type: ["bug", "steel"]
	},
	{
		id: 590,
		name: "Foongus",
		isNfe: true,
		type: ["grass", "poison"]
	},
	{
		id: 591,
		name: "Amoonguss",
		type: ["grass", "poison"]
	},
	{
		id: 592,
		name: "Frillish",
		isNfe: true,
		type: ["water", "ghost"],
		"forms": [
			{
				name: "Frillish",
				isNfe: true,
				type: ["water", "ghost"]
			},
			{
				name: "Frillish",
				isNfe: true,
				type: ["water", "ghost"],
				"spriteSuffix": "f"
			}
		]
	},
	{
		id: 593,
		name: "Jellicent",
		type: ["water", "ghost"],
		"forms": [
			{
				name: "Jellicent",
				type: ["water", "ghost"],
				"spriteSuffix": "f"
			},
			{
				name: "Jellicent",
				type: ["water", "ghost"]
			}
		]
	},
	{
		id: 594,
		name: "Alomomola",
		type: ["water"]
	},
	{
		id: 595,
		name: "Joltik",
		isNfe: true,
		type: ["bug", "electric"]
	},
	{
		id: 596,
		name: "Galvantula",
		type: ["bug", "electric"]
	},
	{
		id: 597,
		name: "Ferroseed",
		isNfe: true,
		type: ["grass", "steel"]
	},
	{
		id: 598,
		name: "Ferrothorn",
		type: ["grass", "steel"]
	},
	{
		id: 599,
		name: "Klink",
		isNfe: true,
		type: ["steel"]
	},
	{
		id: 600,
		name: "Klang",
		isNfe: true,
		type: ["steel"]
	},
	{
		id: 601,
		name: "Klinklang",
		type: ["steel"]
	},
	{
		id: 602,
		name: "Tynamo",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 603,
		name: "Eelektrik",
		isNfe: true,
		type: ["electric"]
	},
	{
		id: 604,
		name: "Eelektross",
		type: ["electric"]
	},
	{
		id: 605,
		name: "Elgyem",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 606,
		name: "Beheeyem",
		type: ["psychic"]
	},
	{
		id: 607,
		name: "Litwick",
		isNfe: true,
		type: ["ghost", "fire"]
	},
	{
		id: 608,
		name: "Lampent",
		isNfe: true,
		type: ["ghost", "fire"]
	},
	{
		id: 609,
		name: "Chandelure",
		type: ["ghost", "fire"]
	},
	{
		id: 610,
		name: "Axew",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 611,
		name: "Fraxure",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 612,
		name: "Haxorus",
		type: ["dragon"]
	},
	{
		id: 613,
		name: "Cubchoo",
		isNfe: true,
		type: ["ice"]
	},
	{
		id: 614,
		name: "Beartic",
		type: ["ice"]
	},
	{
		id: 615,
		name: "Cryogonal",
		type: ["ice"]
	},
	{
		id: 616,
		name: "Shelmet",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 617,
		name: "Accelgor",
		type: ["bug"]
	},
	{
		id: 618,
		name: "Stunfisk",
		type: ["ground", "electric"],
		"forms": [
			{
				name: "Stunfisk",
				type: [
					"ground",
					"electric"
				]
			},
			{
				name: "Stunfisk Galar",
				type: [
					"ground",
					"steel"
				],
				"spriteSuffix": "galar"
			}
		]
	},
	{
		id: 619,
		name: "Mienfoo",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 620,
		name: "Mienshao",
		type: ["fighting"]
	},
	{
		id: 621,
		name: "Druddigon",
		type: ["dragon"]
	},
	{
		id: 622,
		name: "Golett",
		isNfe: true,
		type: ["ground", "ghost"]
	},
	{
		id: 623,
		name: "Golurk",
		type: ["ground", "ghost"]
	},
	{
		id: 624,
		name: "Pawniard",
		isNfe: true,
		type: ["dark", "steel"]
	},
	{
		id: 625,
		name: "Bisharp",
		type: ["dark", "steel"]
	},
	{
		id: 626,
		name: "Bouffalant",
		type: ["normal"]
	},
	{
		id: 627,
		name: "Rufflet",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 628,
		name: "Braviary",
		type: ["normal", "flying"]
	},
	{
		id: 629,
		name: "Vullaby",
		isNfe: true,
		type: ["dark", "flying"]
	},
	{
		id: 630,
		name: "Mandibuzz",
		type: ["dark", "flying"]
	},
	{
		id: 631,
		name: "Heatmor",
		type: ["fire"]
	},
	{
		id: 632,
		name: "Durant",
		type: ["bug", "steel"]
	},
	{
		id: 633,
		name: "Deino",
		isNfe: true,
		type: ["dark", "dragon"]
	},
	{
		id: 634,
		name: "Zweilous",
		isNfe: true,
		type: ["dark", "dragon"]
	},
	{
		id: 635,
		name: "Hydreigon",
		type: ["dark", "dragon"]
	},
	{
		id: 636,
		name: "Larvesta",
		isNfe: true,
		type: ["bug", "fire"]
	},
	{
		id: 637,
		name: "Volcarona",
		type: ["bug", "fire"]
	},
	{
		id: 638,
		name: "Cobalion",
		type: ["steel", "fighting"]
	},
	{
		id: 639,
		name: "Terrakion",
		type: ["rock", "fighting"]
	},
	{
		id: 640,
		name: "Virizion",
		type: ["grass", "fighting"]
	},
	{
		id: 641,
		name: "Tornadus",
		type: ["flying"],
		"forms": [
			{
				name: "Tornadus",
				type: ["flying"]
			},
			{
				name: "Tornadus Therian",
				type: ["flying"],
				"spriteSuffix": "therian"
			}
		]
	},
	{
		id: 642,
		name: "Thundurus",
		type: ["electric", "flying"],
		"forms": [
			{
				name: "Thundurus",
				type: ["electric", "flying"]
			},
			{
				name: "Thundurus Therian",
				type: ["electric", "flying"],
				"spriteSuffix": "therian"
			}
		]
	},
	{
		id: 643,
		name: "Reshiram",
		"isUber": true,
		type: ["dragon", "fire"]
	},
	{
		id: 644,
		name: "Zekrom",
		"isUber": true,
		type: ["dragon", "electric"]
	},
	{
		id: 645,
		name: "Landorus",
		"isUber": true,
		type: ["ground", "flying"],
		"forms": [
			{
				name: "Landorus",
				"isUber": true,
				type: ["ground", "flying"]
			},
			{
				name: "Landorus Therian",
				type: ["ground", "flying"],
				"spriteSuffix": "therian"
			}
		]
	},
	{
		id: 646,
		name: "Kyurem",
		type: ["dragon", "ice"],
		"forms": [
			{
				name: "Kyurem",
				type: ["dragon", "ice"]
			},
			{
				name: "Kyurem Black",
				type: ["dragon", "ice"],
				"spriteSuffix": "black"
			},
			{
				name: "Kyurem White",
				"isUber": true,
				type: ["dragon", "ice"],
				"spriteSuffix": "white"
			}
		]
	},
	{
		id: 647,
		name: "Keldeo",
		type: ["water", "fighting"],
		"forms": [
			{
				name: "Keldeo",
				type: ["water", "fighting"]
			},
			{
				name: "Keldeo",
				type: ["water", "fighting"],
				"spriteSuffix": "resolute"
			}
		]
	},
	{
		id: 648,
		name: "Meloetta",
		type: ["normal", "psychic"],
		"forms": [
			{
				name: "Meloetta",
				type: ["normal", "psychic"]
			},
			{
				name: "Meloetta Pirouette",
				type: ["normal", "fighting"],
				"spriteSuffix": "pirouette"
			}
		]
	},
	{
		id: 649,
		name: "Genesect",
		"isUber": true,
		type: ["bug", "steel"],
		"forms": [
			{
				name: "Genesect",
				"isUber": true,
				type: ["bug", "steel"]
			},
			{
				name: "Genesect",
				"isUber": true,
				type: ["bug", "steel"],
				"spriteSuffix": "burn"
			},
			{
				name: "Genesect",
				"isUber": true,
				type: ["bug", "steel"],
				"spriteSuffix": "chill"
			},
			{
				name: "Genesect",
				"isUber": true,
				type: ["bug", "steel"],
				"spriteSuffix": "douse"
			},
			{
				name: "Genesect",
				"isUber": true,
				type: ["bug", "steel"],
				"spriteSuffix": "shock"
			}
		]
	},
	{
		id: 650,
		name: "Chespin",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 651,
		name: "Quilladin",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 652,
		name: "Chesnaught",
		type: ["grass", "fighting"]
	},
	{
		id: 653,
		name: "Fennekin",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 654,
		name: "Braixen",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 655,
		name: "Delphox",
		type: ["fire", "psychic"]
	},
	{
		id: 656,
		name: "Froakie",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 657,
		name: "Frogadier",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 658,
		name: "Greninja",
		type: ["water", "dark"],
		"forms": [
			{
				name: "Greninja",
				type: ["water", "dark"]
			},
			{
				name: "Ash's Greninja",
				type: ["water", "dark"],
				"spriteSuffix": "ash"
			}
		]
	},
	{
		id: 659,
		name: "Bunnelby",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 660,
		name: "Diggersby",
		type: ["normal", "ground"]
	},
	{
		id: 661,
		name: "Fletchling",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 662,
		name: "Fletchinder",
		isNfe: true,
		type: ["fire", "flying"]
	},
	{
		id: 663,
		name: "Talonflame",
		type: ["fire", "flying"]
	},
	{
		id: 664,
		name: "Scatterbug",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 665,
		name: "Spewpa",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 666,
		name: "Vivillon",
		type: ["bug", "flying"],
		"forms": [
			{
				name: "Vivillon",
				type: ["bug", "flying"]
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "archipelago"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "continental"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "elegant"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "fancy"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "garden"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "highplains"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "icysnow"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "jungle"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "marine"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "modern"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "monsoon"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "ocean"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "pokeball"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "polar"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "river"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "sandstorm"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "savanna"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "sun"
			},
			{
				name: "Vivillon",
				type: ["bug", "flying"],
				"spriteSuffix": "tundra"
			}
		]
	},
	{
		id: 667,
		name: "Litleo",
		isNfe: true,
		type: ["fire", "normal"]
	},
	{
		id: 668,
		name: "Pyroar",
		type: ["fire", "normal"],
		"forms": [
			{
				name: "Pyroar",
				type: ["fire", "normal"],
				"spriteSuffix": "f"
			},
			{
				name: "Pyroar",
				type: ["fire", "normal"]
			}
		]
	},
	{
		id: 669,
		name: "Flabébé",
		isNfe: true,
		type: ["fairy"],
		"forms": [
			{
				name: "Flabébé",
				isNfe: true,
				type: ["fairy"]
			},
			{
				name: "Flabébé",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "blue"
			},
			{
				name: "Flabébé",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "orange"
			},
			{
				name: "Flabébé",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "white"
			},
			{
				name: "Flabébé",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		id: 670,
		name: "Floette",
		isNfe: true,
		type: ["fairy"],
		"forms": [
			{
				name: "Floette",
				isNfe: true,
				type: ["fairy"]
			},
			{
				name: "Floette",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "blue"
			},
			{
				name: "Floette",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "eternal"
			},
			{
				name: "Floette",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "orange"
			},
			{
				name: "Floette",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "white"
			},
			{
				name: "Floette",
				isNfe: true,
				type: ["fairy"],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		id: 671,
		name: "Florges",
		type: ["fairy"],
		"forms": [
			{
				name: "Florges",
				type: ["fairy"]
			},
			{
				name: "Florges",
				type: ["fairy"],
				"spriteSuffix": "blue"
			},
			{
				name: "Florges",
				type: ["fairy"],
				"spriteSuffix": "orange"
			},
			{
				name: "Florges",
				type: ["fairy"],
				"spriteSuffix": "white"
			},
			{
				name: "Florges",
				type: ["fairy"],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		id: 672,
		name: "Skiddo",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 673,
		name: "Gogoat",
		type: ["grass"]
	},
	{
		id: 674,
		name: "Pancham",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 675,
		name: "Pangoro",
		type: ["fighting", "dark"]
	},
	{
		id: 676,
		name: "Furfrou",
		type: ["normal"]
	},
	{
		id: 677,
		name: "Espurr",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 678,
		name: "Meowstic",
		type: ["psychic"],
		"forms": [
			{
				name: "Meowstic",
				type: ["psychic"]
			},
			{
				name: "Meowstic",
				type: ["psychic"],
				"spriteSuffix": "f"
			}
		]
	},
	{
		id: 679,
		name: "Honedge",
		isNfe: true,
		type: ["steel", "ghost"]
	},
	{
		id: 680,
		name: "Doublade",
		isNfe: true,
		type: ["steel", "ghost"]
	},
	{
		id: 681,
		name: "Aegislash",
		"isUber": true,
		type: ["steel", "ghost"],
		"forms": [
			{
				name: "Aegislash",
				"isUber": true,
				type: ["steel", "ghost"]
			},
			{
				name: "Aegislash",
				"isUber": true,
				type: ["steel", "ghost"],
				"spriteSuffix": "blade"
			}
		]
	},
	{
		id: 682,
		name: "Spritzee",
		isNfe: true,
		type: ["fairy"]
	},
	{
		id: 683,
		name: "Aromatisse",
		type: ["fairy"]
	},
	{
		id: 684,
		name: "Swirlix",
		isNfe: true,
		type: ["fairy"]
	},
	{
		id: 685,
		name: "Slurpuff",
		type: ["fairy"]
	},
	{
		id: 686,
		name: "Inkay",
		isNfe: true,
		type: ["dark", "psychic"]
	},
	{
		id: 687,
		name: "Malamar",
		type: ["dark", "psychic"]
	},
	{
		id: 688,
		name: "Binacle",
		isNfe: true,
		type: ["rock", "water"]
	},
	{
		id: 689,
		name: "Barbaracle",
		type: ["rock", "water"]
	},
	{
		id: 690,
		name: "Skrelp",
		isNfe: true,
		type: ["poison", "water"]
	},
	{
		id: 691,
		name: "Dragalge",
		type: ["poison", "dragon"]
	},
	{
		id: 692,
		name: "Clauncher",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 693,
		name: "Clawitzer",
		type: ["water"]
	},
	{
		id: 694,
		name: "Helioptile",
		isNfe: true,
		type: ["electric", "normal"]
	},
	{
		id: 695,
		name: "Heliolisk",
		type: ["electric", "normal"]
	},
	{
		id: 696,
		name: "Tyrunt",
		isNfe: true,
		type: ["rock", "dragon"]
	},
	{
		id: 697,
		name: "Tyrantrum",
		type: ["rock", "dragon"]
	},
	{
		id: 698,
		name: "Amaura",
		isNfe: true,
		type: ["rock", "ice"]
	},
	{
		id: 699,
		name: "Aurorus",
		type: ["rock", "ice"]
	},
	{
		id: 700,
		name: "Sylveon",
		type: ["fairy"]
	},
	{
		id: 701,
		name: "Hawlucha",
		type: ["fighting", "flying"]
	},
	{
		id: 702,
		name: "Dedenne",
		type: ["electric", "fairy"]
	},
	{
		id: 703,
		name: "Carbink",
		type: ["rock", "fairy"]
	},
	{
		id: 704,
		name: "Goomy",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 705,
		name: "Sliggoo",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 706,
		name: "Goodra",
		type: ["dragon"]
	},
	{
		id: 707,
		name: "Klefki",
		type: ["steel", "fairy"]
	},
	{
		id: 708,
		name: "Phantump",
		isNfe: true,
		type: ["ghost", "grass"]
	},
	{
		id: 709,
		name: "Trevenant",
		type: ["ghost", "grass"]
	},
	{
		id: 710,
		name: "Pumpkaboo",
		isNfe: true,
		type: ["ghost", "grass"],
		"forms": [
			{
				name: "Pumpkaboo",
				isNfe: true,
				type: ["ghost", "grass"],
				"spriteSuffix": "super"
			},
			{
				name: "Pumpkaboo",
				isNfe: true,
				type: ["ghost", "grass"],
				"spriteSuffix": "large"
			},
			{
				name: "Pumpkaboo",
				isNfe: true,
				type: ["ghost", "grass"],
				"spriteSuffix": "small"
			}
		]
	},
	{
		id: 711,
		name: "Gourgeist",
		type: ["ghost", "grass"],
		"forms": [
			{
				name: "Gourgeist",
				type: ["ghost", "grass"],
				"spriteSuffix": "large"
			},
			{
				name: "Gourgeist",
				type: ["ghost", "grass"],
				"spriteSuffix": "small"
			},
			{
				name: "Gourgeist",
				type: ["ghost", "grass"],
				"spriteSuffix": "super"
			}
		]
	},
	{
		id: 712,
		name: "Bergmite",
		isNfe: true,
		type: ["ice"]
	},
	{
		id: 713,
		name: "Avalugg",
		type: ["ice"]
	},
	{
		id: 714,
		name: "Noibat",
		isNfe: true,
		type: ["flying", "dragon"]
	},
	{
		id: 715,
		name: "Noivern",
		type: ["flying", "dragon"]
	},
	{
		id: 716,
		name: "Xerneas",
		"isUber": true,
		type: ["fairy"]
	},
	{
		id: 717,
		name: "Yveltal",
		"isUber": true,
		type: ["dark", "flying"]
	},
	{
		id: 718,
		name: "Zygarde",
		"isUber": true,
		type: ["dragon", "ground"],
		"forms": [
			{
				name: "Zygarde Complete",
				"isUber": true,
				type: ["dragon", "ground"],
				"spriteSuffix": "complete"
			},
			{
				name: "Zygarde 10%",
				type: ["dragon", "ground"],
				"spriteSuffix": "10"
			},
			{
				name: "Zygarde",
				"isUber": true,
				type: ["dragon", "ground"]
			}
		]
	},
	{
		id: 719,
		name: "Diancie",
		type: ["rock", "fairy"],
		"forms": [
			{
				name: "Diancie",
				type: ["rock", "fairy"]
			},
			{
				name: "Diancie Mega",
				type: ["rock", "fairy"],
				"spriteSuffix": "mega",
				isMega: true
			}
		]
	},
	{
		id: 721,
		name: "Volcanion",
		type: ["fire", "water"]
	},
	{
		id: 720,
		name: "Hoopa",
		type: ["psychic", "ghost"],
		"forms": [
			{
				name: "Hoopa",
				type: ["psychic", "ghost"]
			},
			{
				name: "Hoopa Unbound",
				type: ["psychic", "dark"],
				"spriteSuffix": "unbound"
			}
		]
	},
	{
		id: 722,
		name: "Rowlet",
		isNfe: true,
		type: ["grass", "flying"]
	},
	{
		id: 723,
		name: "Dartrix",
		isNfe: true,
		type: ["grass", "flying"]
	},
	{
		id: 724,
		name: "Decidueye",
		type: ["grass", "ghost"]
	},
	{
		id: 725,
		name: "Litten",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 726,
		name: "Torracat",
		isNfe: true,
		type: ["fire"]
	},
	{
		id: 727,
		name: "Incineroar",
		type: ["fire", "dark"]
	},
	{
		id: 728,
		name: "Popplio",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 729,
		name: "Brionne",
		isNfe: true,
		type: ["water"]
	},
	{
		id: 730,
		name: "Primarina",
		type: ["water", "fairy"]
	},
	{
		id: 731,
		name: "Pikipek",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 732,
		name: "Trumbeak",
		isNfe: true,
		type: ["normal", "flying"]
	},
	{
		id: 733,
		name: "Toucannon",
		type: ["normal", "flying"]
	},
	{
		id: 734,
		name: "Yungoos",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 735,
		name: "Gumshoos",
		type: ["normal"]
	},
	{
		id: 736,
		name: "Grubbin",
		isNfe: true,
		type: ["bug"]
	},
	{
		id: 737,
		name: "Charjabug",
		isNfe: true,
		type: ["bug", "electric"]
	},
	{
		id: 738,
		name: "Vikavolt",
		type: ["bug", "electric"]
	},
	{
		id: 739,
		name: "Crabrawler",
		isNfe: true,
		type: ["fighting"]
	},
	{
		id: 740,
		name: "Crabominable",
		type: ["fighting", "ice"]
	},
	{
		id: 741,
		name: "Oricorio",
		type: ["fire", "flying"],
		"forms": [
			{
				name: "Oricorio",
				type: ["fire", "flying"]
			},
			{
				name: "Oricorio",
				type: ["electric", "flying"],
				"spriteSuffix": "pom-pom"
			},
			{
				name: "Oricorio",
				type: ["psychic", "flying"],
				"spriteSuffix": "pau"
			},
			{
				name: "Oricorio",
				type: ["ghost", "flying"],
				"spriteSuffix": "sensu"
			}
		]
	},
	{
		id: 742,
		name: "Cutiefly",
		isNfe: true,
		type: ["bug", "fairy"]
	},
	{
		id: 743,
		name: "Ribombee",
		type: ["bug", "fairy"]
	},
	{
		id: 744,
		name: "Rockruff",
		isNfe: true,
		type: ["rock"]
	},
	{
		id: 745,
		name: "Lycanroc",
		type: ["rock"],
		"forms": [
			{
				name: "Lycanroc",
				type: ["rock"],
				"spriteSuffix": "dusk"
			},
			{
				name: "Lycanroc",
				type: ["rock"]
			},
			{
				name: "Lycanroc",
				type: ["rock"],
				"spriteSuffix": "midnight"
			}
		]
	},
	{
		id: 746,
		name: "Wishiwashi",
		type: ["water"],
		"forms": [
			{
				name: "Wishiwashi School",
				type: ["water"],
				"spriteSuffix": "school"
			},
			{
				name: "Wishiwashi",
				type: ["water"]
			}
		]
	},
	{
		id: 747,
		name: "Mareanie",
		isNfe: true,
		type: ["poison", "water"]
	},
	{
		id: 748,
		name: "Toxapex",
		type: ["poison", "water"]
	},
	{
		id: 749,
		name: "Mudbray",
		isNfe: true,
		type: ["ground"]
	},
	{
		id: 750,
		name: "Mudsdale",
		type: ["ground"]
	},
	{
		id: 751,
		name: "Dewpider",
		isNfe: true,
		type: ["water", "bug"]
	},
	{
		id: 752,
		name: "Araquanid",
		type: ["water", "bug"]
	},
	{
		id: 753,
		name: "Fomantis",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 754,
		name: "Lurantis",
		type: ["grass"]
	},
	{
		id: 755,
		name: "Morelull",
		isNfe: true,
		type: ["grass", "fairy"]
	},
	{
		id: 756,
		name: "Shiinotic",
		type: ["grass", "fairy"]
	},
	{
		id: 757,
		name: "Salandit",
		isNfe: true,
		type: ["poison", "fire"]
	},
	{
		id: 758,
		name: "Salazzle",
		type: ["poison", "fire"]
	},
	{
		id: 759,
		name: "Stufful",
		isNfe: true,
		type: ["normal", "fighting"]
	},
	{
		id: 760,
		name: "Bewear",
		type: ["normal", "fighting"]
	},
	{
		id: 761,
		name: "Bounsweet",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 762,
		name: "Steenee",
		isNfe: true,
		type: ["grass"]
	},
	{
		id: 763,
		name: "Tsareena",
		type: ["grass"]
	},
	{
		id: 764,
		name: "Comfey",
		type: ["fairy"]
	},
	{
		id: 765,
		name: "Oranguru",
		type: ["normal", "psychic"]
	},
	{
		id: 766,
		name: "Passimian",
		type: ["fighting"]
	},
	{
		id: 767,
		name: "Wimpod",
		isNfe: true,
		type: ["bug", "water"]
	},
	{
		id: 768,
		name: "Golisopod",
		type: ["bug", "water"]
	},
	{
		id: 769,
		name: "Sandygast",
		isNfe: true,
		type: ["ghost", "ground"]
	},
	{
		id: 770,
		name: "Palossand",
		type: ["ghost", "ground"]
	},
	{
		id: 771,
		name: "Pyukumuku",
		type: ["water"]
	},
	{
		id: 772,
		name: "Type: Null",
		isNfe: true,
		type: ["normal"]
	},
	{
		id: 773,
		name: "Silvally",
		type: ["normal"],
		"forms": [
			{
				name: "Silvally",
				type: ["bug"],
				"spriteSuffix": "bug"
			},
			{
				name: "Silvally",
				type: ["dark"],
				"spriteSuffix": "dark"
			},
			{
				name: "Silvally",
				type: ["dragon"],
				"spriteSuffix": "dragon"
			},
			{
				name: "Silvally",
				type: ["electric"],
				"spriteSuffix": "electric"
			},
			{
				name: "Silvally",
				type: ["fairy"],
				"spriteSuffix": "fairy"
			},
			{
				name: "Silvally",
				type: ["fighting"],
				"spriteSuffix": "fighting"
			},
			{
				name: "Silvally",
				type: ["fire"],
				"spriteSuffix": "fire"
			},
			{
				name: "Silvally",
				type: ["flying"],
				"spriteSuffix": "flying"
			},
			{
				name: "Silvally",
				type: ["ghost"],
				"spriteSuffix": "ghost"
			},
			{
				name: "Silvally",
				type: ["grass"],
				"spriteSuffix": "grass"
			},
			{
				name: "Silvally",
				type: ["ground"],
				"spriteSuffix": "ground"
			},
			{
				name: "Silvally",
				type: ["ice"],
				"spriteSuffix": "ice"
			},
			{
				name: "Silvally",
				type: ["normal"]
			},
			{
				name: "Silvally",
				type: ["poison"],
				"spriteSuffix": "poison"
			},
			{
				name: "Silvally",
				type: ["psychic"],
				"spriteSuffix": "psychic"
			},
			{
				name: "Silvally",
				type: ["rock"],
				"spriteSuffix": "rock"
			},
			{
				name: "Silvally",
				type: ["steel"],
				"spriteSuffix": "steel"
			},
			{
				name: "Silvally",
				type: ["water"],
				"spriteSuffix": "water"
			}
		]
	},
	{
		id: 774,
		name: "Minior",
		type: ["rock", "flying"],
		"forms": [
			{
				name: "Minior Core",
				type: ["rock", "flying"],
				"spriteSuffix": "blue"
			},
			{
				name: "Minior Core",
				type: ["rock", "flying"],
				"spriteSuffix": "green"
			},
			{
				name: "Minior Core",
				type: ["rock", "flying"],
				"spriteSuffix": "indigo"
			},
			{
				name: "Minior",
				type: ["rock", "flying"],
				"spriteSuffix": "meteor"
			},
			{
				name: "Minior Core",
				type: ["rock", "flying"],
				"spriteSuffix": "orange"
			},
			{
				name: "Minior Core",
				type: ["rock", "flying"]
			},
			{
				name: "Minior Core",
				type: ["rock", "flying"],
				"spriteSuffix": "violet"
			},
			{
				name: "Minior Core",
				type: ["rock", "flying"],
				"spriteSuffix": "yellow"
			}
		]
	},
	{
		id: 775,
		name: "Komala",
		type: ["normal"]
	},
	{
		id: 776,
		name: "Turtonator",
		type: ["fire", "dragon"]
	},
	{
		id: 777,
		name: "Togedemaru",
		type: ["electric", "steel"]
	},
	{
		id: 778,
		name: "Mimikyu",
		type: ["ghost", "fairy"]
	},
	{
		id: 779,
		name: "Bruxish",
		type: ["water", "psychic"]
	},
	{
		id: 780,
		name: "Drampa",
		type: ["normal", "dragon"]
	},
	{
		id: 781,
		name: "Dhelmise",
		type: ["ghost", "grass"]
	},
	{
		id: 782,
		name: "Jangmo-o",
		isNfe: true,
		type: ["dragon"]
	},
	{
		id: 783,
		name: "Hakamo-o",
		isNfe: true,
		type: ["dragon", "fighting"]
	},
	{
		id: 784,
		name: "Kommo-o",
		type: ["dragon", "fighting"]
	},
	{
		id: 785,
		name: "Tapu Koko",
		type: ["electric", "fairy"]
	},
	{
		id: 786,
		name: "Tapu Lele",
		type: ["psychic", "fairy"]
	},
	{
		id: 787,
		name: "Tapu Bulu",
		type: ["grass", "fairy"]
	},
	{
		id: 788,
		name: "Tapu Fini",
		type: ["water", "fairy"]
	},
	{
		id: 789,
		name: "Cosmog",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 790,
		name: "Cosmoem",
		isNfe: true,
		type: ["psychic"]
	},
	{
		id: 791,
		name: "Solgaleo",
		"isUber": true,
		type: ["psychic", "steel"]
	},
	{
		id: 792,
		name: "Lunala",
		"isUber": true,
		type: ["psychic", "ghost"]
	},
	{
		id: 793,
		name: "Nihilego",
		type: ["rock", "poison"]
	},
	{
		id: 794,
		name: "Buzzwole",
		type: ["bug", "fighting"]
	},
	{
		id: 795,
		name: "Pheromosa",
		"isUber": true,
		type: ["bug", "fighting"]
	},
	{
		id: 796,
		name: "Xurkitree",
		type: ["electric"]
	},
	{
		id: 797,
		name: "Celesteela",
		type: ["steel", "flying"]
	},
	{
		id: 798,
		name: "Kartana",
		type: ["grass", "steel"]
	},
	{
		id: 799,
		name: "Guzzlord",
		type: ["dark", "dragon"]
	},
	{
		id: 800,
		name: "Necrozma",
		type: ["psychic"],
		"forms": [
			{
				name: "Necrozma",
				type: ["psychic"]
			},
			{
				name: "Dawn Wings Necrozma",
				"isUber": true,
				type: ["psychic", "ghost"],
				"spriteSuffix": "dawnwings"
			},
			{
				name: "Dusk Mane Necrozma",
				"isUber": true,
				type: ["psychic", "steel"],
				"spriteSuffix": "duskmane"
			},
			{
				name: "Ultra Necrozma",
				"isUber": true,
				type: ["psychic", "dragon"],
				"spriteSuffix": "ultra"
			}
		]
	},
	{
		id: 801,
		name: "Magearna",
		type: ["steel", "fairy"]
	},
	{
		id: 802,
		name: "Marshadow",
		"isUber": true,
		type: ["fighting", "ghost"]
	},
	{
		id: 803,
		name: "Poipole",
		isNfe: true,
		type: ["poison"]
	},
	{
		id: 804,
		name: "Naganadel",
		"isUber": true,
		type: ["poison", "dragon"]
	},
	{
		id: 805,
		name: "Stakataka",
		type: ["rock", "steel"]
	},
	{
		id: 806,
		name: "Blacephalon",
		type: ["fire", "ghost"]
	},
	{
		id: 807,
		name: "Zeraora",
		type: ["electric"]
	},
	{
		id: 808,
		name: "Meltan",
		isNfe: true,
		type: ["steel"]
	},
	{
		id: 809,
		name: "Melmetal",
		type: ["steel"],
		"forms": [
			{
				name: "Melmetal",
				type: [
					"steel"
				]
			},
			{
				name: "Melmetal Gigantamax",
				type: [
					"steel"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
		{
		id: 810,
		name: "Grookey",
		isNfe: true,
		type: [
			"grass"
		]
	},
	{
		id: 811,
		name: "Thwackey",
		isNfe: true,
		type: [
			"grass"
		]
	},
	{
		id: 812,
		name: "Rillaboom",
		type: [
			"grass"
		]
	},
	{
		id: 813,
		name: "Scorbunny",
		isNfe: true,
		type: [
			"fire"
		]
	},
	{
		id: 814,
		name: "Raboot",
		isNfe: true,
		type: [
			"fire"
		]
	},
	{
		id: 815,
		name: "Cinderace",
		type: [
			"fire"
		]
	},
	{
		id: 816,
		name: "Sobble",
		isNfe: true,
		type: [
			"water"
		]
	},
	{
		id: 817,
		name: "Drizzile",
		isNfe: true,
		type: [
			"water"
		]
	},
	{
		id: 818,
		name: "Inteleon",
		type: [
			"water"
		]
	},
	{
		id: 819,
		name: "Skwovet",
		isNfe: true,
		type: [
			"normal"
		]
	},
	{
		id: 820,
		name: "Greedent",
		type: [
			"normal"
		]
	},
	{
		id: 821,
		name: "Rookidee",
		isNfe: true,
		type: [
			"flying"
		]
	},
	{
		id: 822,
		name: "Corvisquire",
		isNfe: true,
		type: [
			"flying"
		]
	},
	{
		id: 823,
		name: "Corviknight",
		type: [
			"flying",
			"steel"
		],
		"forms": [
			{
				name: "Corviknight",
				type: [
					"flying",
					"steel"
				]
			},
			{
				name: "Corviknight Gigantamax",
				type: [
					"flying",
					"steel"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 824,
		name: "Blipbug",
		isNfe: true,
		type: [
			"bug"
		]
	},
	{
		id: 825,
		name: "Dottler",
		isNfe: true,
		type: [
			"bug",
			"psychic"
		]
	},
	{
		id: 826,
		name: "Orbeetle",
		type: [
			"bug",
			"psychic"
		],
		"forms": [
			{
				name: "Orbeetle",
				type: [
					"bug",
					"psychic"
				]
			},
			{
				name: "Orbeetle Gigantamax",
				type: [
					"bug",
					"psychic"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 827,
		name: "Nickit",
		isNfe: true,
		type: [
			"dark"
		]
	},
	{
		id: 828,
		name: "Thievul",
		type: [
			"dark"
		]
	},
	{
		id: 829,
		name: "Gossifleur",
		isNfe: true,
		type: [
			"grass"
		]
	},
	{
		id: 830,
		name: "Eldegoss",
		type: [
			"grass"
		]
	},
	{
		id: 831,
		name: "Wooloo",
		isNfe: true,
		type: [
			"normal"
		]
	},
	{
		id: 832,
		name: "Dubwool",
		type: [
			"normal"
		]
	},
	{
		id: 833,
		name: "Chewtle",
		isNfe: true,
		type: [
			"water"
		]
	},
	{
		id: 834,
		name: "Drednaw",
		type: [
			"water",
			"rock"
		],
		"forms": [
			{
				name: "Drednaw",
				type: [
					"water",
					"rock"
				]
			},
			{
				name: "Drednaw Gigantamax",
				type: [
					"water",
					"rock"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 835,
		name: "Yamper",
		isNfe: true,
		type: [
			"electric"
		]
	},
	{
		id: 836,
		name: "Boltund",
		type: [
			"electric"
		]
	},
	{
		id: 837,
		name: "Rolycoly",
		isNfe: true,
		type: [
			"rock"
		]
	},
	{
		id: 838,
		name: "Carkol",
		isNfe: true,
		type: [
			"rock",
			"fire"
		]
	},
	{
		id: 839,
		name: "Coalossal",
		type: [
			"rock",
			"fire"
		],
		"forms": [
			{
				name: "Coalossal",
				type: [
					"rock",
					"fire"
				]
			},
			{
				name: "Coalossal Gigantamax",
				type: [
					"rock",
					"fire"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 840,
		name: "Applin",
		isNfe: true,
		type: [
			"grass",
			"dragon"
		]
	},
	{
		id: 841,
		name: "Flapple",
		type: [
			"grass",
			"dragon"
		],
		"forms": [
			{
				name: "Flapple",
				type: [
					"grass",
					"dragon"
				]
			},
			{
				name: "Flapple Gigantamax",
				type: [
					"grass",
					"dragon"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 842,
		name: "Appletun",
		type: [
			"grass",
			"dragon"
		],
		"forms": [
			{
				name: "Appletun",
				type: [
					"grass",
					"dragon"
				]
			},
			{
				name: "Appletun Gigantamax",
				type: [
					"grass",
					"dragon"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 843,
		name: "Silicobra",
		isNfe: true,
		type: [
			"ground"
		]
	},
	{
		id: 844,
		name: "Sandaconda",
		type: [
			"ground"
		],
		"forms": [
			{
				name: "Sandaconda",
				type: [
					"ground"
				]
			},
			{
				name: "Sandaconda Gigantamax",
				type: [
					"ground"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 845,
		name: "Cramorant",
		type: [
			"flying",
			"water"
		]
	},
	{
		id: 846,
		name: "Arrokuda",
		isNfe: true,
		type: [
			"water"
		]
	},
	{
		id: 847,
		name: "Barraskewda",
		type: [
			"water"
		]
	},
	{
		id: 848,
		name: "Toxel",
		isNfe: true,
		type: [
			"electric",
			"poison"
		]
	},
	{
		id: 849,
		name: "Toxtricity",
		type: [
			"electric",
			"poison"
		],
		"forms": [
			{
				name: "Toxtricity",
				type: [
					"electric",
					"poison"
				]
			},
			{
				name: "Toxtricity",
				type: [
					"electric",
					"poison"
				],
				"spriteSuffix": "l"
			},
			{
				name: "Toxtricity Gigantamax",
				type: [
					"electric",
					"poison"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 850,
		name: "Sizzlipede",
		isNfe: true,
		type: [
			"fire",
			"bug"
		]
	},
	{
		id: 851,
		name: "Centiskorch",
		type: [
			"fire",
			"bug"
		],
		"forms": [
			{
				name: "Centiskorch",
				type: [
					"fire",
					"bug"
				]
			},
			{
				name: "Centiskorch Gigantamax",
				type: [
					"fire",
					"bug"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 852,
		name: "Clobbopus",
		isNfe: true,
		type: [
			"fighting"
		]
	},
	{
		id: 853,
		name: "Grapploct",
		type: [
			"fighting"
		]
	},
	{
		id: 854,
		name: "Sinistea",
		isNfe: true,
		type: [
			"ghost"
		]
	},
	{
		id: 855,
		name: "Polteageist",
		type: [
			"ghost"
		]
	},
	{
		id: 856,
		name: "Hatenna",
		isNfe: true,
		type: [
			"psychic"
		]
	},
	{
		id: 857,
		name: "Hattrem",
		isNfe: true,
		type: [
			"psychic"
		]
	},
	{
		id: 858,
		name: "Hatterene",
		type: [
			"psychic",
			"fairy"
		],
		"forms": [
			{
				name: "Hatterene",
				type: [
					"psychic",
					"fairy"
				]
			},
			{
				name: "Hatterene Gigantamax",
				type: [
					"psychic",
					"fairy"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 859,
		name: "Impidimp",
		isNfe: true,
		type: [
			"dark",
			"fairy"
		]
	},
	{
		id: 860,
		name: "Morgrem",
		isNfe: true,
		type: [
			"dark",
			"fairy"
		]
	},
	{
		id: 861,
		name: "Grimmsnarl",
		type: [
			"dark",
			"fairy"
		],
		"forms": [
			{
				name: "Grimmsnarl",
				type: [
					"dark",
					"fairy"
				]
			},
			{
				name: "Grimmsnarl Gigantamax",
				type: [
					"dark",
					"fairy"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 862,
		name: "Obstagoon",
		type: [
			"dark",
			"normal"
		]
	},
	{
		id: 863,
		name: "Perrserker",
		type: [
			"steel"
		]
	},
	{
		id: 864,
		name: "Cursola",
		type: [
			"ghost"
		]
	},
	{
		id: 865,
		name: "Sirfetch'd",
		isNfe: true,
		type: [
			"fighting"
		]
	},
	{
		id: 866,
		name: "Mr. Rime",
		type: [
			"psychic",
			"ice"
		]
	},
	{
		id: 867,
		name: "Runerigus",
		type: [
			"ground",
			"ghost"
		]
	},
	{
		id: 868,
		name: "Milcery",
		isNfe: true,
		type: [
			"fairy"
		]
	},
	{
		id: 869,
		name: "Alcremie",
		type: [
			"fairy"
		],
		"forms": [
			{
				name: "Alcremie",
				type: [
					"fairy"
				]
			},
			{
				name: "Alcremie Gigantamax",
				type: [
					"fairy"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 870,
		name: "Falinks",
		type: [
			"fighting"
		]
	},
	{
		id: 871,
		name: "Pincurchin",
		type: [
			"electric"
		]
	},
	{
		id: 872,
		name: "Snom",
		isNfe: true,
		type: [
			"ice",
			"bug"
		]
	},
	{
		id: 873,
		name: "Frosmoth",
		type: [
			"ice",
			"bug"
		]
	},
	{
		id: 874,
		name: "Stonjourner",
		type: [
			"rock"
		]
	},
	{
		id: 875,
		name: "Eiscue",
		type: [
			"ice"
		],
		"forms": [
			{
				name: "Eiscue",
				type: [
					"ice"
				]
			},
			{
				name: "Eiscue",
				type: [
					"ice"
				],
				"spriteSuffix": "n"
			}
		]
	},
	{
		id: 876,
		name: "Indeedee",
		type: [
			"psychic",
			"normal"
		],
		"forms": [
			{
				name: "Indeedee",
				type: [
					"psychic",
					"normal"
				]
			},
			{
				name: "Indeedee",
				type: [
					"psychic",
					"normal"
				],
				"spriteSuffix": "f"
			}
		]
	},
	{
		id: 877,
		name: "Morpeko",
		type: [
			"electric",
			"dark"
		]
	},
	{
		id: 878,
		name: "Cufant",
		isNfe: true,
		type: [
			"steel"
		]
	},
	{
		id: 879,
		name: "Copperajah",
		type: [
			"steel"
		],
		"forms": [
			{
				name: "Copperajah",
				type: [
					"steel"
				]
			},
			{
				name: "Copperajah Gigantamax",
				type: [
					"steel"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 880,
		name: "Dracozolt",
		type: [
			"electric",
			"dragon"
		]
	},
	{
		id: 881,
		name: "Arctozolt",
		type: [
			"electric",
			"ice"
		]
	},
	{
		id: 882,
		name: "Dracovish",
		type: [
			"water",
			"dragon"
		]
	},
	{
		id: 883,
		name: "Arctovish",
		type: [
			"water",
			"ice"
		]
	},
	{
		id: 884,
		name: "Duraludon",
		type: [
			"steel",
			"dragon"
		],
		"forms": [
			{
				name: "Duraludon",
				type: [
					"steel",
					"dragon"
				]
			},
			{
				name: "Duraludon Gigantamax",
				type: [
					"steel",
					"dragon"
				],
				"spriteSuffix": "gigantamax",
				"isGigantamax": true
			}
		]
	},
	{
		id: 885,
		name: "Dreepy",
		isNfe: true,
		type: [
			"dragon",
			"ghost"
		]
	},
	{
		id: 886,
		name: "Drakloak",
		isNfe: true,
		type: [
			"dragon",
			"ghost"
		]
	},
	{
		id: 887,
		name: "Dragapult",
		type: [
			"dragon",
			"ghost"
		]
	},
	{
		id: 888,
		name: "Zacian",
		"isUber": true,
		type: [
			"fairy"
		],
		"forms": [
			{
				name: "Zacian",
				"isUber": true,
				type: [
					"fairy"
				]
			},
			{
				name: "Zacian",
				"isUber": true,
				type: [
					"fairy",
					"steel"
				],
				"spriteSuffix": "c"
			}
		]
	},
	{
		id: 889,
		name: "Zamazenta",
		"isUber": true,
		type: [
			"fighting"
		],
		"forms": [
			{
				name: "Zamazenta",
				"isUber": true,
				type: [
					"fighting"
				]
			},
			{
				name: "Zamazenta",
				"isUber": true,
				type: [
					"fighting",
					"steel"
				],
				"spriteSuffix": "c"
			}
		]
	},
	{
		id: 890,
		name: "Eternatus",
		"isUber": true,
		type: [
			"poison",
			"dragon"
		],
		"forms": [
			{
				name: "Eternatus",
				"isUber": true,
				type: [
					"poison",
					"dragon"
				]
			},
			{
				name: "Eternatus Eternamax",
				"isUber": true,
				type: [
					"poison",
					"dragon"
				],
				"spriteSuffix": "eternamax"
			}
		]
	}]