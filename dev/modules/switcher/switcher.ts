import Switch from './switcher__switch/switcher__switch';

export default class Switcher {
    switches: Switch[];
    currentSwitchNumer = 0;
    beforeSwitch: Switch|undefined;
    constructor(switcher: Element) {
        const switches = Array.from(switcher.children);
        this.switches = switches.map((field, index) => new Switch(field, this, index));
        this.switches[0].check(this.switches[0]);
    }
    nextSwitch() {
        if (this.currentSwitchNumer < this.switches.length-1)
        this.currentSwitchNumer++
        else this.currentSwitchNumer = 0;
        const currentSwitch = this.switches[this.currentSwitchNumer];
        currentSwitch.checkAction.call(currentSwitch);
    }
}