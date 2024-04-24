const {StatusCodes} = require('http-status-codes')

function pingProblemController(req,res){
    return res.json({message: 'Problem Controller is up'});
}


function addProblem(req,res){
<<<<<<< HEAD
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
=======
    return res.status(501).json({
>>>>>>> 5e29e6c15c8c74fdebe78f1a182c917d3ff8e7d0
        message:"Not Implemented"
    })
}

function getProblem(req,res){
<<<<<<< HEAD
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
=======
    return res.status(501).json({
>>>>>>> 5e29e6c15c8c74fdebe78f1a182c917d3ff8e7d0
        message:"Not Implemented"
    })
}

function getProblems(req,res){
<<<<<<< HEAD
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
=======
    return res.status(501).json({
>>>>>>> 5e29e6c15c8c74fdebe78f1a182c917d3ff8e7d0
        message:"Not Implemented"
    })
}

function deleteProblem(req,res){
<<<<<<< HEAD
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
=======
    return res.status(501).json({
>>>>>>> 5e29e6c15c8c74fdebe78f1a182c917d3ff8e7d0
        message:"Not Implemented"
    })
}

function updateProblem(req,res){
<<<<<<< HEAD
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
=======
    return res.status(501).json({
>>>>>>> 5e29e6c15c8c74fdebe78f1a182c917d3ff8e7d0
        message:"Not Implemented"
    })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}
