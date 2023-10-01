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
    isDropDown: true,
    dropDownData: [
        {
            label:"Dresses",
            href:"/female/dresses"
        },
        {
            label:"Shirts",
            href:"/female/shirts"
        },
        {
            label:"Pants",
            href:"/female/pants"
        },
        {
            label:"Accessories",
            href:"/female/accessories"
        }
    ]
    },
    {
        label: "Male",
        href: "/male",
        isDropDown: true,
        dropDownData: [
            {
                label:"Suits",
                href:"/male/suits"
            },
            {
                label:"Shirts",
                href:"/male/shirts"
            },
            {
                label:"Pants",
                href:"/male/pants"
            },
            {
                label:"Accessories",
                href:"/male/accessories"
            }
        ]
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