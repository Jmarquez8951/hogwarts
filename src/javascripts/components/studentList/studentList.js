import utils from '../../helpers/util';
import './studentList.scss';

const createStudent = (students) => {
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    domString += `${student.name}`;
  });
  domString += '</ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudent };
