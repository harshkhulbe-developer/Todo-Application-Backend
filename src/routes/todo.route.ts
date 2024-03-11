import * as express from "express";
const todoRouter = express.Router();
import { Todos } from '../controllers/todo.controller';

//Create a todo
todoRouter.post("/create-todo",Todos.createTodo);
//Get All the todos
todoRouter.get("/todos",Todos.getAllTodos);
//Get a particular todo
todoRouter.get("/todo",Todos.getASingleTodo);
//Update a particular todo
todoRouter.put("/todo/:id",Todos.updateTodo);
//Delete a todo
todoRouter.delete("/delete-todo/:id",Todos.deleteTodo);
export default todoRouter;