import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#0a75e1',
//   colorSecondary: 'deepskyblue',

//   UI
//   appBg: 'white',
//   appContentBg: 'silver',
//   appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
//   textColor: 'black',
//   textInverseColor: 'white',//'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
//   barTextColor: 'white',
//   barSelectedColor: 'black',
//   barBg: 'hotpink',

  // Form colors
//   inputBg: 'white',
//   inputBorder: 'silver',
//   inputTextColor: 'black',
//   inputBorderRadius: 4,

  brandTitle: 'Music Player Storybook',
  brandUrl: 'https://example.com',
//   brandImage: 'https://placehold.it/350x150',
});



// The storybook/theming package is built using TypeScript, so this should help create a valid theme for typescript users. The types are part of the package itself.

// Many theme variables are optional, the base property is NOT. This is a perfectly valid theme:

// import { create } from '@storybook/theming/create';

// export default create({
//   base: 'light',

//   brandTitle: 'My custom storybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://placehold.it/350x150',
// });