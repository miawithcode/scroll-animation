const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes(); //调用了`checkBoxes()`函数一次，以便在页面加载时即刻执行。

function checkBoxes(){ //实现box元素的显示或隐藏
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    })
}