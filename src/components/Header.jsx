import React, { Fragment } from 'react';
import { contact } from '../data';
import '../styles/components/Header.scss';

export const Header = () => (
    <header className='header'>
        <div className='header__head'>
            <h1 className='header__heading'><span className='header__heading_bold'>JunXing</span> Xu</h1>
            <p className='header__head-text'>
                Toronto, ON, Canada
            </p>
            <p className='header__head-text bottom'>
                https://nielxu.github.io/ | Github: @NielXu | niellxu@yahoo.ca
            </p>
        </div>
    </header>
);
