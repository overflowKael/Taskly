"use client";
import { StatusCardInterface } from "@/interfaces";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import TaskCard from './TaskCard';
import { TaskInterface } from "@/interfaces";
import { IoAdd } from "react-icons/io5";
import { Tasks } from "./tasks";
import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Form, Input, Button } from "@nextui-org/react";

export default function StatusCard(Props: StatusCardInterface) {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [newTaskName , setNewTaskName] = useState("");
    const [newTaskId , setNewTaskId] = useState("");
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    useEffect(() => {   
        setTasks(Tasks);
    }, [])

    const filterTask = (status: string) => {
        return tasks.filter((task) => task.status === status);
    }

    const handleAddTask = (name: string, id: string) => {
        const newTask: TaskInterface = {
            name: name,
            id: id,
            status: Props.name
        }

        setTasks([...tasks, newTask]);
    }

    const onNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(e.target.value);
    }
    const onIdChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskId(e.target.value);
    }
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTask(newTaskName,newTaskId)
        setNewTaskId("");
        setNewTaskName("");
        setIsPopoverOpen(false);
    }

    return (
        <Card className="max-w-[400px] min-w-[400px] bg-background align-center" draggable>
            <CardHeader className="text-secondary text-[22px]">
                {Props.name}
            </CardHeader>
            <Divider className="" />
            <CardBody className="py-2 px-4 flex flex-col gap-4 bg-content1">
                {
                    filterTask(Props.name).map((task, index) => {
                        return <TaskCard key={index} {...task} />
                    })
                }


            </CardBody>
            <Divider />
            <CardFooter className="bg-content1 text-secondary text-[18px]">
                <div className="flex w-full h-full items-center gap-2">

                    <Popover placement="bottom-start" showArrow offset={20} isOpen={isPopoverOpen} onOpenChange={(open) => setIsPopoverOpen(open)}>

                        <PopoverTrigger>
                            <div className="flex w-full items-center text-[18px] gap-1">
                                <IoAdd className="text-[20px]">

                                </IoAdd>


                                <span className="text-[22px]">
                                    Add Task
                                </span>
                            </div>

                        </PopoverTrigger>
                        <PopoverContent className="w-[300px]"  >
                            {(props) => (
                                <Form className="flex flex-col gap-4 w-[240px] py-2 px-2" onSubmit={handleSubmit} >
                                    <Input className="w-full p-2 text-[30px]"  variant="underlined" placeholder="Task Name" onChange={onNameChange} />
                                    <Input className="w-full p-2" size="md" variant="underlined" placeholder="Id de la tarea"  onChange={onIdChange}/>


                                    <Button className="mt-4"  color="success" type="submit"> Add Task </Button>

                                </Form>
                            )

                            }
                        </PopoverContent>
                    </Popover>

                </div>



            </CardFooter>
        </Card>
    )
}