const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const{ PrismaClient } = require('@prisma/client');
const pool = new Pool({connectionString: process.env.DATABASE_URL});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({adapter});

exports.getAllTasks = async (req,res)=>{
    const tasks = await prisma.task.findMany({
        orderBy:{createdAt:'desc'}
    });
    res.json(tasks);
};

exports.createTask = async (req,res)=>{
    const {title} = req.body;
    const newTask = await prisma.task.create({
        data:{title}
    });
    res.status(201).json(newTask);
};

exports.updateTask = async (req,res)=>{//1-E
    const {id} = req.params;
    const {isDone} = req.body;
    const updatedTask = await prisma.task.update({
        where: {id:Number(id)},
        data: {isDone}
    });
    res.json(updatedTask);
};

exports.deleteTask = async (req,res)=>{
    const {id} = req.params;
    await prisma.task.delete({
        where:{id:Number(id)}
    });
    res.status(204).send();
};