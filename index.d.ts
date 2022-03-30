type Scope = Element
    | Window
    | Document

// borrowed from DOM querySelectorAll
declare function $<K extends keyof HTMLElementTagNameMap>(selectors: K, scope?: Scope): HTMLElementTagNameMap[K][];
declare function $<K extends keyof SVGElementTagNameMap>(selectors: K, scope?: Scope): SVGElementTagNameMap[K][];
declare function $<E extends Element = Element>(selectors: string, scope?: Scope): E[];
declare function $<W extends Window>(selectors: W, scope?: Scope): [W];
declare function $<D extends Document>(selectors: D, scope?: Scope): [D];

export default $