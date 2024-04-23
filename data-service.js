const axios = require('axios');
const teachers = [
  {
    sno: 1,
    name: "EMMANUEL MARK",
    designation: "PROFESSOR",
    joinDate: "06-02-2003",
    teachTo: ["SE"],
  },
  {
    sno: 2,
    name: "ANANT MADHUKAR BAGADE",
    designation: "ASSO.PROFESSOR",
    joinDate: "01-02-2001",
    teachTo: ["TE", "BE"],
  },
  {
    sno: 3,
    name: "ARCHANA SANTOSH GHOTKAR",
    designation: "ASSO.PROFESSOR",
    joinDate: "12-01-2005",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 4,
    name: "SHWETA C DHARMADHIKARI",
    designation: "ASSO.PROFESSOR",
    joinDate: "08-01-2002",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 5,
    name: "SHYAM BABASAHEB DESHMUKH",
    designation: "ASSTT.PROFESSOR",
    joinDate: "10-01-1999",
    teachTo: ["TE", "BE"],
  },
  {
    sno: 6,
    name: "SACHIN SURESH PANDE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "09-05-2002",
    teachTo: ["TE"],
  },
  {
    sno: 7,
    name: "MANISH RAMBHAU KHODASKAR",
    designation: "ASSTT.PROFESSOR",
    joinDate: "01-01-2004",
    teachTo: ["TE"],
  },
  {
    sno: 8,
    name: "TUSHAR ANANT RANE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "07-11-2005",
    teachTo: ["TE"],
  },
  {
    sno: 9,
    name: "KIRTI YOGESH DIGHOLKAR",
    designation: "ASSTT.PROFESSOR",
    joinDate: "08-01-2005",
    teachTo: ["SE"],
  },
  {
    sno: 10,
    name: "VISHAL RAMESH JAISWAL",
    designation: "ASSTT.PROFESSOR",
    joinDate: "01-13-2006",
    teachTo: ["TE"],
  },
  {
    sno: 11,
    name: "RACHNA AMISH KARNAVAT",
    designation: "ASSTT.PROFESSOR",
    joinDate: "08-01-2006",
    teachTo: ["TE"],
  },
  {
    sno: 12,
    name: "RAVINDRA BABURAO MURUMKAR",
    designation: "ASSTT.PROFESSOR",
    joinDate: "08-28-2006",
    teachTo: ["TE"],
  },
  {
    sno: 13,
    name: "NAMAN VIJAY BURADKAR",
    designation: "ASSTT.PROFESSOR",
    joinDate: "01-22-2007",
    teachTo: ["TE", "SE"],
  },
  {
    sno: 14,
    name: "SACHIN DASHARATH SHELKE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "06-01-2007",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 15,
    name: "SANDEEP RAMBHAU WARHADE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "07-14-2007",
    teachTo: ["SE"],
  },
  {
    sno: 16,
    name: "JAYASHREE BALASO JAGDALE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "01-10-2008",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 19,
    name: "SUMITRA AMIT JAKHETE",
    designation: "ASSTr.PROFESSOR",
    joinDate: "10-03-2009",
    teachTo: ["BE"],
  },
  {
    sno: 20,
    name: "ABHINAY GULABRAO DHAMANKAR",
    designation: "ASSIT.PROFESSOR",
    joinDate: "12-03-2011",
    teachTo: ["TE", "SE"],
  },
  {
    sno: 21,
    name: "JAGDISH KASHINATH KAMBLE",
    designation: "ASSIT.PROFESSOR",
    joinDate: "07-03-2017",
    teachTo: ["BE"],
  },
  {
    sno: 22,
    name: "HRUSHIKESH JAIWANT JOSHI",
    designation: "ASSIT.PROFESSOR",
    joinDate: "07-10-2017",
    teachTo: ["SE"],
  },
  {
    sno: 23,
    name: "ABHIJEET CHANDRAKANT KARVE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "09-02-2020",
    teachTo: ["SE", "BE", "TE"],
  },
  {
    sno: 24,
    name: "VINIT RAJEEV TRIBHUVAN",
    designation: "ASSIT.PROFESSOR",
    joinDate: "08-02-2021",
    teachTo: ["TE", "SE"],
  },
  {
    sno: 25,
    name: "PRAJAKTA SUBHASH SHINDE",
    designation: "ASSTT.PROFESSOR",
    joinDate: "08-24-2021",
    teachTo: ["SE"],
  },
  {
    sno: 26,
    name: "JYOTI HINDURAO JADHAV",
    designation: "ASSIT.PROFESSOR",
    joinDate: "09-01-2021",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 27,
    name: "AMIT ASHOKRAO KADAM",
    designation: "ASSIT.PROFESSOR",
    joinDate: "09-01-2021",
    teachTo: ["TE"],
  },
  {
    sno: 28,
    name: "SWAPNAJA RAJESH. HIRAY",
    designation: "ASSIT.PROFESSOR",
    joinDate: "03-02-2022",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 29,
    name: "ARCHANA SATISH KADAM",
    designation: "ASSIT.PROFESSOR",
    joinDate: "03-04-2022",
    teachTo: ["SE", "BE"],
  },
  {
    sno: 30,
    name: "GANESH SHIVAJI PISE",
    designation: "ASSIT.PROFESSOR",
    joinDate: "03-09-2022",
    teachTo: ["SE", "TE"],
  },
  {
    sno: 31,
    name: "SHREYAS SHRIMANT SHINDE",
    designation: "ASSIT.PROFESSOR",
    joinDate: "03-17-2022",
    teachTo: ["SE"],
  },
  {
    sno: 32,
    name: "AMRUTA ABHINANDAN PATIL",
    designation: "ASSIT.PROFESSOR",
    joinDate: "12-19-2022",
    teachTo: ["SE", "TE"],
  },
  {
    sno: 33,
    name: "RADHIKA SUNIL MALPANI",
    designation: "ASSIT.PROFESSOR",
    joinDate: "12-19-2022",
    teachTo: ["TE", "BE"],
  },
];

