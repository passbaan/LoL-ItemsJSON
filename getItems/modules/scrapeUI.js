module.exports = 'const scrapeMobaFire = () => {\n' +
  "\tlet champion = document.querySelector('.champ-tabs__more').innerText.toLowerCase();\n" +
  "\tchampion = champion.replace('more ', '').replace(' guides', '').replaceAll(' ', '').replace('\\\'', '');\n"+
  "\tlet setTitle = document.querySelector('.view-guide__banner__title span').innerText.trim();\n"+
  '\tlet author = document.querySelector(".view-guide__banner__author").querySelector("a").innerHTML + " @ " + document.querySelector(".view-guide__banner__author").querySelector("a").href;\n'+
  '\t// selectors\n'+
  "\tconst itemsContainer = document.querySelector('.view-guide__build__items');\n"+
  "\tconst items = itemsContainer.querySelectorAll('.view-guide__items');\n"+
  '\t// \n'+
  '\tconst itemsArray = [];\n'+
  '\titems.forEach(item => {\n'+
    "\t\tconst titleClass = '.view-guide__items__bar';\n"+
    "\t\tconst contentClass = '.view-guide__items__content';\n"+
    '\t\tconst title = item.querySelector(`${titleClass} span`);\n'+
    '\t\tconst content = item.querySelectorAll(`${contentClass} span a`);\n'+
    '\t\titemsArray.push({\n'+
      '\t\t\ttitle: title.innerText,\n'+
      '\t\t\tcontent: [...content].map(item => item.innerText)\n'+
    '\t\t\t});\n'+
  '\t});\n'+
  '\treturn {\n'+
    '\t\ttitle: setTitle,\n'+
    '\t\tauthor,\n'+
    '\t\tchampion,\n'+
    '\t\titems: itemsArray\n'+
  '\t}\n'+
'}';