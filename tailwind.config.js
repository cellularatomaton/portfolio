
const colors = {
  white: "#F5F5F5",
  lightgray: "#D6D6D6",
  mediumgray: "#A8A8A8",
  charcoal: "#4A4A4A",
  black: "#1E1E1E",
  primary: "#009BDE",
  secondary: "#D900CA",
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
  exportedColors: colors, // Expose colors for 11ty
}
