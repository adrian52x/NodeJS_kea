import { writable } from "svelte/store";

export const supermarket = writable({
    apple: 5,
    cereal: 15,
    milk: 10
});