const findMissingStudent = (yesterday, today) => {
  // Your code here
  const newT = new Set(today);
  if(yesterday.length === today.length){
    return '';
  }
  return yesterday.find(student => (!(newT.has(student))))
}

console.log(findMissingStudent(
  ["Maya", "Reuben", "Sarah", "James"],
  ["Maya", "Sarah", "James"]
));
// "Reuben"

console.log(findMissingStudent(
  ["Alex", "Jordan"],
  ["Jordan", "Alex"]
));
// "" (no one missing)