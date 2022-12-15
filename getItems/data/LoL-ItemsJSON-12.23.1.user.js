// ==UserScript==
// @name        LoL-ItemsJSON
// @version     12.23.1
// @author      Abdul Haseeb
// @include     https://mobafire.com/league-of-legends/build/*
// @include     https://www.mobafire.com/league-of-legends/build/*
// @include     https://probuilds.net/guide/show/*
// @include     https://www.probuilds.net/guide/show/*
// ==/UserScript==

 const itemCodes = {"Boots":1001,"Faerie Charm":1004,"Rejuvenation Bead":1006,"Giant's Belt":1011,"Cloak of Agility":1018,"Blasting Wand":1026,"Sapphire Crystal":1027,"Ruby Crystal":1028,"Cloth Armor":1029,"Chain Vest":1031,"Null-Magic Mantle":1033,"Emberknife":1035,"Long Sword":1036,"Pickaxe":1037,"B. F. Sword":1038,"Hailblade":1039,"Obsidian Edge":1040,"Dagger":1042,"Recurve Bow":1043,"Amplifying Tome":1052,"Vampiric Scepter":1053,"Doran's Shield":1054,"Doran's Blade":1055,"Doran's Ring":1056,"Negatron Cloak":1057,"Needlessly Large Rod":1058,"Dark Seal":1082,"Cull":1083,"Scorchclaw Pup":1101,"Gustwalker Hatchling":1102,"Mosstomper Seedling":1103,"Eye of the Herald":3513,"Penetrating Bullets":1500,"Fortification":1501,"Reinforced Armor":1506,"Warden's Eye":1503,"Vanguard":1504,"Lightning Rod":1505,"Overcharged":1507,"Anti-tower Socks":1508,"Gusto":1509,"Phreakish Gusto":1510,"Super Mech Armor":1511,"Super Mech Power Field":1512,"Turret Plating":1515,"Structure Bounty":1519,"OvererchargedHA":1520,"Health Potion":2003,"Total Biscuit of Everlasting Will":2010,"Kircheis Shard":2015,"Refillable Potion":2031,"Corrupting Potion":2033,"Guardian's Horn":2051,"Poro-Snax":2052,"Control Ward":2055,"Shurelya's Battlesong":2065,"Elixir of Iron":2138,"Elixir of Sorcery":2139,"Elixir of Wrath":2140,"Minion Dematerializer":2403,"Commencing Stopwatch":2419,"Stopwatch":2420,"Broken Stopwatch":2424,"Slightly Magical Footwear":2422,"Perfectly Timed Stopwatch":2423,"Evenshroud":3001,"Archangel's Staff":3003,"Manamune":3004,"Berserker's Greaves":3006,"Boots of Swiftness":3009,"Chemtech Putrifier":3011,"Sorcerer's Shoes":3020,"Glacial Buckler":3024,"Guardian Angel":3026,"Infinity Edge":3031,"Mortal Reminder":3033,"Last Whisper":3035,"Lord Dominik's Regards":3036,"Seraph's Embrace":3040,"Mejai's Soulstealer":3041,"Muramana":3042,"Phage":3044,"Phantom Dancer":3046,"Plated Steelcaps":3047,"Zeke's Convergence":3050,"Hearthbound Axe":3051,"Sterak's Gage":3053,"Sheen":3057,"Spirit Visage":3065,"Winged Moonplate":3066,"Kindlegem":3067,"Sunfire Aegis":3068,"Tear of the Goddess":3070,"Black Cleaver":3071,"Bloodthirster":3072,"Ravenous Hydra":3074,"Thornmail":3075,"Bramble Vest":3076,"Tiamat":3077,"Trinity Force":3078,"Warden's Mail":3082,"Warmog's Armor":3083,"Heartsteel":3084,"Runaan's Hurricane":3085,"Zeal":3086,"Rabadon's Deathcap":3089,"Wit's End":3091,"Rapid Firecannon":3094,"Stormrazor":3095,"Lich Bane":3100,"Banshee's Veil":3102,"Aegis of the Legion":3105,"Redemption":3107,"Fiendish Codex":3108,"Knight's Vow":3109,"Frozen Heart":3110,"Mercury's Treads":3111,"Guardian's Orb":3112,"Aether Wisp":3113,"Forbidden Idol":3114,"Nashor's Tooth":3115,"Rylai's Crystal Scepter":3116,"Mobility Boots":3117,"Winter's Approach":3119,"Fimbulwinter":3121,"Executioner's Calling":3123,"Guinsoo's Rageblade":3124,"Caulfield's Warhammer":3133,"Serrated Dirk":3134,"Void Staff":3135,"Mercurial Scimitar":3139,"Quicksilver Sash":3140,"Youmuu's Ghostblade":3142,"Randuin's Omen":3143,"Hextech Alternator":3145,"Hextech Rocketbelt":3152,"Blade of The Ruined King":3153,"Hexdrinker":3155,"Maw of Malmortius":3156,"Zhonya's Hourglass":3157,"Ionian Boots of Lucidity":3158,"Spear Of Shojin":3161,"Morellonomicon":3165,"Guardian's Blade":3177,"Umbral Glaive":3179,"Hullbreaker":3181,"Guardian's Hammer":3184,"Locket of the Iron Solari":3190,"Seeker's Armguard":3191,"Gargoyle Stoneplate":3193,"Spectre's Cowl":3211,"Mikael's Blessing":3222,"Scarecrow Effigy":3330,"Stealth Ward":3340,"Farsight Alteration":3363,"Oracle Lens":3364,"Your Cut":3400,"Ardent Censer":3504,"Essence Reaver":3508,"Kalista's Black Spear":3600,"Dead Man's Plate":3742,"Titanic Hydra":3748,"Crystalline Bracer":3801,"Lost Chapter":3802,"Catalyst of Aeons":3803,"Edge of Night":3814,"Spellthief's Edge":3850,"Frostfang":3851,"Shard of True Ice":3853,"Steel Shoulderguards":3854,"Runesteel Spaulders":3855,"Pauldrons of Whiterock":3857,"Relic Shield":3858,"Targon's Buckler":3859,"Bulwark of the Mountain":3860,"Spectral Sickle":3862,"Harrowing Crescent":3863,"Black Mist Scythe":3864,"<rarityLegendary>Fire at Will</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>":3901,"<rarityLegendary>Death's Daughter</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>":3902,"<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>":3903,"Oblivion Orb":3916,"Imperial Mandate":4005,"Force of Nature":4401,"The Golden Spatula":4403,"Horizon Focus":4628,"Cosmic Drive":4629,"Blighting Jewel":4630,"Verdant Barrier":4632,"Riftmaker":4633,"Leeching Leer":4635,"Night Harvester":4636,"Demonic Embrace":4637,"Watchful Wardstone":4638,"Stirring Wardstone":4641,"Bandleglass Mirror":4642,"Vigilant Wardstone":4643,"Crown of the Shattered Queen":4644,"Shadowflame":4645,"Ironspike Whip":6029,"Silvermere Dawn":6035,"Death's Dance":6333,"Chempunk Chainsword":6609,"Staff of Flowing Water":6616,"Moonstone Renewer":6617,"Goredrinker":6630,"Stridebreaker":6631,"Divine Sunderer":6632,"Liandry's Anguish":6653,"Luden's Tempest":6655,"Everfrost":6656,"Rod of Ages":6657,"Bami's Cinder":6660,"Iceborn Gauntlet":6662,"Turbo Chemtank":6664,"Jak'Sho, The Protean":6665,"Radiant Virtue":6667,"Noonquiver":6670,"Galeforce":6671,"Kraken Slayer":6672,"Immortal Shieldbow":6673,"Navori Quickblades":6675,"The Collector":6676,"Rageknife":6677,"Duskblade of Draktharr":6691,"Eclipse":6692,"Prowler's Claw":6693,"Serylda's Grudge":6694,"Serpent's Fang":6695,"Axiom Arc":6696,"Sandshrike's Claw":7000,"Syzygy":7001,"Draktharr's Shadowcarver":7002,"Frozen Fist":7005,"Typhoon":7006,"Wyrmfallen Sacrifice":7007,"Bloodward":7008,"Icathia's Curse":7009,"Vespertide":7010,"Upgraded Aeropack":7011,"Liandry's Lament":7012,"Eye of Luden":7013,"Eternal Winter":7014,"Ceaseless Hunger":7015,"Dreamshatter":7016,"Deicide":7017,"Infinity Force":7018,"Reliquary of the Golden Dawn":7019,"Shurelya's Requiem":7020,"Starcaster":7021,"Seat of Command":7022,"Equinox":7023,"Caesura":7024,"Leviathan":7025,"The Unspoken Parasite":7026,"Primordial Dawn":7027,"Infinite Convergence":7028,"Gangplank Placeholder":7050,"Anathema's Chains":8001,"Abyssal Mask":8020,"Botas":1001,"Amuleto de las hadas":1004,"Perla de rejuvenecimiento":1006,"Cinturón de gigante":1011,"Capa de agilidad":1018,"Vara explosiva":1026,"Cristal de zafiro":1027,"Cristal de rubí":1028,"Armadura de tela":1029,"Chaleco de cadenas":1031,"Manto de anulación de magia":1033,"Cuchillo de ascuas":1035,"Espada larga":1036,"Pico":1037,"Espadón":1038,"Espada de granizo":1039,"Filo de obsidiana":1040,"Daga":1042,"Arco curvo":1043,"Tomo amplificador":1052,"Cetro vampírico":1053,"Escudo de Doran":1054,"Espada de Doran":1055,"Anillo de Doran":1056,"Capa negatrón":1057,"Vara innecesariamente grande":1058,"Sello oscuro":1082,"Preferencia":1083,"Cachorro de Garra ígnea":1101,"Cría de Caminabrisas":1102,"Brote de Brincamontes":1103,"Ojo del Heraldo":3513,"Balas penetrantes":1500,"Fortificación":1501,"Armadura reforzada":1506,"Ojo del guardián":1503,"Vanguardia":1504,"Vara del rayo":1505,"Sobrecargado":1520,"Calcetines antitorres":1508,"Afán":1509,"Afán peculiar":1510,"Armadura de supermecha":1511,"Campo energético de supermecha":1512,"Placas de torreta":1515,"Recompensa de estructura":1519,"Poción de vida":2003,"Galleta de la voluntad eterna":2010,"Fragmento de Kircheis":2015,"Poción reutilizable":2031,"Poción de corrupción":2033,"Cuerno del guardián":2051,"Snack para poros":2052,"Guardián de control":2055,"Canción de batalla de Shurelya":2065,"Elixir de hierro":2138,"Elixir de brujería":2139,"Elixir de cólera":2140,"Desmaterializador de súbditos":2403,"Cronómetro iniciado":2419,"Cronómetro":2420,"Cronómetro estropeado":2424,"Calzado ligeramente mágico":2422,"Cronómetro oportuno":2423,"Mortaja de la quietud":3001,"Bastón del arcángel":3003,"Grebas de berserker":3006,"Botas de rapidez":3009,"Putrificador tecnoquímico":3011,"Botas de hechicero":3020,"Broquel glacial":3024,"Ángel de la guarda":3026,"Filo infinito":3031,"Recordatorio letal":3033,"Últimas palabras":3035,"Recuerdos de lord Dominik":3036,"Abrazo del serafín":3040,"Robaalmas de Mejai":3041,"Bacteriófago":3044,"Bailarín espectral":3046,"Botas blindadas":3047,"Convergencia de Zeke":3050,"Hacha hogareña":3051,"Calibrador de Sterak":3053,"Brillo":3057,"Rostro espiritual":3065,"Armadura lunar alada":3066,"Gema avivadora":3067,"Égida de fuego solar":3068,"Lágrima de la diosa":3070,"Cuchilla negra":3071,"Sanguinaria":3072,"Hidra voraz":3074,"Malla de espinas":3075,"Chaleco de zarzas":3076,"Fuerza de trinidad":3078,"Malla del guardián":3082,"Armadura de Warmog":3083,"Corazón de acero":3084,"Huracán de Runaan":3085,"Fervor":3086,"Sombrero mortal de Rabadon":3089,"Final del ingenio":3091,"Cañón de fuego rápido":3094,"Navaja de asalto":3095,"Perdición del liche":3100,"Velo del hada de la muerte":3102,"Protección de la legión":3105,"Redención":3107,"Códice diabólico":3108,"Promesa de caballero":3109,"Corazón de hielo":3110,"Botas de mercurio":3111,"Orbe del guardián":3112,"Brisa de éter":3113,"Ídolo prohibido":3114,"Diente de Nashor":3115,"Cetro de cristal de Rylai":3116,"Botas de movilidad":3117,"Llegada del invierno":3119,"El gran invierno":3121,"Llamada del verdugo":3123,"Hoja de furia de Guinsoo":3124,"Martillo de guerra de Caulfield":3133,"Daga dentada":3134,"Bastón del Vacío":3135,"Cimitarra mercurial":3139,"Fajín de mercurio":3140,"Filo fantasmal de Youmuu":3142,"Presagio de Randuin":3143,"Alternador hextech":3145,"Cintomisil hextech":3152,"Hoja del rey arruinado":3153,"Sorbemaleficios":3155,"Fauces de Malmortius":3156,"Reloj de arena de Zhonya":3157,"Botas jonias de la lucidez":3158,"Lanza de Shojin":3161,"Morellonomicón":3165,"Espada del guardián":3177,"Guja sombría":3179,"Rompecascos":3181,"Martillo del guardián":3184,"Medallón de los Solari de Hierro":3190,"Brazalete de la buscadora":3191,"Protector pétreo de gárgola":3193,"Hábito del espectro":3211,"Bendición de Mikael":3222,"Figura de espantapájaros":3330,"Guardián invisible":3340,"Visión lejana modificada":3363,"Lente del oráculo":3364,"Tu parte":3400,"Incensario ardiente":3504,"Segador de esencia":3508,"La lanza negra de Kalista":3600,"Coraza del muerto":3742,"Hidra titánica":3748,"Brazal cristalino":3801,"Capítulo perdido":3802,"Catalizador de eones":3803,"Filo de la noche":3814,"Daga de hechicero":3850,"Colmillo de escarcha":3851,"Fragmento de Hielo Puro":3853,"Hombreras de acero":3854,"Hombreras de acero rúnico":3855,"Hombreras de Rocablanca":3857,"Escudo reliquia":3858,"Broquel de Targon":3859,"Baluarte de la montaña":3860,"Hoz espectral":3862,"Creciente de Harrowing":3863,"Guadaña de la Niebla Negra":3864,"<rarityLegendary>Fuego a discreción</rarityLegendary><br><subtitleLeft><silver>500 serpientes de plata</silver></subtitleLeft>":3901,"<rarityLegendary>Hija de la muerte</rarityLegendary><br><subtitleLeft><silver>500 serpientes de plata</silver></subtitleLeft>":3902,"<rarityLegendary>Subir moral</rarityLegendary><br><subtitleLeft><silver>500 serpientes de plata</silver></subtitleLeft>":3903,"Orbe del olvido":3916,"Mandato imperial":4005,"Fuerza de la naturaleza":4401,"Espátula dorada":4403,"Precisión infalible":4628,"Impulso cósmico":4629,"Joya de la plaga":4630,"Barrera frondosa":4632,"Creagrietas":4633,"Lapa maliciosa":4635,"Cosechador nocturno":4636,"Abrazo demoníaco":4637,"Piedra de guardianes atenta":4638,"Piedra de visión inquieta":4641,"Espejo de cristal de Bandle":4642,"Piedra de visión vigilante":4643,"Corona de la Reina Quebrada":4644,"Llamasombría":4645,"Látigo puntahierro":6029,"Amanecer de Meraplata":6035,"Baile de la muerte":6333,"Mecanoespada punki":6609,"Bastón de aguas fluidas":6616,"Renovación de piedra lunar":6617,"Chupasangre":6630,"Cortasendas":6631,"Desgarrador divino":6632,"Desconsuelo de Liandry":6653,"Tempestad de Luden":6655,"Escarcha eterna":6656,"Vara de las edades":6657,"Rescoldo de Bami":6660,"Guantelete de hielo":6662,"Quimiotanque turbo":6664,"Jak'Sho, el Proteico":6665,"Virtud radiante":6667,"Carcaj del mediodía":6670,"Viento huracanado":6671,"Verdugo de krakens":6672,"Arcoescudo inmortal":6673,"Filoveloz de Navori":6675,"Recaudadora":6676,"Cuchillo de ira":6677,"Filoscuro de Draktharr":6691,"Garra de merodeador":6693,"Rencor de Serylda":6694,"Colmillo de serpiente":6695,"Arco axiomático":6696,"Garra de ave de las arenas":7000,"Sizigia":7001,"Tallador de sombras de Draktharr":7002,"Puño helado":7005,"Tifón":7006,"Sacrificio del caído":7007,"Guardián sangriento":7008,"Maldición de Icathia":7009,"Marea vespertina":7010,"Mochila aérea mejorada":7011,"Lamento de Liandry":7012,"Ojo de Luden":7013,"Invierno eterno":7014,"Hambre incesante":7015,"Destrozasueños":7016,"Deicidio":7017,"Fuerza del infinito":7018,"Relicario del Alba Dorada":7019,"Réquiem de Shurelya":7020,"Lanzaestrellas":7021,"Asiento de mando":7022,"Equinoccio":7023,"Cesura":7024,"Leviatán":7025,"El parásito tácito":7026,"Amanecer primordial":7027,"Convergencia infinita":7028,"Provisional de Gangplank":7050,"Cadenas de Anatema":8001,"Máscara abisal":8020}; const championCodes = {"aatrox":266,"ahri":103,"akali":84,"akshan":166,"alistar":12,"amumu":32,"anivia":34,"annie":1,"aphelios":523,"ashe":22,"aurelionsol":136,"azir":268,"bard":432,"belveth":200,"blitzcrank":53,"brand":63,"braum":201,"caitlyn":51,"camille":164,"cassiopeia":69,"chogath":31,"corki":42,"darius":122,"diana":131,"draven":119,"drmundo":36,"ekko":245,"elise":60,"evelynn":28,"ezreal":81,"fiddlesticks":9,"fiora":114,"fizz":105,"galio":3,"gangplank":41,"garen":86,"gnar":150,"gragas":79,"graves":104,"gwen":887,"hecarim":120,"heimerdinger":74,"illaoi":420,"irelia":39,"ivern":427,"janna":40,"jarvaniv":59,"jax":24,"jayce":126,"jhin":202,"jinx":222,"kaisa":145,"kalista":429,"karma":43,"karthus":30,"kassadin":38,"katarina":55,"kayle":10,"kayn":141,"kennen":85,"khazix":121,"kindred":203,"kled":240,"kogmaw":96,"ksante":897,"leblanc":7,"leesin":64,"leona":89,"lillia":876,"lissandra":127,"lucian":236,"lulu":117,"lux":99,"malphite":54,"malzahar":90,"maokai":57,"masteryi":11,"missfortune":21,"monkeyking":62,"mordekaiser":82,"morgana":25,"nami":267,"nasus":75,"nautilus":111,"neeko":518,"nidalee":76,"nilah":895,"nocturne":56,"nunu":20,"olaf":2,"orianna":61,"ornn":516,"pantheon":80,"poppy":78,"pyke":555,"qiyana":246,"quinn":133,"rakan":497,"rammus":33,"reksai":421,"rell":526,"renata":888,"renekton":58,"rengar":107,"riven":92,"rumble":68,"ryze":13,"samira":360,"sejuani":113,"senna":235,"seraphine":147,"sett":875,"shaco":35,"shen":98,"shyvana":102,"singed":27,"sion":14,"sivir":15,"skarner":72,"sona":37,"soraka":16,"swain":50,"sylas":517,"syndra":134,"tahmkench":223,"taliyah":163,"talon":91,"taric":44,"teemo":17,"thresh":412,"tristana":18,"trundle":48,"tryndamere":23,"twistedfate":4,"twitch":29,"udyr":77,"urgot":6,"varus":110,"vayne":67,"veigar":45,"velkoz":161,"vex":711,"vi":254,"viego":234,"viktor":112,"vladimir":8,"volibear":106,"warwick":19,"xayah":498,"xerath":101,"xinzhao":5,"yasuo":157,"yone":777,"yorick":83,"yuumi":350,"zac":154,"zed":238,"zeri":221,"ziggs":115,"zilean":26,"zoe":142,"zyra":143};
