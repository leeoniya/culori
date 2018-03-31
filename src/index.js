import hsl from './api/hsl';
import hsv from './api/hsv';
import hsi from './api/hsi';
import hwb from './api/hwb';
import rgb from './api/rgb';
import lab from './api/lab';
import lch from './api/lch';
import css from './api/css';
import round from './api/round';
import convert from './api/convert';
import prepare from './api/prepare';
import named from './api/colors/named';
import map from './api/map';

import {
	default as parse,
	parseNumber,
	parseNamed,
	parseHex,
	parseRgb,
	parseHsl,
	parseHwb
} from './api/parse';

const culori = color => rgb(color);

export {
	hsl,
	hsv,
	hsi,
	hwb,
	rgb,
	lab,
	lch,
	css,
	convert,
	prepare,
	round,
	parse,
	parseNumber,
	parseNamed,
	parseHex,
	parseRgb,
	parseHsl,
	parseHwb,
	named,
	map
};

export default culori;