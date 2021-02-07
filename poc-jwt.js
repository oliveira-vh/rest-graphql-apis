const jwt = require('jsonwebtoken');

const secret = 'kajsssjs2093832284383jjjsksl';
const token = jwt.sign({
    user: {
        id: 1,
        name: 'victor'
    }
}, secret, { expiresIn: '2 days' });

try{
jwt.verify(token, secret);
} catch(err){
    console.log(err)
}
console.log(token);