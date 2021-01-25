// https://i-teka.kz/nur-sultan/medicamentsalphabetically
import axios from "axios"
import pkg from 'node-html-parser';

const { parse } = pkg;

console.log("starting\n");

const url = 'https://i-teka.kz/nur-sultan/medicamentsalphabetically'

async function takeClassPage(url) {
	await axios.get(url)
		.then(async (res) => {
			let $ = cheerio.load(res.data);
			let ids = [];
			const items = $('.list-item').length;
			console.log(items)
		})
		.then((response) => {
			return response;
		})
		.then((data) => {
			const root = pkg.parse(data);
			console.log(root, '\n');
			console.log(root.querySelectorAll('.list-item'));
		});
}

takeClassPage(url);

// var x = document.getElementsByClassName("example");
//
// console.log(x);
//
// window.addEventListener('DOMContentLoaded', () => {
// 	const body = document.querySelector('body');
// 	let textNodes = [];
//
// 	function recursy (element) {
// 		element.childNodes.forEach(node => {
//
// 			if (node.nodeName.match(/^H\d/)) {
// 				console.log(node);
// 			} else {
// 				recursy(node);
// 			}
// 		})
// 	}
//
// 	recursy(body);
// 	console.log(textNodes);
// });
