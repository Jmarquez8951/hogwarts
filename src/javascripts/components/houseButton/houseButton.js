import studentData from '../../helpers/data/studentData';
import studentList from '../studentList/studentList';

import './houseButton.scss';

const singleButton = (house) => {
  const domString = `
  <button id="${house.id}" class="house-button house-button-${house.name.toLowerCase()}">
    <div>${house.name}</div>
    <img src="${house.picture}"/>
  </button>`;
  return domString;
};

const buttonEventFunction = (e) => {
  const houseId = e.target.closest('button').id;
  const students = studentData.getStudents();
  const filteredStudents = students.filter((x) => x.houseId === houseId);
  studentList.createStudent(filteredStudents);
};

export default { singleButton, buttonEventFunction };
