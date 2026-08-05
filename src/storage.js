import { myProjects } from "./model.js";

export function populateStorage() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
}