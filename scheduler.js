const teachers  = [];
const no_teacher = 20;
const requirement = 5;
const days = 5;
var schedule = [];
for(let i  = 1 ; i<no_teacher; i++){
    teachers.push(i);
}
var s = 1;
var t= 0;
while( s <= requirement * days && t < no_teacher){
    let randId  = Math.floor(Math.random() * no_teacher) + 1;
    
    if(schedule.find((d)=> d.id === randId) != undefined){
        continue;
    }
    else{
        schedule.push({ sch:s, id: randId});
        t++;
        s++
    }
}

console.log(schedule);

if(s < requirement * days ){
    teachers.sort((a, b)=> a > b);
    var id = 1 ;

    for(s ; s<= days * requirement ; s++){
        schedule.push({ sch:s, id: id});
        id++;
    }

}
 
console.log(schedule);



