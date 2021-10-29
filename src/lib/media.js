export const mediaQuery = (maxWidth) => `@media(max-width: ${maxWidth}px)`;

const media = {
  xxlarge: mediaQuery(1920), // 1920x
  xlarge: mediaQuery(1440), // Laptop M
  large: mediaQuery(1024), // laptop
  medium: mediaQuery(768), // Tablet
  small: mediaQuery(425), // Mobile L
  xsmall: mediaQuery(375), // Mobile M
  xxsmall: mediaQuery(320), // Mobile S
  custom: mediaQuery,
};

export default media;
