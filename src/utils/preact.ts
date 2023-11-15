import type { Ref } from "preact/hooks";

export const occurredEventAtExceptRef = (ref: Ref<HTMLElement>, event: MouseEvent): boolean => {
  return ref.current !== null &&
    !ref.current.contains(event.target as Node);

}
