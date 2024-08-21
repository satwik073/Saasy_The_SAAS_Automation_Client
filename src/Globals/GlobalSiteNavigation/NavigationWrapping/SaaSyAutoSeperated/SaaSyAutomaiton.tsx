'use client'
import React, { useState, useEffect } from 'react';
import ImageContainer from '@/components/Images/ImageContainer';
import { Box, Typography } from '@mui/material';
import { TRANSLATING_NAVIGATION_TEXT } from '../Constant';
import { NAVIGATOR_STYLING_ATTACHED } from '../Constant/layout_controlling';
import { BOX_COMPONENTS_SEPERATED, TYPOGRAPHY_VARIANTS_SEPERATED } from '@/constants/variants_data';

type Props = {};

interface ImageContainerAttributes {
    width: number;
    height: number;
    alt: string;
    src: string;
    className?: string;
}

const SaaSyAutomation: React.FC<Props> = () => {
    const [fillTransitionColor, setTransitionFillColor] = useState<string>(TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color);

    useEffect(() => {
        if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme');
        setTransitionFillColor(theme === TRANSLATING_NAVIGATION_TEXT.drop_down_light_connecting_content ? '' : TRANSLATING_NAVIGATION_TEXT.web_page_current_dark_theme_color);
        }
    }, []);

    const imageContainerProps: ImageContainerAttributes = {
        src: fillTransitionColor ? "/fuzzieLogo.png" : "/image.png",
        width: 15,
        height: 15,
        alt: "SaaSy Logo",
        className: "shadow-sm",
    };

    return (
        <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.nav}>
            <Box component={BOX_COMPONENTS_SEPERATED.components_fetched.aside} className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.headed_text_logo}>
                <Typography variant={TYPOGRAPHY_VARIANTS_SEPERATED.body_variant.body1} className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.headed_text}>
                    {TRANSLATING_NAVIGATION_TEXT.logo_text_half_divided}
                </Typography>
                <TRANSLATING_NAVIGATION_TEXT.toggle_switching_image_containers {...imageContainerProps} />
                <Typography variant={TYPOGRAPHY_VARIANTS_SEPERATED.body_variant.body1} className={NAVIGATOR_STYLING_ATTACHED.STYLING_PREPARED.tailed_text}>
                    {TRANSLATING_NAVIGATION_TEXT.logo_text_tail}
                </Typography>
            </Box>
        </Box>
    );
};

export default SaaSyAutomation;
