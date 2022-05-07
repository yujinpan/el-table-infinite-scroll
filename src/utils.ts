/**
 * sync element attrs
 */
export function syncAttrs(
  sourceElem: HTMLElement,
  targetElem: HTMLElement,
  attrsKeys: string[]
) {
  let value;
  attrsKeys.forEach((name) => {
    value = sourceElem.getAttribute(name);
    if (value !== null) {
      targetElem.setAttribute(name, value);
    } else {
      targetElem.removeAttribute(name);
    }
  });
}
