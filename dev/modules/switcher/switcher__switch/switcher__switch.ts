import type Swither from '../switcher';

export default class Switch {
    checked = false;
    field: Element;
    parent: Swither;
    index: number;
    checkedName = 'switcher__switch_checked';
    constructor(field: Element, parent: Swither, index: number) {
        this.field = field;
        this.field.addEventListener('click', this.checkAction.bind(this));
        this.parent = parent;
        this.index = index;
    }
    checkAction() {
        if (!this.checked) {
            if (this.parent.beforeSwitch) { 
                this.uncheck(this.parent.beforeSwitch);
            }
            this.check(this);
            this.parent.currentSwitchNumer = this.index;
        } else this.uncheck(this);
    }
    check(node: Switch) {
        node.field.classList.add(this.checkedName);
        this.parent.beforeSwitch = node;
        node.checked = true;
    }
    uncheck(node: Switch) {
        node.field.classList.remove(this.checkedName);
        node.checked = false;
    }
}