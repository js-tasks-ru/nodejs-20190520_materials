const students = [
  {name: 'Ivan', month: 0},
  {name: 'Anna', month: 11},
  {name: 'Dmitry'},
  {name: 'Maria'},
  {name: 'Sergey'},
  {name: 'Anna'}
];

const studentsByName = {
  'Ivan': [students[0]],
  'Anna': [students[1], students[5]],
};

// const ann = students.find(s => s.name === 'Anna');

const ann = studentsByName['Anna'];
console.log(ann);
