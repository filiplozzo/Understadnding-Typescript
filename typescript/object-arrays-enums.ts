// const person: {
//     name: string;
//     age: number;
// } = {
//     const person: {
//         name:string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = {
//     name: 'Filip',
//     age: 27,
//     hobbies: ['Sports', 'Cooking'], //array
//     role: [2, 'author'] //Tuples
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const USER = 2;

enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };

const person = {
name: 'Filip',
age: 27,
hobbies: ['Sports', 'Cooking'],
role: Role.ADMIN
};


//person.role.push('admin');
//person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
   // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR){
    console.log('is author');
}