const needToAddSpaces = {"aurelionsol":"aurelionsol","belveth":"belveth","chogath":"chogath","dr.mundo":"drmundo","jarvaniv":"jarvaniv","kaisa":"kaisa","khazix":"khazix","kogmaw":"kogmaw","ksante":"ksante","leblanc":"leblanc","leesin":"leesin","masteryi":"masteryi","missfortune":"missfortune","wukong":"monkeyking","nunu&willump":"nunu","reksai":"reksai","renataglasc":"renata","tahmkench":"tahmkench","twistedfate":"twistedfate","velkoz":"velkoz","xinzhao":"xinzhao"};
const scrapeMobaFire = () => {
	let champion = document.querySelector('.champ-tabs__more').innerText.toLowerCase();
	champion = champion.replace('more ', '').replace(' guides', '').replaceAll(' ', '').replace('\'', '');
	let setTitle = document.querySelector('.view-guide__banner__title span').innerText.trim();
	let author = document.querySelector(".view-guide__banner__author").querySelector("a").innerHTML + " @ " + document.querySelector(".view-guide__banner__author").querySelector("a").href;
	// selectors
	const itemsContainer = document.querySelector('.view-guide__build__items');
	const items = itemsContainer.querySelectorAll('.view-guide__items');
	// 
	const itemsArray = [];
	items.forEach(item => {
		const titleClass = '.view-guide__items__bar';
		const contentClass = '.view-guide__items__content';
		const title = item.querySelector(`${titleClass} span`);
		const content = item.querySelectorAll(`${contentClass} span a`);
		itemsArray.push({
			title: title.innerText,
			content: [...content].map(item => item.innerText)
			});
	});
	return {
		title: setTitle,
		author,
		champion,
		items: itemsArray
	}
}

