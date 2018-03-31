/*
	CIE XYZ values to linear-light sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

export default ({ x, y, z }) => ({
	r: x * 3.2404542 - y * 1.5371385 - 0.4985314 * z,
	g: x * -0.9692660 + y * 1.8760108 + 0.0415560 * z,
	b: x * 0.0556434 - y * 0.2040259 + 1.0572252 * z
});