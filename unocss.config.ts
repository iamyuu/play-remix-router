import {
	defineConfig,
	presetUno,
	presetIcons,
	presetWebFonts,
	transformerCompileClass,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	shortcuts: [],
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.5,
			warn: true,
		}),
		presetWebFonts({
			fonts: {
				sans: 'Inter',
			},
		}),
	],
	transformers: [transformerVariantGroup(), transformerCompileClass()],
});