const subjects = [
  {
    code: "314445",
    name: "Elective-I",
    department: "IT",
    semester: 5,
    year: "TE",
    elective: true,
    electiveList: [],
  },
  {
    code: "314451",
    name: "Computer Networks & Security",
    department: "IT",
    semester: 6,
    year: "TE",
  },
  {
    code: "314452",
    name: "Data Science and Big Data Analytics",
    department: "IT",
    semester: 6,
    year: "TE",
  },
  {
    code: "314453",
    name: "Web Application Development",
    department: "IT",
    semester: 6,
    year: "TE",
  },
  {
    code: "314454",
    name: "Elective-II",
    department: "IT",
    semester: 6,
    year: "TE",
    elective: true,
    electiveList: [
      { code: "314454A", name: "Artificial Intelligence" },
      { code: "314454B", name: "Cyber Security " },
      { code: "314454C", name: "Cloud Computing" },
      { code: "314454D", name: "Software Modeling and Design" },
    ],
  },
];

const course = [
  {
    branch: "IT",
    semester: 1,
    year: "TE",
    subjects: [
      { code: "314441", name: "Theory of Computation", abr: "TOC" },
      { code: "314442", name: "Operating Systems", abr: "OS" },
      { code: "314443", name: "Machine Learning", abr: "ML" },
      { code: "314444", name: "Human Computer Interaction", abr: "HCI" },
      { code: "314445A", name: "Design and Analysis of Algorithm", abr: "DAA" },
      {
        code: "314445B",
        name: "Advanced Database and Management System",
        abr: "ADBMS",
      },
      { code: "314445C", name: "Design Thinking", abr: "DT" },
      { code: "314445D", name: "Internet of Things", abr: "IOT" },
    ],
  },
  {
    branch: "IT",
    semester: 2,
    year: "TE",
    subjects: [
      { code: "314451", name: "Computer Networks & Security", abr: "CNS" },
      {
        code: "314452",
        name: "Data Science and Big Data Analytics",
        abr: "DSBDA",
      },
      { code: "314453", name: "Web Application Development", abr: "WAD" },
      { code: "314454A", name: "Artificial Intelligence", abr: "AI" },
      { code: "314454B", name: "Cyber Security ", abr: "CS" },
      { code: "314454C", name: "Cloud Computing", abr: "CC" },
      { code: "314454D", name: "Software Modeling and Design", abr: "SMD" },
    ],
  },
  {
    branch: "IT",
    semester: 1,
    year: "SE",
    subjects: [
      { code: "214441", name: "Discrete Mathematics", abr: "DM" },
      {
        code: "214442",
        name: "Logic Design and Computer Organization",
        abr: "LDCO",
      },
      { code: "214443", name: "Data Structures and Algorithms", abr: "DSA" },
      { code: "214444", name: "Object Oriented Programming", abr: "OOP" },
      { code: "214445", name: "Basics of Computer Network", abr: "BCN" },
    ],
  },
  {
    branch: "IT",
    semester: 2,
    year: "SE",
    subjects: [
      { code: "207003", name: "Engineering Mathematics-III", abr: "EM3" },
      {
        code: "214451",
        name: "Processor Architecture",
        abr: "PA",
      },
      { code: "214452", name: "Database Management System", abr: "DBMS" },
      { code: "214453", name: "Computer Graphics", abr: "CG" },
      { code: "214454", name: "Software Engineering", abr: "SE" },
    ],
  },
  {
    branch: "IT",
    semester: 1,
    year: "BE",
    subjects: [
      { code: "414441", name: "Information and Storage Retrieval", abr: "ISR" },
      {
        code: "414441",
        name: "Software Project Management",
        abr: "SPM",
      },
      { code: "414444A", name: "Elective-3 Mobile Computing", abr: "EL-3 MC" },
      { code: "414444B", name: "Elective-3 High Performance Computing", abr: "EL-3 HPC" },
      { code: "414444C", name: "Elective–3 Multimedia Technology", abr: "EL-3 MT" },
      { code: "414444D", name: "Elective-3 Smart Computing", abr: "EL-3 SC" },
      { code: "414445A", name: "Elective-4 Bioinformatics", abr: "EL-4 BI" },
      { code: "414445B", name: "Elective-4 Introduction to DevOps", abr: "EL-4 DevOps" },
      { code: "414445C", name: "Elective-4 Computer Vision", abr: "EL-4 CV" },
      { code: "414445D", name: "Elective-4 Wirelesss Communication", abr: "EL-4 WC" }
    ],
  },
  {
    branch: "IT",
    semester: 2,
    year: "BE",
    subjects: [
      { code: "414450", name: "Distributed Systems", abr: "DS" },
      {
        code: "414453",
        name: "Startup and Enterpreneurship",
        abr: "SE",
      },
      { code: "414451A", name: "Elective-5 Software Defined Network", abr: "EL-5 SDN" },
      { code: "414451B", name: "Elective-5 Social Computing", abr: "EL-5 SC" },
      { code: "414451C", name: "Elective-5 Natural Language Processing", abr: "EL-5 NLP" },
      { code: "414451D", name: "Elective-5 Soft Computing", abr: "EL-5 SC" },
      { code: "414451E", name: "Elective-5 Game Engineering", abr: "EL-5 GE" },
      { code: "414452A", name: "Elective-6 Ethical Hacking and Security", abr: "EL-5 EHS" },
      { code: "414452B", name: "Elective-6 Ethical Augmented and Virtual Reality", abr: "EL-5 AVR" },
      { code: "414452C", name: "Elective-6 Ethical Business Analytics and Intelligence", abr: "EL-5 BAI" },
      { code: "414452D", name: "Elective-6 Ethical Blockchain Technology", abr: "EL-5 BT" },
    ],
  },

];

