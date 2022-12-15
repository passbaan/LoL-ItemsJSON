document.getItems = () => {
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