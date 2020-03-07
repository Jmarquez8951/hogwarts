import utils from '../../helpers/util';
import houseData from '../../helpers/data/houseData';
import houseButton from '../houseButton/houseButton';

import './houseButtonGroup.scss';

const createButtonGroup = () => {
  const houses = houseData.getHouses();
  let domString = '<div class="house-button-group">';
  houses.forEach((house) => {
    domString += houseButton.singleButton(house);
  });
  domString += '</div>';
  utils.printToDom('button-container', domString);
  $('body').on('click', '.house-button', houseButton.buttonEventFunction);
};

export default { createButtonGroup };
