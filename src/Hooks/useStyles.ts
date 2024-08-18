import { css } from '@emotion/react';
import { TRANSLATING_NAVIGATION_TEXT } from "@/Globals/GlobalSiteNavigation/NavigationWrapping/Constant";

const useStyles = (theme: string) => ({
  toggling_themes_color: css`
    color: ${theme === TRANSLATING_NAVIGATION_TEXT.drop_down_dark_connecting_content ? '#10B981' : '#FFF'};
  `,
});

export default useStyles;
