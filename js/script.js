import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animation.js';
import Accordion from './modules/script-accordion.js';
import TabNav from './modules/script-tabNav.js';
import Modal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBTC from './modules/btc-fetch.js';
import MenuMobile from './modules/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

initToolTip();
initDropDownMenu();

const menuMobile = new MenuMobile('[data-menu=button]', '[data-menu=list]');
menuMobile.init();

initFuncionamento();
initFetchAnimais();
initFetchBTC();
