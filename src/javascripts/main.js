import studentData from './helpers/data/studentData';
import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';
import houseButtonGroup from './components/houseButtonGroup/houseButtonGroup';
import '../styles/main.scss';

const init = () => {
  const allStudents = studentData.getStudents();
  navbar.loadNavbar();
  studentList.createStudent(allStudents);
  houseButtonGroup.createButtonGroup();
};

init();
