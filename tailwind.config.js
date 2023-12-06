import borderRadius from '@teamgantt/tgds-tokens/dist/tailwind/core/border-radius.tailwind.js';
import borderWidth from '@teamgantt/tgds-tokens/dist/tailwind/core/border-width.tailwind.js';
import boxShadow from '@teamgantt/tgds-tokens/dist/tailwind/core/box-shadow.tailwind.js';
import colors from '@teamgantt/tgds-tokens/dist/tailwind/core/colors.tailwind.js';
import fontFamily from '@teamgantt/tgds-tokens/dist/tailwind/core/font-family.tailwind.js';
import fontSize from '@teamgantt/tgds-tokens/dist/tailwind/core/font-size.tailwind.js';
import fontWeight from '@teamgantt/tgds-tokens/dist/tailwind/core/font-weight.tailwind.js';
import letterSpacing from '@teamgantt/tgds-tokens/dist/tailwind/core/letter-spacing.tailwind.js';
import lineHeight from '@teamgantt/tgds-tokens/dist/tailwind/core/line-height.tailwind.js';
import opacity from '@teamgantt/tgds-tokens/dist/tailwind/core/opacity.tailwind.js';
import screens from '@teamgantt/tgds-tokens/dist/tailwind/core/screens.tailwind.js';
import spacing from '@teamgantt/tgds-tokens/dist/tailwind/core/spacing.tailwind.js';
import typography from '@teamgantt/tgds-tokens/dist/tailwind/aliases/typo.tailwind.js';
import elevationBg from '@teamgantt/tgds-tokens/dist/tailwind/aliases/elevation-bg.tailwind.js';
import elevationShadow from '@teamgantt/tgds-tokens/dist/tailwind/aliases/elevation-shadow.tailwind.js';
import colorBorderClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-border.tailwind.js';
import colorBgClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-bg.tailwind.js';
import colorTextClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-text.tailwind.js';
import colorIconClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-icon.tailwind.js';
import colorTaskBgClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-task-bg.tailwind.js';
import colorTaskTextClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-task-text.tailwind.js';
import colorTaskBorderClasses from '@teamgantt/tgds-tokens/dist/tailwind/aliases/color-task-border.tailwind.js';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';
/* eslint-disable prefer-arrow-callback */

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		/** Generated Theme */
		borderRadius,
		borderWidth,
		boxShadow,
		colors,
		fontFamily,
		fontSize,
		fontWeight,
		letterSpacing,
		lineHeight,
		opacity,
		screens,
		spacing,
		/** End Generated Theme */
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor'
			},
			fontFamily: {
				serif: ["'Press Start 2P'", 'serif'],
				sans: ['"Inter"', 'sans-serif']
			},
			keyframes: {
				'pulse-once': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.5)' },
					'80%': { transform: 'scale(0.75)' },
					'100%': { transform: 'scale(1.0)' }
				}
			},

			animation: {
				'juicy-pulse-once': 'pulse-once 300ms ease-in-out 1'
			}
		}
	},
	corePlugins: {
		preflight: false
	},
	plugins: [
		typographyPlugin,
		plugin(function ({ addUtilities }) {
			addUtilities({
				...elevationBg,
				...elevationShadow,
				...typography,
				...colorBorderClasses,
				...colorBgClasses,
				...colorTextClasses,
				...colorIconClasses,
				...colorTaskBgClasses,
				...colorTaskTextClasses,
				...colorTaskBorderClasses
			});
		})
	]
};
