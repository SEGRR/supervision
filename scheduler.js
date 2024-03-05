const Teachers = require("./models/teacher.js");

// const teachers  = [];
// const no_teacher = 20;
// const requirement = 5;
// const days = 5;
// var schedule = [];
// for(let i  = 1 ; i<no_teacher; i++){
//     teachers.push(i);
// }
// var s = 1;
// var t= 0;
// while( s <= requirement * days && t < no_teacher){
//     let randId  = Math.floor(Math.random() * no_teacher) + 1;
    
//     if(schedule.find((d)=> d.id === randId) != undefined){
//         continue;
//     }
//     else{
//         schedule.push({ sch:s, id: randId});
//         t++;
//         s++
//     }
// }

// console.log(schedule);

// if(s < requirement * days ){
//     teachers.sort((a, b)=> a > b);
//     var id = 1 ;

//     for(s ; s<= days * requirement ; s++){
//         schedule.push({ sch:s, id: id});
//         id++;
//     }

// }
 
// console.log(schedule);

module. exports = async () => {
 
let examDays = 4;
let perClassReq = 1;
let  blocks = 6
let perDayReq = perClassReq*blocks;

let totalReq = examDays * perDayReq; 
let year = "TE";
// available teachers list


 let allTeachers = await Teachers.find({teachTo : year}) ;// teachers teaching only to TE
 console.log(allTeachers)
let yearOnlyTeachers = await Teachers.find({teachTo: [year]});
// let avail = allTeachers.length;
let avail = 16
console.log("available teachers: ",avail);

 
let yearOnly = 6 
// console.log("remaining ",totalReq%avail);
// console.log("only TE teachers",yearOnly.length);
let perTeacher = Math.floor(totalReq/avail);
var remainingSlots = totalReq % avail;
var schedule = {}

  allTeachers.forEach((doc , index)=>{
      let list = new Array(totalReq).fill(0);
      schedule[doc.teacherId] = list;
  });


var sch= 0

 for(var i = 0 ; i<perTeacher ; i++){

    for(let teacher in schedule){
        schedule[teacher][sch] = 1;
        sch++;
    }

 }

 if(sch > totalReq){
    console.log(schedule)
 }

while(sch < totalReq){
  yearOnlyTeachers.forEach((doc)=>{
    if(sch < totalReq){
      let teacherId = doc.teacherId;
      schedule[teacherId][sch] = 1;
      sch++;
    }
  });
}


console.table(schedule)
 return schedule

}




