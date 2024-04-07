const axios = require('axios');
const teachers = [
  { sno: 1, name: "EMMANUEL MARK", designation: "PROFESSOR", joinDate: "02-06-2003", teachTo: ["SE"] },
  { sno: 2, name: "ANANT MADHUKAR BAGADE", designation: "ASSO.PROFESSOR", joinDate: "02-01-2001", teachTo: ["TE", "BE"] },
  { sno: 3, name: "ARCHANA SANTOSH GHOTKAR", designation: "ASSO.PROFESSOR", joinDate: "01-12-2005", teachTo: ["SE", "BE"] },
  { sno: 4, name: "SHWETA C DHARMADHIKARI", designation: "ASSO.PROFESSOR", joinDate: "01-08-2002", teachTo: ["SE", "BE"] },
  { sno: 5, name: "SHYAM BABASAHEB DESHMUKH", designation: "ASSTT.PROFESSOR", joinDate: "01-10-1999", teachTo: ["TE", "BE"] },
  { sno: 6, name: "SACHIN SURESH PANDE", designation: "ASSTT.PROFESSOR", joinDate: "05-09-2002", teachTo: ["TE"] },
  { sno: 7, name: "MANISH RAMBHAU KHODASKAR", designation: "ASSTT.PROFESSOR", joinDate: "01-01-2004", teachTo: ["TE"] },
  { sno: 8, name: "TUSHAR ANANT RANE", designation: "ASSTT.PROFESSOR", joinDate: "11-07-2005", teachTo: ["TE"] },
  { sno: 9, name: "KIRTI YOGESH DIGHOLKAR", designation: "ASSTT.PROFESSOR", joinDate: "01-08-2005", teachTo: ["SE"] },
  { sno: 10, name: "VISHAL RAMESH JAISWAL", designation: "ASSTT.PROFESSOR", joinDate: "13-01-2006", teachTo: ["TE"] },
  { sno: 11, name: "RACHNA AMISH KARNAVAT", designation: "ASSTT.PROFESSOR", joinDate: "01-08-2006", teachTo: ["TE"] },
  { sno: 12, name: "RAVINDRA BABURAO MURUMKAR", designation: "ASSTT.PROFESSOR", joinDate: "28-08-2006", teachTo: ["TE"] },
  { sno: 13, name: "NAMAN VIJAY BURADKAR", designation: "ASSTT.PROFESSOR", joinDate: "22-01-2007", teachTo: ["TE", "SE"] },
  { sno: 14, name: "SACHIN DASHARATH SHELKE", designation: "ASSTT.PROFESSOR", joinDate: "01-06-2007", teachTo: ["SE", "BE"] },
  { sno: 15, name: "SANDEEP RAMBHAU WARHADE", designation: "ASSTT.PROFESSOR", joinDate: "14-07-2007", teachTo: ["SE"] },
  { sno: 16, name: "JAYASHREE BALASO JAGDALE", designation: "ASSTT.PROFESSOR", joinDate: "10-01-2008", teachTo: ["SE", "BE"] },
  { sno: 19, name: "SUMITRA AMIT JAKHETE", designation: "ASSTr.PROFESSOR", joinDate: "03-10-2009", teachTo: ["BE"] },
  { sno: 20, name: "ABHINAY GULABRAO DHAMANKAR", designation: "ASSIT.PROFESSOR", joinDate: "03-12-2011", teachTo: ["TE", "SE"] },
  { sno: 21, name: "JAGDISH KASHINATH KAMBLE", designation: "ASSIT.PROFESSOR", joinDate: "03-07-2017", teachTo: ["BE"] },
  { sno: 22, name: "HRUSHIKESH JAIWANT JOSHI", designation: "ASSIT.PROFESSOR", joinDate: "10-07-2017", teachTo: ["SE"] },
  { sno: 23, name: "ABHIJEET CHANDRAKANT KARVE", designation: "ASSTT.PROFESSOR", joinDate: "02-09-2020", teachTo: ["SE", "BE", "TE"] },
  { sno: 24, name: "VINIT RAJEEV TRIBHUVAN", designation: "ASSIT.PROFESSOR", joinDate: "02-08-2021", teachTo: ["TE", "SE"] },
  { sno: 25, name: "PRAJAKTA SUBHASH SHINDE", designation: "ASSTT.PROFESSOR", joinDate: "24-08-2021", teachTo: ["SE"] },
  { sno: 26, name: "JYOTI HINDURAO JADHAV", designation: "ASSIT.PROFESSOR", joinDate: "01-09-2021", teachTo: ["SE", "BE"] },
  { sno: 27, name: "AMIT ASHOKRAO KADAM", designation: "ASSIT.PROFESSOR", joinDate: "01-09-2021", teachTo: ["TE"] },
  { sno: 28, name: "SWAPNAJA RAJESH. HIRAY", designation: "ASSIT.PROFESSOR", joinDate: "02-03-2022", teachTo: ["SE", "BE"] },
  { sno: 29, name: "ARCHANA SATISH KADAM", designation: "ASSIT.PROFESSOR", joinDate: "04-03-2022", teachTo: ["SE", "BE"] },
  { sno: 30, name: "GANESH SHIVAJI PISE", designation: "ASSIT.PROFESSOR", joinDate: "09-03-2022", teachTo: ["SE", "TE"] },
  { sno: 31, name: "SHREYAS SHRIMANT SHINDE", designation: "ASSIT.PROFESSOR", joinDate: "17-03-2022", teachTo: ["SE"] },
  { sno: 32, name: "AMRUTA ABHINANDAN PATIL", designation: "ASSIT.PROFESSOR", joinDate: "19-12-2022", teachTo: ["SE", "TE"] },
  { sno: 33, name: "RADHIKA SUNIL MALPANI", designation: "ASSIT.PROFESSOR", joinDate: "19-12-2022", teachTo: ["TE", "BE"] }
];


