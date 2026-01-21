import { userLinks } from "@/utils/links";
import NavItem from "./NavItem";

export default function DashboardNav() {
    return (
        <>
            {userLinks.map((link) => {
                const { href, label } = link
                return <NavItem href={href} label={label} />
            })}
        </>
    );
}