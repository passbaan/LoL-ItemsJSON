module.exports = "\n\n"+
"const ItemSet = function(data) {\n"+
  "\tconst self = this;\n"+
  "\tself.title = data.title;\n"+
  "\tself.items = data.items;\n"+
  "\tself.champion = data.champion;\n"+
  "\tself.author = data.author;\n"+
  "\t//  \n"+
  "\tself.getItemBlocks = () => self.items.map((item) => {\n"+
    "\t\tconst { title, content } = item;\n"+
    "\t\tconst trimmedContent = content.map((item) => {\n"+
      "\t\t\tconst trimmedItem = item.trim();\n"+
      "\t\t\treturn trimmedItem;\n"+
    "\t\t});\n"+
    "\t\treturn {\n"+
      "\t\t\ttitle,\n"+
      "\t\t\tcontent: trimmedContent,\n"+
    "\t\t};\n"+
  "\t}).map((item) => {\n"+
    "\t\tconst { title, content } = item;\n"+
    "\t\tconst finalContent = content.map((item) => {\n"+
      "\t\t\tconst finalItem = `${itemCodes[item]}`;\n"+
      "\t\t\treturn finalItem;\n"+
    "\t\t});\n"+
    "\t\treturn {\n"+
      "\t\t\ttitle,\n"+
      "\t\t\tcontent: finalContent,\n"+
    "\t\t};\n"+
  "\t}).map((item) => {\n"+
    "\t\tconst { title, content } = item;\n"+
    "\t\tconst lolContent = content.map((item) => ({\n"+
      "\t\t\tid: item,\n"+
      "\t\t\tcount: 1\n"+
    "\t\t}));\n"+
    "\t\treturn {\n"+
      "\t\t\ttype: title,\n"+
      "\t\t\titems: lolContent,\n"+
    "\t\t};\n"+
  "\t});\n"+
  "\t// Get the champion code\n"+
  "\tself.getChampCode = () => championCodes[self.champion] || championCodes[needToAddSpaces[self.champion]]\n"+
  "\t// Make Blocks\n"+
  "\tself.getItemBlocks = {\n"+
    "\t\tassociatedMaps: [],\n"+
    "\t\ttitle: self.title + ' - ' + self.author,\n"+
    "\t\tassociatedChampions: [self.getChampCode(self.champion)],\n"+
    "\t\tblocks: self.getItemBlocks(self.items),\n"+
  "\t};\n"+
  "\t// Make the final set string\n"+
  "\tself.toJson = () => JSON.stringify(self.getItemBlocks, null, 2);\n"+
  "\treturn self;\n"+
"}\n";