window.onload=main

function main() {
    // alert('Hello, World!')

    const numElements = 50000;
    const sortedData = createSortedData(numElements);
    document.body.innerHTML = numElements + " elements: " + sortedData;
    console.log(sortedData);

    const targetElement = sortedData[Math.floor(sortedData.length * Math.random())];
    document.body.innerHTML += "<br/>";
    document.body.innerHTML += "Target element: " + targetElement;

    // test linear
    let timerStart = performance.now();
    linearIterations = searchLinear(targetElement, sortedData);
    let timerStop = performance.now();

    document.body.innerHTML += "<br/>";
    document.body.innerHTML += "Linear Search Iterations: " + linearIterations;
    document.body.innerHTML += "<br/>";
    document.body.innerHTML += "Linear Search Time: " + (timerStop - timerStart) + " ms";

    // test binarey
    timerStart = performance.now();
    binaryIterations = searchBinary(targetElement, sortedData);
    timerStop = performance.now();

    document.body.innerHTML += "<br/>";
    document.body.innerHTML += "Binary Search Iterations: " + binaryIterations;
    document.body.innerHTML += "<br/>";
    document.body.innerHTML += "Binary Search Time: " + (timerStop - timerStart) + " ms";
}

function createSortedData(numElements) {
    sortedData = [];

    prev = 0;

    for (let i = 0; i < numElements; i++) {
        delta = Math.floor(20 * Math.random());

        sortedData[i] = prev + delta;
        prev = prev + delta;
    }

    return sortedData;
}

function searchLinear(targetElement, sortedData) {
    let iterations = 0;

    for (let i = 0; i < sortedData.length; i++) {
        ++iterations;
        if (sortedData[i] === targetElement) {
            return iterations;
        }
    }

    return iterations;
}

function searchBinary(targetElement, sortedData) {
    let iterations = 0;
    if (sortedData.length === 0) {
        return iterations;
    }

    let startIndex = 0;
    let endIndex = startIndex + sortedData.length - 1;

    do {
        ++iterations;
        let midpoint = Math.floor((startIndex + endIndex) / 2);
        let candidate = sortedData[midpoint];
        if (candidate === targetElement) {
            return iterations;
        }

        if (candidate < targetElement) {
            endIndex = midpoint - 1;
        } else {
            startIndex = midpoint + 1;
        }

    } while (endIndex > startIndex);

    return iterations;
}
