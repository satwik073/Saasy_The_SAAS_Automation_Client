import SaaSyAutomaiton from "../SaaSyAutoSeperated/SaaSyAutomaiton";

interface NavitemDestructured {
    targeted_id : number,
    route_link_name : string,
    specified_path : string
}
export const translating_navigattion_text = {
    logo_text_half_divided : "Saa",
    logo_text_tail : "y",
    left_aside_component_from_navigation : SaaSyAutomaiton,
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
    ] as NavitemDestructured[]
}