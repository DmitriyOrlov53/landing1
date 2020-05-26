import Nav from '../nav';

const NavItem = Nav.Item;
NavItem.setEvent('click', Nav.closeNav.bind(Nav));
const NavClose = Nav.Button;
NavClose.setEvent('click', Nav.closeNav.bind(Nav));

