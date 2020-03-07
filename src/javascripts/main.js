import studentData from './helpers/data/studentData';
import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';
import '../styles/main.scss';

const init = () => {
  const allStudents = studentData.getStudents();
  navbar.loadNavbar();
  studentList.createStudent(allStudents);
};

init();
