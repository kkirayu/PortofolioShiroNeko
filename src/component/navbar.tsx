import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Nav() {
return (
    <div className="container mx-auto px-4">
    <Navbar fluid rounded>
        <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Portofolio
        </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
        <NavbarLink href="#" active>
            Home
        </NavbarLink>
        <NavbarLink href="">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#aboutme">Contact</NavbarLink>
        </NavbarCollapse>
    </Navbar>
    </div>
);
}
