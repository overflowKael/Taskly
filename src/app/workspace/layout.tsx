import Header from "./components/Header";

export const metadata = {
    title: "Taskly - Workspace",
    description: "Workspace page of Taskly",
}



export default function WorkspacePageLayout( { children } : { children : React.ReactNode}){
    
    
    
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}