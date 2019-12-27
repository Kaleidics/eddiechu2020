import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: "Lora",
      styles: ["400", "700"],
    },
    {
      name: "Merriweather",
      styles: ["400", "700", "900"]
    },
    {
      name: "Montserrat",
      styles: ["300", "400", "500", "700"]
    },
  ],
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
