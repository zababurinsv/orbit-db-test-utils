import browser from './browser.js'

var isBrowser = new Function('try {return this===window;}catch(e){ return false;}') // eslint-disable-line

let config;

if (isBrowser()) config = browser;

export default config;
