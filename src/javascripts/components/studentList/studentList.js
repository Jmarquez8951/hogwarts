import houseData from '../../helpers/data/houseData';

import utils from '../../helpers/util';
import studentCard from '../studentCard/studentCard';

import './studentList.scss';

const createStudent = (students) => {
  const houses = houseData.getHouses();
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    const studentHouse = houses.find((x) => x.id === student.houseId);
    domString += studentCard.createStudentCard(student, studentHouse);
  });
  domString += '</ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudent };
