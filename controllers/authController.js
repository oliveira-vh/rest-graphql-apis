const jwt = require('jsonwebtoken');

const secret = 'kajsssjs2093832284383jjjsksl';


const USERS = {
    'victor@mail.com': 'abc123'
}

const auth = async (req, res) => {
    const { user, passwd } = req.body

    //todo: checar no banco de dados
    if(USERS[user] && USERS[user] === passwd){
        const token = jwt.sign({
            user
        }, secret, { expiresIn: '2 days' });
        return res.send({
            success: true,
            token
        })
    }
    res.send({
        success: false,
        message: 'wrong credentials'
    })
    
}



module.exports = {
    auth
}