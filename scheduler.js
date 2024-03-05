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
let yearOnly = await Teachers.find({teachTo: [year]});
let avail = allTeachers.length;

console.log("available teachers: ",avail);
let perTeacher = Math.floor(totalReq/avail);
console.log("perTeacher ", perTeacher)
console.log("remaining ",totalReq%avail);
console.log("only TE teachers",yearOnly.length);
 
schedule = []

for(var slot = 0 ; slot < totalReq ; slot++){
    let s = []

    for(var teacher  = 0 ; teacher < avail ; teacher++){
        
    }
}

}


