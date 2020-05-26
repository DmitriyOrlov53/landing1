import Switcher from '../../switcher/switcher';

const container = document.getElementsByClassName('switcher').item(0)
if (container != null) {
    const switcher = new Switcher(container);
    setInterval(() => switcher.nextSwitch(), 3000)
}
