import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-animation.js';
import Accordion from './modules/script-accordion.js';
import TabNav from './modules/script-tabNav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/btc-fetch.js';
import MenuMobile from './modules/menu-mobile.js';
import SlideNav from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu=button]', '[data-menu=list]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

fetchAnimais('../../animaisapi.json', '.numeros-grid');

const slide = new SlideNav('.slide', '.wrapper');
slide.init();

slide.addControl('.custom-control');
