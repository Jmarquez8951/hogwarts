import utils from '../../helpers/util';
import './navbar.scss';

const loadNavbar = () => {
  let domString = '';
  domString += '<nav>';
  domString += '<a href="#" class="brand">Hogwarts</a>';
  domString += '<ul>';
  domString += '<li>';
  domString += '<a href="#">Home</a>';
  domString += '</li>';
  domString += '</ul>';
  domString += '</nav>';
  utils.printToDom('nav-container', domString);
};

export default { loadNavbar };
