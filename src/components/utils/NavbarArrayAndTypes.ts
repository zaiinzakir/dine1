export interface NavbarItemType {
    label:string,
    href:string,
    isDropDown:Boolean,
    dropDownData?:any,                                      //optional
}


export const NavbarArray : Array<NavbarItemType> = [
    {
    label: "Female",
    href: "/female",
    isDropDown: false,
    },
    {
        label: "Male",
        href: "/male",
        isDropDown: false,
    },
    {
        label: "Kids",
        href: "/kids",
        isDropDown: false,
    },
    {
        label: "All Products",
        href: "/allproducts",
        isDropDown: false,
    }
    
    
    

] 