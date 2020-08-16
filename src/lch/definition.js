import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import convertLchToRgb from './convertLchToRgb';
import convertRgbToLch from './convertRgbToLch';
import parseLch from './parseLch';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

export default {
	mode: 'lch',
	alias: ['lch-d50'],
	output: {
		lab: convertLchToLab,
		rgb: convertLchToRgb
	},
	input: {
		rgb: convertRgbToLch,
		lab: convertLabToLch
	},
	channels: ['l', 'c', 'h', 'alpha'],
	ranges: {
		l: [0, 100],
		c: [0, 131.008],
		h: [0, 360]
	},
	parsers: [parseLch],
	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		c: interpolatorLinear,
		l: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},
	difference: {
		h: differenceHueChroma
	},
	average: {
		h: averageAngle
	}
};
