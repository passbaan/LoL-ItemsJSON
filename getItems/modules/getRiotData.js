var request = require('request')
const post = (url) => new Promise((resolve, reject) => {
  request(url, function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  });
});
const scriptInitials1 = "// ==UserScript==\n// @name        LoL-ItemsJSON\n";
const scriptInitials2 = "// @author      Abdul Haseeb\n// @include     https://mobafire.com/league-of-legends/build/*\n// @include     https://www.mobafire.com/league-of-legends/build/*\n// @include     https://probuilds.net/guide/show/*\n// @include     https://www.probuilds.net/guide/show/*\n// ==/UserScript==\n";
exports.getRiotData = async () => {
  let upperScript = '';
  const { body: versions } = await post('https://ddragon.leagueoflegends.com/api/versions.json');
  const VERSION = JSON.parse(versions)[0];
  script = `${scriptInitials1}// @version     ${VERSION}\n${scriptInitials2}`;
  // Step 2: Get English Items from https://ddragon.leagueoflegends.com/cdn/x/data/en_US/item.json
  const { body: englishItems } = await post(`https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/en_US/item.json`);
  const englishJson = JSON.parse(englishItems).data;
  let totalItems = {};
  Object.entries(englishJson).forEach(([itemCode, value]) => (totalItems[value.name] = parseInt(itemCode, 10)));
  // Step 3 : Get Spanish Items https://ddragon.leagueoflegends.com/cdn/x/data/es_ES/item.json 
  const { body: spanishItems } = await post(`https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/es_ES/item.json`);
  const spanishJson = JSON.parse(spanishItems).data;
  Object.entries(spanishJson).forEach(([itemCode, value]) => (totalItems[value.name] = parseInt(itemCode, 10)));
  // WRITE ALL THE ITEMS TO FILE
  upperScript += `\n const itemCodes = ${JSON.stringify(totalItems)};`;
  // Get champions from https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/en_US/champion.json
  const { body: engChamps } = await post(`https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/en_US/champion.json`);
  const engChampJSON = JSON.parse(engChamps).data;
  const champs = {};
  const champDisplayNames = {};
  Object.entries(engChampJSON).forEach(([champ, value]) => (champs[champ.toLowerCase()] = parseInt(value.key, 10)));
  // await writeFile(`data/champs-${VERSION}.json`, JSON.stringify(champs))
  upperScript += `\ const championCodes = ${JSON.stringify(champs)};`;
  Object.entries(engChampJSON).forEach(([champ, value]) => { if (champ !== value.name) champDisplayNames[value.name.replaceAll(' ', '').replace('\'', '').toLowerCase()] = champ.toLowerCase() });
  upperScript += `\nconst needToAddSpaces = ${JSON.stringify(champDisplayNames)};\n`;
  script += upperScript;
  return { script, version: VERSION };
}