import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Signika',
      styles: ['300', '400', '400i', '700']
    },
    {
      name: 'Raleway',
      styles: ['400', '400i', '700', '700i']
    }
  ],
  headerFontFamily: ['Signika', 'sans-serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  baseLineHeight: 1.45
});

export default typography;
