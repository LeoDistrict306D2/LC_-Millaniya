/**
 * The woven band that separates sections in place of a rule.
 *
 * Rendered entirely in CSS gradients (see `.weave` in globals.css), so it costs
 * nothing to load, scales to any width, and never pixelates. Decorative, so it
 * is hidden from assistive technology.
 */
export function Weave() {
  return <div aria-hidden className="weave" />;
}
