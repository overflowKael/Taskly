import {StatusCardInterface} from "@/interfaces";
import StatusCard from "./components/StatusCard";

export default function WorkspacePage(){
    const statusCards : StatusCardInterface[] = [
        {
            name : "To Do",
            progress : 0,
        },
        {
            name : "In Progress",
            
        },
        {
            name : "Completed",
          
        },
        
    ]
    return (
        <div className="w-full overflow-x-auto flex items-center h-full gap-10 px-5 py-10">
            {
                statusCards.map((statusCard) =>{
                    return <StatusCard key={statusCard.name} {...statusCard} />
                })
            }
        </div>
    )
}