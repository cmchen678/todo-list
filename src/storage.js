import { myProjects } from "./model.js";
import { activeProject, activeTask } from "./index.js";

export function populateStorage() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
}