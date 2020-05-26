import { ClassElem } from '../global/Element';

const Nav = {
    Item: new ClassElem('nav__item'),
    HeaderNav: new ClassElem('header__nav'),
    Button: new ClassElem('nav__close-nav'),
    closeNav() {
        this.HeaderNav.removeClass('header__nav_active');
        document.body.style.overflow = 'visible';
    },
    openNav() {
        this.HeaderNav.addClass('header__nav_active');
        document.body.style.overflow = 'hidden';
    }
}

export default Nav;

import'./nav__close-nav/nav__close-nav';