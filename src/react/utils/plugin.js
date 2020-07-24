import componentsRouter from './components-router';
import { f7, f7ready, theme, f7events, Framework7Class } from './f7';

const Framework7React = {
  name: 'reactPlugin',
  installed: false,
  install(params = {}) {
    if (Plugin.installed) return;
    Plugin.installed = true;

    const Framework7 = this;
    // eslint-disable-next-line
    f7events = new Framework7.Events();
    // eslint-disable-next-line
    Framework7Class = Framework7;

    const { paramsTheme, userAgent } = params;
    if (paramsTheme === 'md') theme.md = true;
    if (paramsTheme === 'ios') theme.ios = true;
    if (paramsTheme === 'aurora') theme.aurora = true;
    if (!paramsTheme || paramsTheme === 'auto') {
      const device = Framework7.getDevice({ userAgent });
      theme.ios = !!device.ios;
      theme.aurora = device.desktop && device.electron;
      theme.md = !theme.ios && !theme.aurora;
    }
    f7ready(() => {
      theme.ios = f7.theme === 'ios';
      theme.md = f7.theme === 'md';
      theme.aurora = f7.theme === 'aurora';
    });

    Framework7.Router.use(componentsRouter);
  },
};

export { f7ready, f7, theme };
export default Framework7React;
