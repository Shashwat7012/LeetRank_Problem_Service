function pingProblemController(req,res){
    return res.json({message: 'Problem Controller is up'});
}


function addProblem(req,res){
    return res.status(501).json({
        message:"Not Implemented"
    })
}

function getProblem(req,res){
    return res.status(501).json({
        message:"Not Implemented"
    })
}

function getProblems(req,res){
    return res.status(501).json({
        message:"Not Implemented"
    })
}

function deleteProblem(req,res){
    return res.status(501).json({
        message:"Not Implemented"
    })
}

function updateProblem(req,res){
    return res.status(501).json({
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