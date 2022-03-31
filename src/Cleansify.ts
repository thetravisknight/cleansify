import { CleansifyConfig } from './CleansifyConfig';

export class Cleansify {
	_string: string = "";
	config: any = null;

	constructor(s: string, c: any = {}) {
		this._string = s;
		this.config = Object.assign(new CleansifyConfig(), c);
		return this;
	}

	static _c(s: string, c: any = {}) {
		const cify = new Cleansify(s, c);
		return cify.cleanseString();
	}

	cleanseString() {
		if(!this.config) return null;
		if(!this._string || !this._string.length) return null;

		let stringReplacement = this.config.replacement;
		if(this.config.case == "kebab") {
			stringReplacement = "-"
		}

		let cleansedString = this._string.replace(/[&\/\\#,+()$~%.'":*?<>{}_]/g, stringReplacement);

		if(this.config.case == "kebab") {
			cleansedString = cleansedString.replace(/[\s]/g, stringReplacement);
			cleansedString = cleansedString.replace(/(\-){2,}/g, "-")
			if(cleansedString.startsWith("-")) {
				cleansedString = cleansedString.substring(1);
			}
			if(cleansedString.endsWith("-")) {
				cleansedString = cleansedString.substring(0, cleansedString.length - 1);
			}
		}

		if(this.config.maxLength && cleansedString.length > this.config.maxLength) {
			cleansedString = cleansedString.substring(0, this.config.maxLength);
		}

		cleansedString = this.checkCase(cleansedString);

		return cleansedString;
	}

	checkCase(cleansedString: string) {
		switch (this.config.case) {
			case 'lower':
			case 'kebab':
				cleansedString = cleansedString.toLowerCase();
				break;

			case 'upper':
				cleansedString = cleansedString.toUpperCase();
				break;
			default:
				break;
		}
		return cleansedString;
	}

}
