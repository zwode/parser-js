// https://i-teka.kz/nur-sultan/medicamentsalphabetically
import axios from "axios"
import pkg from 'node-html-parser';

const { parse } = pkg

console.log("starting\n");

axios.get('https://i-teka.kz/nur-sultan/medicamentsalphabetically')
	.then((response) => {
		return response;
	})
	.then((data) => {
		const root = data;
		// const body = document.querySelector('body');
		function recursy (element) {
			element.childNodes.forEach(node => {
				if (node.nodeName.match(/^H\d/)) {
					console.log(node);
				} else {
					recursy(node);
				}
			})
		}
		recursy(root);
		// console.log(root);
	});


// var x = document.getElementsByClassName("example");
//
// console.log(x);

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