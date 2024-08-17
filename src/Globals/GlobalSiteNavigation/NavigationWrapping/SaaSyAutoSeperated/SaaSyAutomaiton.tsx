'use client'
import React from 'react';
import ImageContainer from '@/components/Images/ImageContainer';
import Images from '../../../../../public/Images';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { translating_navigattion_text } from '../Constant';
import { navigator_styling_attached } from '../Constant/layout_controlling';
type Props = {};

const SaaSyAutomaiton = (props: Props) => {
    const [fillColor, setFillColor] = useState('black');
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setFillColor(theme === 'light' ? '' : 'white');
  }, []);
    return (
        <Box component={"nav"}>
            <Box component={"aside"} className={navigator_styling_attached.headed_text_logo}>
                <Typography variant="body1" className={navigator_styling_attached.headed_text}>{translating_navigattion_text.logo_text_half_divided}</Typography>
                {fillColor ?  <ImageContainer 
                    src="/fuzzieLogo.png"
                    width={15} 
                    height={15} 
                    alt="SaaSy Logo"
                    className="shadow-sm" 
                /> :  <ImageContainer 
                src="/image.png"
                width={15} 
                height={15} 
                alt="SaaSy Logo"
                className="shadow-sm" 
            />}
               
                <Typography variant='body1' className={navigator_styling_attached.tailed_text}>{translating_navigattion_text.logo_text_tail}</Typography>
            </Box>
        </Box>
    );
};

export default SaaSyAutomaiton;
