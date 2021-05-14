import { arrayExpression } from "@babel/types";

export default class Pangram {
	sentence: string;
	alphabet: string;

	constructor(sentence: string) {
		this.sentence = sentence.toLowerCase();
		this.alphabet = "qwertyuioplkjhgfdsazxcvbnm";
	}

	isPangram(): boolean {
		for (let letter of this.alphabet) {
			if (!this.sentence.includes(letter)) {
				return false;
			}
		}
		return true;
	}
}