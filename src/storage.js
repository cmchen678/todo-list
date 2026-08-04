import { myProjects } from "./model";

function populateStorage() {
    localStorage.setItem("myProjects", JSON.stringify(myProjects));
}