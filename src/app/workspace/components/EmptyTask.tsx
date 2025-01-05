
import { Card } from "@nextui-org/react"
export default function EmptyTask({ className }: { className?: string }) {
    return (
        <Card className={`bg-background w-full h-[88px] border-dotted border-success border-2 ${className}`} >

        </Card>
    )
}