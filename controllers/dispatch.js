const {insertOne, findAllDispatches, findDispatchById} = require("../util/db");
const path = require('path');

exports.postProducts = (req, res, next) => {
    insertOne(req.body)
        .then(result => (res.sendStatus(200)))
        .catch(err => {
            console.log(err)
        })

}
exports.getDispatches = (req, res, next) => {
    findAllDispatches().then(result => {
        res.json(result)
    })
        .catch(err => console.log(err))
}
exports.getDispatchById = (req, res, next) => {
    const id = req.body.id;
    findDispatchById(id).then(result => {
        res.json(result)
    })
        .catch(err => console.log(err))
}
exports.getHTML = (req, res,next) => {
    console.log('connect...');
    res.sendFile(path.join(process.cwd(),'dist', 'index.html'))
}
