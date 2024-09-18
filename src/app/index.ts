
import PrimaryNavigation from "@/Globals/GlobalSiteNavigation/NavigationWrapping/PrimaryNavigation";
import { SpotlightPreview } from "@/Pages/SpotLightCombined/SpotLightModuler";
import { InfiniteMovingCards } from "@/Animations/MovingCardsGlobalState";
import { FeaturesSectionDemo } from "@/Pages/GridContainer/GridConstants";
import { FeaturedSectionDemo } from "@/Pages/GridContainer/GridTerminalLayout";
import CardContainers from "@/Pages/CardWrapper/CardFlexContainers";
import PeopleEngaged from "@/Pages/Testimonials/PeopleEngaged";
import PrimarySiteFooter from "../Globals/GlobalSiteFooter/FooterAttributesWrapping/Components/PrimarySiteFooter";


interface HomePageProps {
    navbar_junction: typeof PrimaryNavigation;
    spotlight_preview: typeof SpotlightPreview;
    infinite_cards: typeof InfiniteMovingCards;
    features_section_demo: typeof FeaturesSectionDemo;
    featured_section_demo: typeof FeaturedSectionDemo;
    card_containers: typeof CardContainers;
    people_engaged: typeof PeopleEngaged;
    footer: typeof PrimarySiteFooter;
}
export const MAIN_COMPONENT_STORAGE : HomePageProps ={
    navbar_junction: PrimaryNavigation,
    spotlight_preview: SpotlightPreview,
    infinite_cards: InfiniteMovingCards,
    features_section_demo: FeaturesSectionDemo,
    featured_section_demo: FeaturedSectionDemo,
    card_containers: CardContainers,
    people_engaged: PeopleEngaged,
    footer: PrimarySiteFooter
}

