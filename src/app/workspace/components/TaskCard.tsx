import {TaskInterface} from "@/interfaces";
import { Card, CardHeader , CardFooter, Checkbox, Tooltip} from "@nextui-org/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTag } from "react-icons/fa";

export default function TaskCard(Props : TaskInterface){
    return (
        <Card className="bg-background ">
            <CardHeader className=""> 
                <Tooltip content="Complete Task">
                    <Checkbox className="text-primary" checked={false} color="success" />
                </Tooltip>
                
                <div>
                    <h3 className="text-primary">{Props.name}</h3>
                </div>

            </CardHeader>
            <CardFooter >
                <div className="flex w-full justify-between">
                    <MdOutlinePriorityHigh className="text-secondary" />
                    <MdOutlineDateRange className="text-secondary" />
                    <FaUsers className="text-secondary" />
                    <FaTag className="text-secondary" />
                </div>
            </CardFooter>
        </Card>
    )
}