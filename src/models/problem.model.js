const mongoose = require('mongoose');
const problemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'title cannot be empty']
    },
    description:{
        type: String,
        required:[true,'description cannot be empty']
    },
    difficulty:{
        type: String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty cannot be empty'],
        default:'easy'
    },
    testCases: [  // array of object
        {
            input:{
                type:String,
                required: true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],
    editorial:{
        type:String
    }
    
    
   
});

const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;
// it is for query or creation (use it as an object)


// Scoping in it :------
// test cases
/**
 * [{input:'5', output: 10},{input:'4', output:7}]
 */ 
/**
 * for two sum Like problem:-
 * Input:- in single string
 * 5\n
 * 1 2 3 4 5\n
 * 6\n
 * 
 * output:-
 * 2 4
 */