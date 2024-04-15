const Teachers = require("./models/teacher.js");
const wrapAsync = require("./utils/wrapAsync.js");

async function MakeSchedule(
  title,
  subjects,
  blocks,
  year,
  paperPerDay,
  timeSlots,
  teacherList
) {
  try{
  console.log("In make schedule");
  let finalSchedules = {};

  for (let y of year)
    finalSchedules[y] = await createSingleSchedule(
      subjects[y],
      blocks[y],
      paperPerDay,
      y,
      teacherList
    );

  return finalSchedules;
}catch(err){
  throw err;
}
}

const createSingleSchedule = async (
  numSubjects,
  blocks,
  paperPerDay,
  year,
  teacherList
) => {
  try {
    console.log(numSubjects, blocks, paperPerDay, year);

    let totalReq = numSubjects * blocks;
    let perDayReq = totalReq / paperPerDay;

    let allTeachers = await Teachers.find({ teachTo: year });
    let yearOnlyTeachers = await Teachers.find({ teachTo: [year] });

    let avail = allTeachers.length;

    let yearOnly = yearOnlyTeachers.length;
    // console.log("remaining ",totalReq%avail);
    // console.log("only TE teachers",yearOnly.length);

    // now we calcularte how many exams slots to be assigned to each teacher
    // it is important for balanced schedule
    let perTeacher = Math.floor(totalReq / avail);

    // remaining slots will be assgined to yearOnly teachers
    var remainingSlots = totalReq % avail;

    console.log("avail", avail);
    console.log("remaining ", remainingSlots);

    // final schedule
    var schedule = {};

    console.log("totalReq", totalReq);

    allTeachers.forEach((doc, index) => {
      let list = new Array(totalReq).fill(false);
      schedule[doc.teacherId] = list;
    });
    var sch = 0;

    for (var i = 0; i < perTeacher; i++) {
      for (let teacher in schedule) {
        schedule[teacher][sch] = true;
        sch++;
      }
    }
    if (remainingSlots != 0) {
      while (sch < totalReq) {
        yearOnlyTeachers.forEach((doc) => {
          if (sch < totalReq) {
            let teacherId = doc.teacherId;
            schedule[teacherId][sch] = true;
            sch++;
          }
        });
      }
    }

    //console.table(schedule);
    return { totalSlots: totalReq, schedule };
  } catch (err) {
    console.log("ERROR");
    throw err;
  }
};

function makeFacultyWiseSchedule(sch) {}

module.exports = { MakeSchedule };
