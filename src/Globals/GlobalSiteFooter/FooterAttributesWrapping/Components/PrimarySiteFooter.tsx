import React from 'react';

import Box from '@mui/material/Box';
import { translating_footer_text } from '../Constant'
import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { footer_styling_attached } from '../Constant/layouts_controlling';
import SaaSyAutomaiton from '@/Globals/GlobalSiteNavigation/NavigationWrapping/SaaSyAutoSeperated/SaaSyAutomaiton';
const PrimarySiteFooter = () => {
    return (
        <Box component="footer" className=" w-full bg-gray-50 dark:bg-black">
            <Grid container className={footer_styling_attached.resposnive_properties_padding}>
                <Grid item lg={12} container className={footer_styling_attached.grid_containers}>
                    <Grid item lg={5} className="w-full lg:w-1/3 ">
                        <Box className="w-full">
                           <SaaSyAutomaiton/>
                            <Typography className={footer_styling_attached.footer_headlines_bolded}>
                                {translating_footer_text.footer_headlines}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid className="w-full sm:flex mt-10">
                        {translating_footer_text.footer_fetched_headings_attached_links.map((data_fetched: { fetched_headings_attached: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; links_estaiblished: any[]; }, index: React.Key | null | undefined) => (
                            <Grid item xs={12} sm={12} md={4} key={index} className="w-full p-2">
                                <Typography variant="body1" className={footer_styling_attached.data_headlines}>
                                    {data_fetched.fetched_headings_attached}
                                </Typography>
                                <List className="mt-6 space-y-4 text-sm">
                                    {data_fetched.links_estaiblished.map((links_data_fetched, index_links) => (
                                        <ListItem key={index_links} className="p-0">
                                            <Link href={links_data_fetched.path_specified} className={footer_styling_attached.links_attached_beautified}>
                                                {links_data_fetched.text_fields}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            <div className='w-full justify-center items-center '>
                    <h1 className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">SAASY</h1>
            </div>
            </Grid>
            <Divider className={footer_styling_attached.divider_remastered} />
            <Box className={footer_styling_attached.box_stylings_defined}>
                <Box className={footer_styling_attached.inner_box}>
                    <Typography variant='body1' className={footer_styling_attached.copyright_text}>
                        &copy; {translating_footer_text.footer_copyright_issue_marked}
                    </Typography>
                </Box>
                <Box className="flex justify-center items-center gap-4">
                    {translating_footer_text.social_media_connections.map((links_data_fetched, indexed_value: React.Key | null | undefined) => (
                        <Link
                            key={indexed_value}
                            href={links_data_fetched.path_specified}
                            rel={links_data_fetched.rel}
                            target={links_data_fetched.target_window}
                            className={footer_styling_attached.social_media_links_fetched}
                        >
                            <span className="sr-only">{links_data_fetched.label}</span>
                            <links_data_fetched.icons_from_react />
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default PrimarySiteFooter;
