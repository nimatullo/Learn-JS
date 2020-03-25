// Objects
function Book (title, author, pages, read) {
    return {
        title,
        author,
        pages,
        read
    }
}
// Arrow Functions
const getLocation = location => {
    console.log(`I'm in ${location}.`);
}
getLocation("Brooklyn");
// 'this' keyword
const user = {
    name: "Sherzod",
    age: 20,
    getName: function() {
        console.log(`My name is ${this.name}`);
        const fullname = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
        fullname();
    }
};
user.getName();