import * as mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    todoInput:{
        type:String,
        required:true,
    },
},{timestamps:true});

const Todo = mongoose.model('Todo',todoSchema);

export default Todo;