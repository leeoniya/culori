import mixin from './util/mixin';

import parse from './api/parse';

import parseNumber from './parsers/number';
import parseNamed from './parsers/named';
import parseHex from './parsers/hex';
import parseRgb from './parsers/rgb';
import parseHsl from './parsers/hsl';

import hsl_to_rgb from './converters/hsl2rgb';
import hsv_to_rgb from './converters/hsv2rgb';
import rgb_to_hsl from './converters/rgb2hsl';
import rgb_to_hsv from './converters/rgb2hsv';

import named from './colors/named';

import Color from './color/color';

const culori = c => new Color(c instanceof Color ? c.serialize() : parse(c));

mixin(culori, {
	convert: {
		hsl_to_rgb,
		hsv_to_rgb,
		rgb_to_hsl,
		rgb_to_hsv
	},
	parse,
	parser: {
		number: parseNumber,
		named: parseNamed,
		hex: parseHex,
		rgb: parseRgb,
		hsl: parseHsl
	},
	colors: {
		named
	}
});

export default culori;