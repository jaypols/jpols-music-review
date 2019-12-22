const jwt = require('jsonwebtoken');

module.exports = function auth (req, res, next)
{
    // const token = req.header('auth-token');
    // console.log(token);
    // if(!token) return res.status(401).send('Access Denied');

    // try{
    //     const verified = jwt.verify(token, 'qwerty');
    //     req.user = verified;
    //     next();
    // }catch(err){
    //     res.status(400).send('Invalid Token');
    // }
    if(!req.headers.authorization)
    {
        return res.status(401).send('UnAuthorized Request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null')
    {
        return res.status(401).send('UnAuthorized Request');
    }
    let payload = jwt.verify(token, 'qwerty');
    if(!payload)
    {
        return res.status(401).send('UnAuthorized Request');
    }
    req.userId = payload.subject;
    next();
}