const ItemSet = function(data) {
	const self = this;
	self.title = data.title;
	self.items = data.items;
	self.champion = data.champion;
	self.author = data.author;
	//  
	self.getItemBlocks = () => self.items.map((item) => {
		const { title, content } = item;
		const trimmedContent = content.map((item) => {
			const trimmedItem = item.trim();
			return trimmedItem;
		});
		return {
			title,
			content: trimmedContent,
		};
	}).map((item) => {
		const { title, content } = item;
		const finalContent = content.map((item) => {
			const finalItem = `${itemCodes[item]}`;
			return finalItem;
		});
		return {
			title,
			content: finalContent,
		};
	}).map((item) => {
		const { title, content } = item;
		const lolContent = content.map((item) => ({
			id: item,
			count: 1
		}));
		return {
			type: title,
			items: lolContent,
		};
	});
	// Get the champion code
	self.getChampCode = () => championCodes[self.champion] || championCodes[needToAddSpaces[self.champion]]
	// Make Blocks
	self.getItemBlocks = {
		associatedMaps: [],
		title: self.title + ' - ' + self.author,
		associatedChampions: [self.getChampCode(self.champion)],
		blocks: self.getItemBlocks(self.items),
	};
	// Make the final set string
	self.toJson = () => JSON.stringify(self.getItemBlocks, null, 2);
	return self;
}


const compile = () => {
	const example = scrapeMobaFire();
	const itemSet = new ItemSet(example);
	return itemSet.toJson();
}
const downloadBtn = document.createElement("button");
const btnStyle = (variant = "download") => [
	"position: fixed",
	"top: 50px",
	"right: 7px;",
	"z-index: 999999",
	"border: 0px",
	variant === "download" ? "background: #fcf1f2" : "background: #fafafa",
	"padding-inline: 1rem",
	"padding-block: 0.5rem",
	'border-radius: 0.25rem',
	"font-family:'Open Sans Mobafire','Open Sans',sans-serif,sans-serif",
  "cursor: pointer",
].join(';') + ';';
downloadBtn.style = btnStyle();
downloadBtn.innerHTML = "Export Item Set";
let compiled = null
downloadBtn.onclick =async function () {
	if (!compiled) {
		compiled = compile();
	}
	// Copy the text inside the text field
	 await navigator.clipboard.writeText(compiled.toJson());

	 // Alert the copied text
	alert(`Item Set:${compiled.title} Copied To Clipboard! You can paste it in the League Client Item Sets tab.`);
}
document.body.appendChild(downloadBtn);
