const Teachers = require("./models/teacher.js");

async function MakeSchedule(title, subjects, blocks, year, paperPerDay, timeSlots, teacherList){
  console.log("In make schedule");
  let finalSchedules = {}

    for(let y of year)
       finalSchedules[y] = await createSingleSchedule(subjects[y] , blocks[y], paperPerDay , y, teacherList)
  
    return finalSchedules;
}

const createSingleSchedule = async (numSubjects ,blocks, paperPerDay , year , teacherList) => {
 
// let examDays = 4;
// let perClassReq = 1;
// let  blocks = 6

console.log(numSubjects ,blocks, paperPerDay , year)


// a block needs teacher for invigilation , a subject requires a number of blocks , 
// so the total number of exam slots  =   numSubject * blocks 
// eg. for TE  total 9 blocks are needed with 4 subjects 
// so totalRequirement = subject * block
// for perdayReq =  totalRequirement / paperPerday    which is mostly 2 per day

// ** optional **  (for now)
// perdayReq is needed to get time and date for a slot so that we can check if 
// teachers are free that time 

let totalReq = numSubjects * blocks; 
let perDayReq = totalReq/paperPerDay;

// let year = "TE";
// available teachers list


// first we take teachers who teach to that year
 let allTeachers = await Teachers.find({teachTo : year}) ;
//  console.log(allTeachers)

// then teachers who teach to that year only 
//   yearOnlyTeachers is subset of allTeachers 
let yearOnlyTeachers = await Teachers.find({teachTo: [year]});


let avail = allTeachers.length


 
let yearOnly =  yearOnlyTeachers.length
// console.log("remaining ",totalReq%avail);
// console.log("only TE teachers",yearOnly.length);


// now we calcularte how many exams slots to be assigned to each teacher 
// it is important for balanced schedule 
let perTeacher = Math.floor(totalReq/avail);

// remaining slots will be assgined to yearOnly teachers 
var remainingSlots = totalReq % avail;

console.log("avail" , avail)


// final schedule
var schedule = {}


// final schedule will look like   teacherID : [0 , 0  ,0 , 1]
// each teacher has his schedule with array index mapping to exam slot number 
// 0 --> means not assigned 
// 1 --> means assigned 

// create our schedule table  with  teacher id and not schedule assigned 
// i.e.   teacherId : [ 0 0 0 0 0 0 0 0 0 0]

console.log("totalReq" , totalReq)

  allTeachers.forEach((doc , index)=>{
      let list = new Array(totalReq).fill(false);
      schedule[doc.teacherId] = list;
  });

 console.log("made init sch");
// having refrence to which schedule we are currently assigning 
var sch= 0



// this will assign all teachers with respective exam slots 
 for(var i = 0 ; i<perTeacher ; i++){

    for(let teacher in schedule){
        schedule[teacher][sch] = true;
        sch++;
    }

 }

console.log("starting init make")

// for remaining slots will assigned to yearonly techer 
// if there are any remaining slots 
if(remainingSlots != 0)
{
while(sch < totalReq){
  yearOnlyTeachers.forEach((doc)=>{
    if(sch < totalReq){
      let teacherId = doc.teacherId;
      schedule[teacherId][sch] = true;
      sch++;
    }
  });
}
}

// finally print the result 
// and return the schedule 

console.table(schedule);
 return { totalSlots:totalReq ,schedule};

}
 
// {
//   techerId:{
    // slotNo:,
    // date:,
    // time:,
    // blockNumber:,
    // subject:,
    // year:,
//   }
// }


function makeFacultyWiseSchedule(sch){

}


module. exports = {MakeSchedule}