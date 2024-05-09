const logger = require('../config/logger.config');
const NotFound = require('../errors/notfound.error');
const { Problem } = require('../models');

class ProblemRepository {

    async createProblem(problemData) {
        try {

            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });

            return problem;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem) {
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 

    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
    
            if (!deletedProblem) {
                const errorMessage = `Problem.Repository: Problem with id ${id} not found in the database`;
                logger.error(errorMessage);
                throw new NotFound("problem", id);
            }
    
            return deletedProblem;
        } catch (error) {
            // Log the error using the logger
            logger.error(`Problem.Repository: Problem with id: ${id} not found in the db`);
            
            // Re-throw the error to propagate it further
            throw error;
        }
    }
    

}

module.exports = ProblemRepository;