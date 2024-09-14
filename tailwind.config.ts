/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { addDynamicIconSelectors } from '@iconify/tailwind';
import { colors } from './config.json';

const TAILWIND_PLUGINS = [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
];

const CUSTOM_PLUGINS = [addDynamicIconSelectors()];

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            display: ['Oswald', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],
        },
        colors: {
            ...colors,
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {},
    },
    plugins: [...TAILWIND_PLUGINS, ...CUSTOM_PLUGINS],
};
