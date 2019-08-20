import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Montserrat"
  ],
  bodyFontFamily: ["Montserrat",],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
        '400',
        '400i',
        '700i'
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})

export default typography;