"use client";
import { TaskInterface } from "@/interfaces";
import { Card, CardHeader, CardFooter, Checkbox, Tooltip } from "@nextui-org/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import React, { useState } from "react";
import { buildDragImage } from "@/components/buildDragImage";
import EmptyTask from "./EmptyTask";

export default function TaskCard(Props: TaskInterface) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {

        buildDragImage(event);
        setIsDragging(true);

    }
   

    return (
        <div className={`flex flex-col gap-4 ${Props.status.replace(" " , "") + "task"}`}>
            <Card className={`bg-background order-2 ${isDragging ? 'bg-content1' : ''}`}
            draggable={true}
            onDragStart={handleDragStart}
            >
            <CardHeader className="w-full ">
                <Tooltip content="Complete Task">
                    <Checkbox className="text-primary" checked={false} color="success" />
                </Tooltip>

                <div>
                    <h3 className="text-primary">{Props.name}</h3>
                </div>

            </CardHeader>
            <CardFooter className="">
                <div className="flex gap-4">
                    <MdOutlinePriorityHigh className="text-secondary" />
                    <MdOutlineDateRange className="text-secondary" />
                    <FaUsers className="text-secondary" />
                    <FaTag className="text-secondary" />
                </div>
            </CardFooter>
            
        </Card>
        <EmptyTask className={Props.spaceEmptyVisible ? "order-3" :  `${Props.beforeSpace ? "order-1" : "hidden"}`  } />
        </div>
        
    )
}