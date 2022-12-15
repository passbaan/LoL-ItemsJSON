// ==UserScript==
// @name        LoL-ItemsJSON
// @version     11.14.1
// @author      EagleExe, Abdul Haseeb
// @include     https://mobafire.com/league-of-legends/build/*
// @include     https://www.mobafire.com/league-of-legends/build/*
// @include     https://probuilds.net/guide/show/*
// @include     https://www.probuilds.net/guide/show/*
// ==/UserScript==

// If the item name has " (Trinket)" or anything in parenthesis, make a duplicate entry that has the parenthesis removed. This might not be needed anymore.
for (let k in document.ItemCodes){
	if (k.has("(")){
		document.ItemCodes[k.removeParenthesis()] = document.ItemCodes[k];
	}
}
	
		

document.GatherTheData = function () {
	let URL = document.location.href;
	let Author, ChampionName, Title, ChampionCode;
	if (URL.has("mobafire.com")) {
		// 
		Author = document.querySelector(".view-guide__banner__author").querySelector("a").innerHTML + " @ " + document.querySelector(".view-guide__banner__author").querySelector("a").href;
		ChampionName = document.querySelector(".champ-tabs__more").innerHTML;
		const len = ChampionName.length;
		ChampionName = ChampionName.substr(6, len - 8);
		console.log(ChampionName);
		Title = document.querySelector(".view-guide__banner__title").querySelector("span").innerHTML.removeTags().trim();
		ChampionCode = document.ChampionCodes[ChampionName.removeSpaces().removeApostrophe()];
	} else if (URL.has("probuilds.net")) {
		let Highlighted = document.querySelector("td[class$='summoner highlighted']");
		Author = Highlighted.children[0].innerHTML;
		ChampionName = Highlighted.parentElement.children[0].children[0].children[0].attributes["data-id"].value;
		if (document.NeedToAddSpaces[ChampionName])
			ChampionName = document.NeedToAddSpaces[ChampionName];
		Title = ChampionName + " &lt;" + Author + "&gt;";
		ChampionCode = document.ChampionCodes[ChampionName];
	}

	let Output = '{\n\t"title": "' + Title.replaceQuotes() + '",\n\t"associatedMaps": [],\n\t"associatedChampions": [' + ChampionCode + '],\n\t"_notes": "' + URL + '",\n\t"_author": "' + Author + '",\n\t"blocks": [';
	let GroupName = "", ItemCode, i, j;
	if (URL.has("mobafire.com")) {
		String.prototype.removeUnwantedCharacters = function () { return this.replace(/ - [\D]{1,}/g, "") } // The end of the names of some of Mabafire's items include " - Warrier", " - Runic Echoes", " - Cinderhunk", " - Bloodrazer" and these don't match the names in the https://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/item.json
		let Divs = document.querySelectorAll("div.view-guide__items");
		let ItemSpans;
		for (i = 0; i < Divs.length; i++) {
			GroupName = Divs[i].children[0].children[0].innerHTML;
			Output += '\n\t\t{\n\t\t\t"type": "' + GroupName + '",\n\t\t\t"items": [';
			ItemSpans = Divs[i].children[1].children;
			for (j = 0; j < ItemSpans.length; j++) {
				ItemCode = document.ItemCodes[ItemSpans[j].querySelector("span").innerHTML.removeUnwantedCharacters()];
				Output += '\n\t\t\t\t{ "id": "' + ItemCode + '", "count": 1 }';
				if (j != ItemSpans.length - 1)
					Output += ',';
			}
			Output += '\n\t\t\t]\n\t\t}';
			if (i < Divs.length - 1)
				Output += ',';
		}
	} else if (URL.has("probuilds.net")) {
		let LIs = document.querySelector("ul.buy-order").children;
		let time, buys = [];
		for (i = 0; i < LIs.length; i++) {
			time = LIs[i].children[1].innerHTML.trim();
			if (time.length > 9) {
				time = LIs[i].children[2].innerHTML.trim();
				GroupName = "Sold @ " + time;
			}
			buys.push({
				ItemCode: LIs[i].children[0].attributes["data-id"].value,
				Time: time
			});
			if (i == LIs.length - 1 || GroupName.has("Sold") || LIs[i + 1].className.has("first")) {
				if (!GroupName) for (j = 0; j < buys.length; j++) {
					if (j == 0)
						GroupName = buys[j].Time;
					else if (j == buys.length - 1)
						GroupName += " ~ " + buys[j].Time;
				}
				Output += '\n\t\t{\n\t\t\t"type": "' + GroupName + '",\n\t\t\t"items": [';
				for (j = 0; j < buys.length; j++) {
					Output += '\n\t\t\t\t{ "id": "' + buys[j].ItemCode + '", "count": 1 }';
					if (j != buys.length - 1)
						Output += ',';
				}
				Output += '\n\t\t\t]\n\t\t}';
				if (i < LIs.length - 1)
					Output += ',';
				GroupName = "";
				buys = [];
			}
		}
	}
	Output += "\n\t]\n}";
	console.log("============ gathered the data ============");
	return Output;
}
var Button = document.createElement("button");
Button.style = "position:fixed; top:50px; right:7px; z-index:999999; border:0px; background:darkblue; color:#bbcbe8; padding:5px 9px; font-family:'Open Sans Mobafire','Open Sans',sans-serif,sans-serif";
Button.innerHTML = "Items JSON";
Button.onmouseover = function () {
	document.getElementById("TheTextarea").value = document.GatherTheData();
	document.getElementById("TheTextarea").style.visibility = "visible";
}
Button.onclick = function () {
	document.getElementById("TheTextarea").style.visibility = document.getElementById("TheTextarea").style.visibility == "hidden" ? "visible" : "hidden";
}
document.body.appendChild(Button);
var TheTextarea = document.createElement("textarea");
TheTextarea.style = "position:fixed; top:82px; right:7px; z-index:999999; border:2px dashed navy; width:280px; height:420px; background:gainsboro; color:black; font-size:6px; font-family:'Open Sans Mobafire','Open Sans',sans-serif,sans-serif; overflow-x:hidden; visibility:hidden";
TheTextarea.id = "TheTextarea";
TheTextarea.value = document.GatherTheData();
TheTextarea.onmouseover = function () { document.getElementById("TheTextarea").select() }
document.body.appendChild(TheTextarea);