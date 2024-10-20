const images = new Array("agent1.png", "agent2.png",
    "agent3.png", "agent4.png", "agent5.png",
    "agent6.png", "agent7.png", "agent8.png",
);

const p1 = document.querySelector("#agent1");
const p2 = document.querySelector("#agent2");
const p3 = document.querySelector("#agent3");
const p4 = document.querySelector("#agent4");

let indexes = new Array(0, 1, 2, 3);

function changeIndexValue(index, newValue) {
    if (newValue >= 8) {
        newValue -= 8;
    }
    if (newValue < 0) {
        newValue += 8;
    }
    indexes[index] = newValue;
}

function moveImages() {
    p1.src = "./images/" + images[indexes[0]];
    p2.src = "./images/" + images[indexes[1]];
    p3.src = "./images/" + images[indexes[2]];
    p4.src = "./images/" + images[indexes[3]];
}

function lefttArrowClicked() {
    changeIndexValue(0, indexes[0] - 1);
    changeIndexValue(1, indexes[1] - 1);
    changeIndexValue(2, indexes[2] - 1);
    changeIndexValue(3, indexes[3] - 1);
    moveImages();
}

function rightArrowClicked() {
    changeIndexValue(0, indexes[0] + 1);
    changeIndexValue(1, indexes[1] + 1);
    changeIndexValue(2, indexes[2] + 1);
    changeIndexValue(3, indexes[3] + 1);
    moveImages();
}
