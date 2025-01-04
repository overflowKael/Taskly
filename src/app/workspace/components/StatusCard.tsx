import { StatusCardInterface } from "@/interfaces";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import TaskCard from './TaskCard';
import { TaskInterface } from "@/interfaces";
import { IoAdd } from "react-icons/io5";

export default function StatusCard(Props: StatusCardInterface) {
    const task: TaskInterface = {
        name: "First Task",
        description: "This is a description of the first task",
        users: ["John Doe", "Jane Doe"],
        dueDate: new Date(),
        status: "In Progress",
        priority: 1,
        tags: ["tag1", "tag2"],
        id: "1"
    }

    return (
        <Card className="w-[400px] bg-background">
            <CardHeader className="text-secondary text-[18px]">
                {Props.name}
            </CardHeader>
            <Divider className="" />
            <CardBody className="py-2 px-4 flex flex-col gap-4 bg-content1">
                <TaskCard {...task} />

            </CardBody>
            <Divider />
            <CardFooter className="bg-content1 text-secondary text-[18px]">
                <div className="flex w-full h-full items-center gap-2">
                    <IoAdd >

                    </IoAdd>
                    <span>
                        Add Task
                    </span>
                </div>


                
            </CardFooter>
        </Card>
    )
}