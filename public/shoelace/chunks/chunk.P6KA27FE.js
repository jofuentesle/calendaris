import {
  divider_styles_default
} from "./chunk.SUSCR7CI.js";
import {
  watch
} from "./chunk.CCJUT23E.js";
import {
  component_styles_default
} from "./chunk.TUVJKY7S.js";
import {
  ShoelaceElement
} from "./chunk.NLWS5DN7.js";
import {
  __decorateClass
} from "./chunk.B3BW2AY6.js";

// src/components/divider/divider.component.ts
import { property } from "lit/decorators.js";
var SlDivider = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
SlDivider.styles = [component_styles_default, divider_styles_default];
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], SlDivider.prototype, "handleVerticalChange", 1);

export {
  SlDivider
};
