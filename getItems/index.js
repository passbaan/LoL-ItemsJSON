const fs = require('fs')
const scrapeUI = require('./modules/scrapeUI.js');
const { getRiotData } = require('./modules/getRiotData.js');
const itemSetGenerator = require('./modules/itemSetGenerator.js');
const compileResults = require('./modules/compileResults.js');
const createButton = require('./modules/createButton.js');
const writeFile = async (file, data) => {
    return new Promise(resolve => {
        fs.writeFile(file, data, function (err) {
            if (err) {
                return console.log(err);
            } else {
                resolve(true);
            }
        });
    })
}
const createScript = async () => {
    const { script, version } = await getRiotData();
    const withScrapScript = script + scrapeUI + itemSetGenerator + compileResults +createButton;

    await writeFile(`data/LoL-ItemsJSON-${version}.user.js`, withScrapScript);
}
createScript();