const blocks = [
  { name: "A1 109", capacity: "50" },
  { name: "A1 110", capacity: "49" },
  { name: "A3 307", capacity: "59" },
  { name: "A3 308", capacity: "50" },
  { name: "A3 405", capacity: "47" },
  { name: "A3 406", capacity: "48" },
  { name: "A3 407", capacity: "54" },
  { name: "IT Seminar Hall", capacity: "70" },
];

const divisions = {
  FE: [
    {
      className: "FE1",
      startRollNo: 10101,
      endRollNo: 10175,
      total: 75,
      department: "FE",
    },
    {
      className: "FE2",
      startRollNo: 10201,
      endRollNo: 10275,
      total: 75,
      department: "FE",
    },
    {
      className: "FE3",
      startRollNo: 10301,
      endRollNo: 10375,
      total: 75,
      department: "FE",
    },
  ],
  SE: [
    {
      className: "SE1",
      startRollNo: 21101,
      endRollNo: 21189,
      total: 89,
      department: "CE",
    },
    {
      className: "SE2",
      startRollNo: 21201,
      endRollNo: 21288,
      total: 88,
      department: "CE",
    },
    {
      className: "SE3",
      startRollNo: 21301,
      endRollNo: 21386,
      total: 86,
      department: "CE",
    },
    {
      className: "SE5",
      startRollNo: 22101,
      endRollNo: 22178,
      total: 78,
      department: "ENTC",
    },
    {
      className: "SE6",
      startRollNo: 22201,
      endRollNo: 22279,
      total: 79,
      department: "ENTC",
    },
    {
      className: "SE9",
      startRollNo: 23101,
      endRollNo: 23183,
      total: 83,
      department: "IT",
    },
    {
      className: "SE10",
      startRollNo: 23201,
      endRollNo: 23286,
      total: 86,
      department: "IT",
    },
  ],
  TE: [
    {
      className: "TE1",
      startRollNo: 31101,
      endRollNo: 31186,
      total: 86,
      department: "CE",
    },
    {
      className: "TE2",
      startRollNo: 31201,
      endRollNo: 31284,
      total: 84,
      department: "CE",
    },
    {
      className: "TE3",
      startRollNo: 31301,
      endRollNo: 31389,
      total: 89,
      department: "CE",
    },
    {
      className: "TE5",
      startRollNo: 32101,
      endRollNo: 32175,
      total: 75,
      department: "ENTC",
    },
    {
      className: "TE6",
      startRollNo: 32201,
      endRollNo: 32273,
      total: 73,
      department: "ENTC",
    },
    {
      className: "TE9",
      startRollNo: 33101,
      endRollNo: 33181,
      total: 81,
      department: "IT",
    },
    {
      className: "TE10",
      startRollNo: 33201,
      endRollNo: 33280,
      total: 80,
      department: "IT",
    },
    {
      className: "TE11",
      startRollNo: 33201,
      endRollNo: 33294,
      total: 94,
      department: "IT",
    },
  ],
  BE: [
    {
      className: "BE1",
      startRollNo: 41101,
      endRollNo: 41177,
      total: 77,
      department: "CE",
    },
    {
      className: "BE2",
      startRollNo: 41201,
      endRollNo: 41278,
      total: 78,
      department: "CE",
    },
    {
      className: "BE3",
      startRollNo: 41301,
      endRollNo: 41388,
      total: 88,
      department: "CE",
    },
    {
      className: "BE5",
      startRollNo: 42101,
      endRollNo: 42178,
      total: 78,
      department: "ENTC",
    },
    {
      className: "BE6",
      startRollNo: 42201,
      endRollNo: 42279,
      total: 79,
      department: "ENTC",
    },
    {
      className: "BE9",
      startRollNo: 43101,
      endRollNo: 43164,
      total: 64,
      department: "IT",
    },
    {
      className: "BE10",
      startRollNo: 43201,
      endRollNo: 43263,
      total: 63,
      department: "IT",
    },
  ],
};

function sendBlocks() {
  blocks.forEach((block) => {
    axios
      .post("http://localhost:8080/blocks/new", { ...block })
      .then((d) => console.log(d.data));
  });
}

function sendDatas(params) {
  teachers.forEach(function (teacher) {
    axios
      .post(`http://localhost:8080/teachers/new`, {
        teacherId: teacher.sno,
        name: teacher.name,
        designation: teacher.designation,
        joinDate: new Date(teacher.joinDate),
        teachTo: teacher.teachTo,
      })
      .then((d) => {
        console.log(d.data);
      });
  });
}

function sendSubjects(){
  course.forEach((c)=>{
    axios
      .post(`http://localhost:8080/subjects/new`, c)
      .then((d) => {
        console.log(d.data);
      });
  })
}

function sendDivisions(){
  const flattenData = Object.values(divisions).reduce((acc, val) => acc.concat(val), []);
  flattenData.forEach((c)=>{
    axios
      .post(`http://localhost:8080/divisions/new`, {division : c})
      .then((d) => {
        console.log(d.data);
      });
  })
}


//  sendDatas();
//  sendBlocks();
// sendSubjects();
sendDivisions();
