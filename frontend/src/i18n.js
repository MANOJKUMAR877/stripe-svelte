import { derived, writable } from "svelte/store";

export const dict = writable();
export const locale = writable("en");
const localizedDict = derived([dict, locale], ([$dict, $locale]) => {
  if (!$dict || !$locale) return;
  return $dict[$locale];
});
const getMessageFromLocalDict = (id, localizedDict) => {
  const splitId = id.split(".");
  let message = { ...localizedDict };
  splitId.forEach((partialId) => {
    message = message[partialId];
  });
  return (message)
};
const createMessageFormatter = (localizedDict) => (id) =>
  getMessageFromLocalDict(id, localizedDict);
export const t = derived(localizedDict, ($localizedDict) => {
  return createMessageFormatter($localizedDict);
});
