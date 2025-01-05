"use client";
import { TaskInterface } from "@/interfaces";
import { Card, CardHeader, CardFooter, Checkbox, Tooltip } from "@nextui-org/react";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import React, {  useState } from "react";

export default function TaskCard(Props: TaskInterface) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        
        const dragImage = event.currentTarget.cloneNode(true) as HTMLElement;

        // Asegurar que la imagen de arrastre tiene el mismo tamaño
        dragImage.style.transform = "scale(2)"; 
        const rect = event.currentTarget.getBoundingClientRect();
        dragImage.style.width = `${event.currentTarget.offsetWidth}px`; // Tamaño exacto
  dragImage.style.height = `${event.currentTarget.offsetHeight}px`;
        dragImage.style.position = "absolute";
        dragImage.style.top = "-9999px";
        dragImage.style.left = "-9999px";
        
        dragImage.style.boxShadow = "none"; // Opcional, para evitar efectos raros
        document.body.appendChild(dragImage);
      
        event.dataTransfer.setDragImage(dragImage, rect.width / 2, rect.height / 2);
      
        setTimeout(() => dragImage.remove(), 0);
  
        setIsDragging(true);


        // Crea una imagen invisible para el drag





    }
    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false);
    }

    return (
        <Card className={`bg-background ${isDragging ? '' : ''}`}
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}>
            <CardHeader className="">
                <Tooltip content="Complete Task">
                    <Checkbox className="text-primary" checked={false} color="success" />
                </Tooltip>

                <div>
                    <h3 className="text-primary">{Props.name}</h3>
                </div>

            </CardHeader>
            <CardFooter >
                <div className="flex w-full gap-4">
                    <MdOutlinePriorityHigh className="text-secondary" />
                    <MdOutlineDateRange className="text-secondary" />
                    <FaUsers className="text-secondary" />
                    <FaTag className="text-secondary" />
                </div>
            </CardFooter>
        </Card>
    )
}