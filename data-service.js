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