const subjects = [
  {code:'314441' , name:'Theory of Computation' , department:'IT' , semester:5 , year:'TE'},
  {code:'314442' , name:'Operating Systems' , department:'IT' , semester:5 , year:'TE'},
  {code:'314443' , name:'Machine Learning' , department:'IT' , semester:5 , year:'TE'},
  {code:'314444' , name:'Human Computer Interaction' , department:'IT' , semester:5 , year:'TE'},
  {code:'314445' , name:'Elective-I' , department:'IT' , semester:5 , year:'TE' , elective:true , electiveList:[
    {code:'314445A', name:'Design and Analysis of Algorithm'},
    {code:'314445B', name:'Advanced Database and Management System' },
    {code:'314445C' , name: 'Design Thinking' },
    {code:'314445D', name: 'Internet of Things'}
  ]},
  {code:'314451' , name:'Computer Networks & Security' , department:'IT' , semester:6 , year:'TE'},
  {code:'314452' , name:'Data Science and Big Data Analytics' , department:'IT' , semester:6 , year:'TE'},
  {code:'314453' , name:'Web Application Development' , department:'IT' , semester:6 , year:'TE'},
  {code:'314454' , name:'Elective-II' , department:'IT' , semester:6 , year:'TE', elective:true , electiveList:[
    {code:'314454A', name:'Artificial Intelligence'},
    {code:'314454B', name:'Cyber Security ' },
    {code:'314454C' , name: 'Cloud Computing' },
    {code:'314454D', name: 'Software Modeling and Design'}
  ]}
];

const blocks = [
  { name: 'A1 109', capacity: '50' },
  { name: 'A1 110', capacity: '49' },
  { name: 'A3 307', capacity: '59' },
  { name: 'A3 308', capacity: '50' },
  { name: 'A3 405', capacity: '47' },
  { name: 'A3 406', capacity: '48' },
  { name: 'A3 407', capacity: '54' },
  { name: 'IT Seminar Hall', capacity: '70' }
];


const divisions = {
  FE: [
      { className: "FE1", startRollNo: 10101, endRollNo: 10175, total: 75, department: "FE" },
      { className: "FE2", startRollNo: 10201, endRollNo: 10275, total: 75, department: "FE" },
      { className: "FE3", startRollNo: 10301, endRollNo: 10375, total: 75, department: "FE" }
  ],
  SE: [
      { className: "SE1", startRollNo: 21101, endRollNo: 21189, total: 89, department: "CE" },
      { className: "SE2", startRollNo: 21201, endRollNo: 21288, total: 88, department: "CE" },
      { className: "SE3", startRollNo: 21301, endRollNo: 21386, total: 86, department: "CE" },
      { className: "SE5", startRollNo: 22101, endRollNo: 22178, total: 78, department: "ENTC" },
      { className: "SE6", startRollNo: 22201, endRollNo: 22279, total: 79, department: "ENTC" },
      { className: "SE9", startRollNo: 23101, endRollNo: 23183, total: 83, department: "IT" },
      { className: "SE10", startRollNo: 23201, endRollNo: 23286, total: 86, department: "IT" }
  ],
  TE: [
      { className: "TE1", startRollNo: 31101, endRollNo: 31186, total: 86, department: "CE" },
      { className: "TE2", startRollNo: 31201, endRollNo: 31284, total: 84, department: "CE" },
      { className: "TE3", startRollNo: 31301, endRollNo: 31389, total: 89, department: "CE" },
      { className: "TE5", startRollNo: 32101, endRollNo: 32175, total: 75, department: "ENTC" },
      { className: "TE6", startRollNo: 32201, endRollNo: 32273, total: 73, department: "ENTC" },
      { className: "TE9", startRollNo: 33101, endRollNo: 33181, total: 81, department: "IT" },
      { className: "TE10", startRollNo: 33201, endRollNo: 33280, total: 80, department: "IT" }
  ],
  BE: [
      { className: "BE1", startRollNo: 41101, endRollNo: 41177, total: 77, department: "CE" },
      { className: "BE2", startRollNo: 41201, endRollNo: 41278, total: 78, department: "CE" },
      { className: "BE3", startRollNo: 41301, endRollNo: 41388, total: 88, department: "CE" },
      { className: "BE5", startRollNo: 42101, endRollNo: 42178, total: 78, department: "ENTC" },
      { className: "BE6", startRollNo: 42201, endRollNo: 42279, total: 79, department: "ENTC" },
      { className: "BE9", startRollNo: 43101, endRollNo: 43164, total: 64, department: "IT" },
      { className: "BE10", startRollNo: 43201, endRollNo: 43263, total: 63, department: "IT" }
  ]
};

function sendBlocks(){
    blocks.forEach((block)=>{
       axios.post('http://localhost:8080/blocks/new' , {...block}).then((d)=> console.log(d.data));
    });
}


 function sendDatas(params) {
  teachers.forEach(function (teacher) {
    axios.post(`http://localhost:8080/teachers/new`,{ teacherId: teacher.sno, 
    name: teacher.name, 
    designation: teacher.designation, 
    joiningDate: teacher.joinDate,
     teachTo: teacher.teachTo }).then((d)=>{
      console.log(d.data);
    })

  });
}





// export function getTeacherList() {
//   return teachers;
// }
 sendDatas()

