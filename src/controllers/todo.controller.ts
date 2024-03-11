import { Request, Response } from "express";
import Todo from "../models/todo.model"

export class Todos {

    static async createTodo(req: Request, res: Response) {
        try {
            const { todoInput } = req.body;
            const todo = await Todo.create({ todoInput });
            return res.status(200).json({
                message: "Todo created successfully",
                todo,
            })
        } catch (error) {
            console.log("Error: ", error);
            return res.status(500).json({
                message: "Server error while creating a todo",
            })
        }
    }

    static async getAllTodos(req: Request, res: Response) {
        try {
            const todos = await Todo.find();
            if (!todos) {
                return res.json(404).json({
                    message: "No todo found",
                })
            }

            return res.status(200).json({
                message: "Successfully got all the todos",
                todos,
            })
        } catch (error) {
            console.log("Error: ", error);
            return res.status(500).json({
                message: "Server error while getting all todos",
            })
        }
    }


    static async getASingleTodo(req: Request, res: Response) {
        try {
            const searchText = req.query.searchText as string;
            const todo = await Todo.find({ todoInput: { $regex: new RegExp(searchText, 'i') } });

            if (todo.length === 0) {
                res.status(404).json({
                    message: "No todo found",
                })
            }

            return res.status(200).json({
                message: "Todo found successfully",
                todo,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Server error while getting a todo",
            })
        }
    }


    static async updateTodo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { todoInput } = req.body;
            const updatedTodo = await Todo.findByIdAndUpdate(id, { todoInput },{new:true});
            if (!updatedTodo) {
                return res.status(400).json({
                    message: "Cannot update a todo",
                })
            }

            return res.status(200).json({
                message: "Successfully updated the todo",
                updatedTodo,
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message:"Server error while updating the todo",
            })
        }
    }


    static async deleteTodo(req: Request, res: Response) {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            res.status(400).json({
                message: "Can't delete todo",
            })
        }
        res.status(200).json({
            message: "Todo deleted successfully",
            deletedTodo,
        })
    }
}
