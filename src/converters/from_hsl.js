// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
import { IS_CULORI, IS_RGB, IS_HSL, ALPHA_IMPLIED } from '../api/flags';

export default function({ h, s, l, a, flags }, additional_flags = 0) {
	// if (flags & (IS_CULORI | IS_HSL)) return { h, s, l, a, flags: flags | additional_flags };
	let m1 = l + s * (l < 0.5 ? l : 1 - l);
	let m2 = m1 - (m1 - l) * 2 * Math.abs(h/60 % 2 - 1);
	let res;
	switch (Math.floor(h/60)) {
		case 0: res = { r: m1, g: m2, b: 2 * l - m1 }; break;
		case 1: res = { r: m2, g: m1, b: 2 * l - m1 }; break;
		case 2: res = { r: 2 * l - m1, g: m1, b: m2 }; break;
		case 3: res = { r: 2 * l - m1, g: m2, b: m1 }; break;
		case 4: res = { r: m2, g: 2 * l - m1, b: m1 }; break;
		case 5: res = { r: m1, g: 2 * l - m1, b: m2 }; break;
	}
	res['flags'] = IS_CULORI | IS_RGB | additional_flags;
	if (a !== undefined) {
		res['a'] = a;
	} else {
		res['flags'] |= ALPHA_IMPLIED;
	}
	return res;
};