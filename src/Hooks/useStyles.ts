import { css } from '@emotion/react';
import { TRANSLATING_NAVIGATION_TEXT } from "@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant";

const useStyles = (theme: string) => ({
  toggling_themes_color: css`
    color: ${theme === TRANSLATING_NAVIGATION_TEXT.drop_down_dark_connecting_content ? '#10B981' : '#FFF'};
  `,
  sidebar_global_connections : css `
     design: dark:bg-black bg-white sm:flex flex-col items-center gap-10 lg:py-5 py-4
  `
});

export default useStyles;
