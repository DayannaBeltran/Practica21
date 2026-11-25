import * as state from "./state.js";
import * as ui from "./ui.js";

const input = document.getElementById("taskInput");

const addBtn = document.querySelector("button");

const tasks = await state.fetchTasks();

ui.render(tasks);

const addTask = async () => {
    if (input.value.trim() === "") {
        return;
    }

    await state.addTask(input.value.trim());

    input.value = "";

    ui.render(state.tasks);

    console.log("Se agregó la tarea con éxito", state.tasks);
};

addBtn.addEventListener("click", async () => {
    await addTask();
});

input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        await addTask();
    }
});


        
        
   