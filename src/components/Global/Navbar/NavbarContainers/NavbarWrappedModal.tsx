'use client'
import React from 'react';
import ImageContainer from '@/components/Images/ImageContainer';
import NavbarLeftAside from './NavbarLeftAside';
import { Navhandler } from '@/constants';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import NavbarRightAside from './NavbarRightAside';
type Props = {};

const NavbarWrappedModal = async (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
      <NavbarLeftAside />
      <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <ul className='flex items-center gap-4 list-none'>
          {Navhandler.map((index_reduction_value)=>(
            <li key={index_reduction_value.id} className='links-fetched'><Link href={index_reduction_value.specified_path}>{index_reduction_value.route_link_name}</Link></li>
          ))}
        </ul>
      </nav>
  <NavbarRightAside/>
    </header>
  );
};

export default NavbarWrappedModal;
