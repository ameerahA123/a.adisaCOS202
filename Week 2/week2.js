const song = `twinkle twinkle little star
how I wonder what you are
up above the world so high

like a diamond in the sky`

const line = 'how I wonder\n\t what you are'
const myName = 'franc'
const age = 66

const intro = `My name ${myName} and I am ${age} years old. I was born in ${new Date().getFullYear() - age}`
//const intro = 'My name is ' + myName 

// const statement = "She says 'I am in class' "
const statement = "she says \"I am in class\""
//console.log(song)
//consolde.log(line)
console.log(intro)

let chason = "twinklt twinkle twinkle"
let strlen = chason.length
console.log(strlen)

const upper = chason.toUpperCase()

console.log(upper)

const students = ['kendara', 'vincent', 'onyinyechi']
students.push('amira')

const second = ['clinton', 'tayy', 'brian']
const last = ['timi', 'tochukwu', 'donald', 'juwon']
students.push(...second) //... appends only the content of the array
students.unshift(...last) // adds to the beginning of the array

students[5] = 'tayyib'

students.pop() //Delete the las element
students.shift() //removes the first element

/*students.splice(students.indnexOf('vincent'),0,'esosa')
students.splice(students.indnexOf('amira'),1)
students.splice(1,1) //start number and number of deletions...learn splice*/

//const people = students.slice() //slice uses optional parameters
//or
const people = [...students] //to create a new array
const numbers = [13, 43, 6, 79, 87, 5]


students.pop()
people.unshift('tomba')
people.sort().reverse()

const firstT = people.find(person => person[0] == 't')
const allT = people.filter(person => person[0] == 't')

console.log(students)
console.log(students.length)
//console.log(students[4][0])
console.log(students)
console.log([1]==[1])

let name = 'Tranc'
//name = 'Franc' OR
name = name.replace(name[0], 'F')
console.log(numbers.sort((x,y) => y-x))
console.log(firstT)

//find numbers that are not even

const longNames = people.filter(name=>name.length <= 5)
console.log(longNames)