import DropdownMenuComponent from "@/Globals/GlobalSiteNavigation/Components/DropdownMenu";
import { Separator } from "@/Globals/GlobalToolTips/Seperator/SeperatorContainer";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/Globals/GlobalToolTips/TooltipContent";
import { Cross, Database, GitBranch, Icon, LucideMousePointerClick } from "lucide-react";
import { FaBolt } from "react-icons/fa";

interface MenuOptionsAttributes{
    logo_icon_setteled :  typeof FaBolt,
    drawer_exit_enabled :  typeof Cross,
    tool_tip_provider :  typeof TooltipProvider,
    tool_tip_wrapper :  typeof Tooltip ,
    tool_tip_trigger :  typeof TooltipTrigger,
    seperator_aligned :  typeof Separator,
    lucid_pointer_click : typeof  LucideMousePointerClick,
    git_branch_aligned : typeof  GitBranch,
    database_defined :  typeof Database,
    tool_tip_content : typeof TooltipContent,
    drop_down_menu_content_wrapped :  typeof DropdownMenuComponent
}
export const  MENU_OPTIONS_SCREEN_CONTENT :{ CONTENT  : MenuOptionsAttributes }= {
    CONTENT :{
        logo_icon_setteled : FaBolt,
        drawer_exit_enabled : Cross,
        tool_tip_provider : TooltipProvider,
        tool_tip_wrapper : Tooltip ,
        tool_tip_trigger : TooltipTrigger,
        seperator_aligned : Separator,
        tool_tip_content : TooltipContent,
        lucid_pointer_click : LucideMousePointerClick,
        git_branch_aligned : GitBranch,
        database_defined : Database,
        drop_down_menu_content_wrapped : DropdownMenuComponent

    }
}