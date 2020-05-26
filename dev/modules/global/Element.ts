export class ClassElem {
    elements: Element[];
    constructor(className: string) {
        this.elements = Array.from(
            document.getElementsByClassName(className)
        );
    }
    get(id: number) {
        return this.elements[id];
    }
    setEvent(name: string, callback: EventListener) {
        this.elements.forEach(elem => {
            elem.addEventListener(name, callback)
        });
    }
    deleteEvent(name: string, callback: EventListener) {
        this.elements.forEach(elem => {
            elem.removeEventListener(name, callback);
        });
    }
    toggleClass(name: string) {
        this.elements.forEach(elem => {
            elem.classList.toggle(name);
        })
    }
    addClass(name: string) {
        this.elements.forEach(elem => {
            elem.classList.add(name);
        })
    }
    removeClass(name: string) {
        this.elements.forEach(elem => {
            elem.classList.remove(name);
        })
    }
}