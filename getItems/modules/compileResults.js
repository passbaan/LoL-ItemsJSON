module.exports = "\n\n"+
"const compile = () => {\n"+
	"\tconst example = scrapeMobaFire();\n"+
	"\tconst itemSet = new ItemSet(example);\n"+
	"\treturn itemSet.toJson();\n"+
"}\n"