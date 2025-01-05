import { TaskInterface } from "@/interfaces";

export const Tasks : TaskInterface[]  =  [
    {
        name: "First Task",
        description: "This is a description of the first task",
        users: ["John Doe", "Jane Doe"],
        dueDate: new Date(),
        status: "In Progress",
        priority: 1,
        tags: ["tag1", "tag2"],
        id: "1"
    },
    {
        name: "Second Task",
        description: "Complete the marketing report for Q1",
        users: ["Alice Smith", "Bob Brown"],
        dueDate: new Date("2025-01-10"),
        status: "To Do",
        priority: 2,
        tags: ["marketing", "report"],
        id: "2"
    },
    {
        name: "Third Task",
        description: "Fix critical bug in the payment gateway",
        users: ["Charlie Johnson"],
        dueDate: new Date("2025-01-08"),
        status: "In Progress",
        priority: 1,
        tags: ["bug", "payment"],
        id: "3"
    },
    {
        name: "Fourth Task",
        description: "Prepare slides for the upcoming team meeting",
        users: ["Diana White", "Eve Black"],
        dueDate: new Date("2025-01-12"),
        status: "To Do",
        priority: 3,
        tags: ["presentation", "team"],
        id: "4"
    },
    {
        name: "Fifth Task",
        description: "Organize files in the shared drive",
        users: ["Frank Green"],
        dueDate: new Date("2025-01-15"),
        status: "Completed",
        priority: 4,
        tags: ["organization", "files"],
        id: "5"
    },
    {
        name: "Sixth Task",
        description: "Design mockups for the new homepage",
        users: ["Grace Hall"],
        dueDate: new Date("2025-01-18"),
        status: "In Progress",
        priority: 2,
        tags: ["design", "mockups"],
        id: "6"
    },
    {
        name: "Seventh Task",
        description: "Conduct interviews for the new hire",
        users: ["Henry King", "Ivy Lopez"],
        dueDate: new Date("2025-01-20"),
        status: "To Do",
        priority: 1,
        tags: ["HR", "interviews"],
        id: "7"
    },
    {
        name: "Eighth Task",
        description: "Update security patches on all servers",
        users: ["Jack Martin"],
        dueDate: new Date("2025-01-22"),
        status: "In Progress",
        priority: 2,
        tags: ["IT", "security"],
        id: "8"
    },
    {
        name: "Ninth Task",
        description: "Plan the annual company retreat",
        users: ["Karen Nelson", "Liam Parker"],
        dueDate: new Date("2025-02-01"),
        status: "To Do",
        priority: 3,
        tags: ["planning", "retreat"],
        id: "9"
    },
    {
        name: "Tenth Task",
        description: "Submit the tax documents for the fiscal year",
        users: ["Mia Quinn"],
        dueDate: new Date("2025-01-31"),
        status: "To Do",
        priority: 1,
        tags: ["finance", "taxes"],
        id: "10"
    }
];
