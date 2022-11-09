let student = {
    id: 18,
    name: "Gulburak",
    age: "19",
    course: "second",
    lessons: 2,
    subjects: [
        {
            name: 'HTML CSS',
            id: 20,
            name_of_teacher: 'Timur',
        },
        {
            name: 'JS',
            id: 21,
            name_of_teacher: 'Abai',
        },
        {
            name: 'React',
            id: 22,
            name_of_teacher: 'unknown',
        }
    ],
   
}
console.log(student);



let str = "Kyrgyzstan";

switch(str) {
    case "Kyrgyzstan":
        console.log(' Bishkek');
        break;
    case "Russia":
        console.log('Moscow');
        break;
    case "Uzbekistan":
        console.log('Tashkent')
        break ;
    case "Kazakstan":
        console.log('Astana')
        break;
    default:
        console.log('Not match!')
}


let arr1 = [20,12,15,27,7,5,9,];

let newArr = []
for (let i =0; i< arr1.length; i++){
    if(arr1[i]>10){
        newArr.push(arr1[i])
        
    }
}

console.log(newArr);