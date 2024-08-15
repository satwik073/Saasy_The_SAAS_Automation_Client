import DropdownMenuComponent from "../../Components/DropdownMenu";
import SaaSyAutomaiton from "../SaaSyAutoSeperated/SaaSyAutomaiton";
import { AiFillThunderbolt } from "react-icons/ai";
interface NavitemDestructured {
    targeted_id : number,
    route_link_name : string,
    specified_path : string
}
export const translating_navigattion_text = {
    logo_text_half_divided : "Saa",
    logo_text_tail : "y",
    dropdown_changing_theme_component : DropdownMenuComponent,
    dark_theme_saasy_icon : AiFillThunderbolt,
    navigation_links_handler : [
        {
            "targeted_id": 1,
            route_link_name: "Products",
            specified_path: "/products"
        },
        {
            "targeted_targeted_id": 2,
            route_link_name: "Pricing",
            specified_path: "/pricing"
        },
        {
            "targeted_id": 3,
            route_link_name: "Clients",
            specified_path: "/clients"
        },
        {
            "targeted_id": 4,
            route_link_name: "Resources",
            specified_path: "/resources"
        },
        {
            "targeted_id": 5,
            route_link_name: "Documentation",
            specified_path: "/documenttation"
        },
        {
            "targeted_id": 6,
            route_link_name: "Enterprise",
            specified_path: "/enterprise"
        },
    ] as NavitemDestructured[],
    drop_down_content : ["Light", "Dark", "System"],
    drop_down_dark_content : "Dark",
    drop_down_light_content : "Light",
    drop_down_light_connecting_content : "light",
    drop_down_dark_connecting_content : "dark",
    drop_down_system_content : "System",
    web_page_current_light_theme_color : "white",
    web_page_current_dark_theme_color : "black",
    theme_selectors : ["light", "dark", "system"]
}