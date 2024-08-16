import { typography_variants_seperated } from '@/constants/variants_data'
import { Typography } from '@mui/material'
import React from 'react'
import { GRID_TRANSFORM } from './Constants/layout_controlling'
import { GRID_CONSTANTS } from './Constants'

type Props = {}

const GridConstants = (props: Props) => {
    return (
        <div>
            <Typography component={typography_variants_seperated.headings_variant.h1} className={GRID_TRANSFORM.STYLINGS.edge_header_flexed}>{GRID_CONSTANTS.SECTIONS.heading_featured}</Typography> 
        </div>
    )
}

export default GridConstants