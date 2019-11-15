import { configure, addParameters } from '@storybook/html';
import buildStencilStories from './stories/stencil';
import { themes } from '@storybook/theming';
import musicPlayerTheme from './musicPlayerTheme';


// The following contexts will be used to generate stories
// for multiple collections of components. This is particulary
// useful for monorepos where multiple packages might exist.
const COLLECTIONS = [
  {
    name: 'Stencil Components',
    loader: require('../loader/index.cjs.js'),
    componentsCtx: require.context('../dist/collection', true, /\/components\/([^/]+)\/\1\.js$/),
    storiesCtx: require.context('../src', true, /\.story\.tsx$/)
  }
];

const cssReq = require.context('!!raw-loader!../src', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map(filename => ({ filename, content: cssReq(filename).default }));
addParameters({
	designToken: {
	  files: { 
		css: cssTokenFiles,
	  }
	},
	options: {
		theme: musicPlayerTheme,
	  },
  });

function loadStories() {
  COLLECTIONS.forEach(({ name, loader, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, loader, componentsCtx, storiesCtx);
  });
  
}
var stories = loadStories;

configure(stories, module);
