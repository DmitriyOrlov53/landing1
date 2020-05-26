import { ClassElem } from '../../global/Element';
import Nav from '../../nav/nav';

const OpenNav = new ClassElem('header__open-nav');
OpenNav.setEvent('click', Nav.openNav.bind(Nav));

