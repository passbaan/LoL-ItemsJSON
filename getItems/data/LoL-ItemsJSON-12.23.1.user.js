// ==UserScript==
// @name        LoL-ItemsJSON
// @version     12.23.1
// @author      Abdul Haseeb
// @include     https://mobafire.com/league-of-legends/build/*
// @include     https://www.mobafire.com/league-of-legends/build/*
// @include     https://probuilds.net/guide/show/*
// @include     https://www.probuilds.net/guide/show/*
// ==/UserScript==

function post (url) {
	return new Promise((resolve, reject) => {
		const xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				resolve(this.responseText);
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	})
};

const LolItemsJson = function () {
	const self = this;
	//  Declare all the helpers
	self.init = ()=>{
	}
	return self;
};
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
downloadBtn.onclick = async function () {
	if (!compiled) {
		compiled = compile();
	}
	// Copy the text inside the text field
	await navigator.clipboard.writeText(compiled.toJson());

	// Alert the copied text
	alert(`Item Set:${compiled.title} Copied To Clipboard! You can paste it in the League Client Item Sets tab.`);
}
document.body.appendChild(downloadBtn);
