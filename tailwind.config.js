
const colors = {
  white: "#F5F5F5",
  lightgray: "#D6D6D6",
  mediumgray: "#A8A8A8",
  charcoal: "#4A4A4A",
  black: "#1E1E1E",
  primary: "#4A6377",
  primaryDark: "#2F4052",
  primaryLight: "#A6B1C2",
  secondary: "#C2A878",
  secondaryDark: "#8B7351",
  secondaryLight: "#E8D5B9",

  blue: "#8AA4C8", // Muted Blue
  blueDark: "#4F6B8C", // Darker variant for text

  green: "#A8C3A5", // Muted Green
  greenDark: "#5D775C", // Darker variant for text

  red: "#C8A8A5", // Muted Red
  redDark: "#8C5D5C", // Darker variant for text

  yellow: "#D6C89E", // Muted Yellow
  yellowDark: "#8C7B4F", // Darker variant for text
};

module.exports = {
  content: [
    './src/**/*.{html,js,njk,md}'
  ],
  theme: {
    extend: {
      colors: {
        minimal: colors,
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            '--tw-prose-body': theme(colors.secondaryDark),
            '--tw-prose-headings': theme(colors.secondaryDark),
            '--tw-prose-lead': theme(colors.secondary),
            '--tw-prose-links': theme(colors.secondary),
            '--tw-prose-bold': theme(colors.secondaryDark),
            '--tw-prose-quotes': theme(colors.secondaryDark),
            '--tw-prose-quote-borders': theme(colors.secondaryLight),
            '--tw-prose-captions': theme(colors.secondary),
            '--tw-prose-code': theme(colors.secondary),
            '--tw-prose-pre-code': theme(colors.secondaryLight),
            '--tw-prose-pre-bg': theme(colors.secondaryDark),
            '--tw-prose-th-borders': theme(colors.secondaryLight),
            '--tw-prose-td-borders': theme(colors.secondaryLight),
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme(colors.secondaryDark),
            '--tw-prose-headings': theme(colors.secondaryDark),
            '--tw-prose-lead': theme(colors.secondary),
            '--tw-prose-links': theme(colors.secondary),
            '--tw-prose-bold': theme(colors.secondaryDark),
            '--tw-prose-quotes': theme(colors.secondaryDark),
            '--tw-prose-quote-borders': theme(colors.secondaryLight),
            '--tw-prose-captions': theme(colors.secondary),
            '--tw-prose-code': theme(colors.secondary),
            '--tw-prose-pre-code': theme(colors.secondaryLight),
            '--tw-prose-pre-bg': theme(colors.secondaryDark),
            '--tw-prose-th-borders': theme(colors.secondaryLight),
            '--tw-prose-td-borders': theme(colors.secondaryLight),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  exportedColors: colors, // Expose colors for 11ty
}
