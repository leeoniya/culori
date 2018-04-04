import parse from './parse';

const converters = {};
const components = {};

const prepare = (color, mode) => 
	typeof color !== 'object' ? 
		parse(color) 
		: color.mode === undefined ? 
			{...color,  mode: mode } 
			: color;

const defineConverter = ({ mode, input, output, keys }) => {
	converters[mode] = Object.assign(converters[mode] || {}, output);
	Object.keys(input || {}).forEach(k => {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][mode] = input[k];
	});
	components[mode] = keys;
	return converter(mode);
}

const converter = (target_mode = 'rgb') => 
	color => (color = prepare(color, target_mode)) !== undefined ? 
		// if the color's mode corresponds to our target mode
		color.mode === target_mode ? 
			// then just return the color
			color
			// otherwise check to see if we have a dedicated
			// converter for the target mode
			: converters[color.mode][target_mode] ? 
				// and return its result...
				converters[color.mode][target_mode](color)
				// ...otherwise pass through RGB as an intermediary step.
				// if the target mode is RGB...
				: target_mode === 'rgb' ? 
					// just return the RGB
					converters[color.mode].rgb(color) 
					// otherwise convert color.mode -> RGB -> target_mode
					: converters.rgb[target_mode](converters[color.mode].rgb(color))
		: undefined;

export { defineConverter, components, converter as default };