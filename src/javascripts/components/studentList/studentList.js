import utils from '../../helpers/util';
import studentCard from '../studentCard/studentCard';
import './studentList.scss';

const createStudent = (students) => {
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    domString += studentCard.createStudentCard(student);
  });
  domString += '</ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudent };
