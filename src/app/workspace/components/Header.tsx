import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import { MdMenu } from "react-icons/md";

export default function Header(){
    return (
        <Navbar className="bg-background" isBlurred={false} maxWidth="full" height={100} isBordered={true}>
            <NavbarContent justify="start"> 
                <MdMenu className="cursor-pointer text-[32px] "/>
                <NavbarBrand className="text-[32px] font-semibold">
                    Taskly Workspace
                </NavbarBrand>
                
            </NavbarContent>
        </Navbar>
    )
}