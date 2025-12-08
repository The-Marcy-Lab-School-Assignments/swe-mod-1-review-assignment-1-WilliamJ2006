const uniqueNames = (names) => {
    const newNames = [];
    // const lowerCased = [];
    const lowerCased = new Set;
    names.forEach((name) => {
        // if(!(lowerCased.includes(name.toLowerCase()))){
        if (!(lowerCased.has(name.toLowerCase()))){
            newNames.push(name);
            lowerCased.add(name.toLowerCase())
        }
    })
    return newNames;
}

console.log(uniqueNames(["Maya", "Carlos", "maya", "sarah", "CARLOS"]));
// ["Maya", "Carlos", "sarah"]

console.log(uniqueNames(["ALEX", "Alex", "alex", "AlEx"]));
// ["ALEX"]