const { itemCodes, needToAddSpaces, championCodes } = require('../data/vars.js');
const { example } = require('../data/example.js');
// Trim the scraped JSON
function setMaker (data) {
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
  self.getItemBlocks =  {
    associatedMaps: [],
    title: self.title + ' - ' + self.author,
    associatedChampions: [self.getChampCode(self.champion)],
    blocks: self.getItemBlocks(example.items),
  };
  // Make the final set string
  self.toJson = () => JSON.stringify(self.getItemBlocks, null, 2);
  return self;
}
const makeSet = setMaker(example);
console.log('➡️ 🤷‍♂️ file: createJson.js:56 🤷‍♂️ makeSet', makeSet.toJson())


