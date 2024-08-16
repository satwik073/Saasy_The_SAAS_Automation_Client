import { typography_variants_seperated } from '@/constants/variants_data'
import { Typography } from '@mui/material'
import React from 'react'
import { GRID_TRANSFORM } from './Constants/layout_controlling'
import { GRID_CONSTANTS } from './Constants'

type Props = {}

const GridConstants = (props: Props) => {
    return (
        <div className='pt-12'>
            <Typography component={typography_variants_seperated.headings_variant.h1} className={GRID_TRANSFORM.STYLINGS.edge_header_flexed}><span className={GRID_TRANSFORM.STYLINGS.edge_header_flexed_text}>{GRID_CONSTANTS.SECTIONS.heading_featured}</span></Typography>
            <Typography component={typography_variants_seperated.headings_variant.h2} className={GRID_TRANSFORM.STYLINGS.heading_below_edge}>
                <span className={GRID_TRANSFORM.STYLINGS.edge_header_flexed_text}>{GRID_CONSTANTS.SECTIONS.sub_headline_wrapped}</span>
            </Typography>
        </div>
    )
}

export default GridConstants