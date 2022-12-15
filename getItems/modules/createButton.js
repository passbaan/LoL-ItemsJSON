module.exports = `const downloadBtn = document.createElement("button");
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

	 // Alert the copied text\n`+
	 "\talert(`Item Set:${compiled.title} Copied To Clipboard! You can paste it in the League Client Item Sets tab.`);\n"+
`}
document.body.appendChild(downloadBtn);`;