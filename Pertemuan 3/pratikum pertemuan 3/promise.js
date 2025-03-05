function download() {
    setTimeout(() => {
        console.log("Downloading....");
    }, 3000);
}


function vertify() {
    setTimeout(() => {
        console.log("Vertify file....");   
    }, 2000);
}

function notify() {
    console.log("Download Complate");
}

function main() {
    download();
    vertify();
    notify();
}

main();