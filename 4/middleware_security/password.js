import bcrypt from "bcrypt";

console.log(bcrypt);


const saltBounds = 12;
const myPlaintextPassword = 'hunter123';
const hashedPassword = '$2b$12$1zZcUwFme3kYqGUOUxsHxOxfKQ6Hc3gjjzlrpoG6AYs4/qOYLAb3y'

async function handlePassword(){
    const hash = await bcrypt.hash(myPlaintextPassword, saltBounds);
    console.log(hash);

    const isSame = await bcrypt.compare(myPlaintextPassword, hashedPassword)
    console.log(isSame);

}

handlePassword();


export default {};