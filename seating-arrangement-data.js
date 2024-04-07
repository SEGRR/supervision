const seatingArrangementDataTable = [
    {
        sno : 1,
        title :'Unit Test',
        academicYear :'2023-2024',
        department:'Information Technology',
       
    },

    {
        sno : 2,
        title :'Unit Test',
        academicYear :'2024-2025',
        department:'Information Technology',
    
    }
]

const divisionsData = {
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

const classroomData = [
    { name: 'A1 109', capacity: '50' },
    { name: 'A1 110', capacity: '49' },
    { name: 'A3 307', capacity: '59' },
    { name: 'A3 308', capacity: '50' },
    { name: 'A3 405', capacity: '47' },
    { name: 'A3 406', capacity: '48' },
    { name: 'A3 407', capacity: '54' },
    { name: 'IT Seminar Hall', capacity: '70' }
];

export function getSeatingArrangementList(){
    return seatingArrangementDataTable;
}

export function getClassRoomData(){
    return classroomData;
}

export function getDivisionsData(){
    return divisionsData;
}

