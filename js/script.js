function actionWhenMouseOver(imgName) {
    var img = document.getElementById(imgName);
    img.style['transform'] = "scale(1.2)";
    img.style['transition'] = "0.3s";
}

function actionWhenMouseOut(imgName) {
    var img = document.getElementById(imgName);
    img.style['transform'] = "scale(1)";
    img.style['transition'] = "0.3s";
}
window.onload = function() {
    document.getElementsByClassName('start-round')[0].style = "    transform: translate(0px, 0px);";
    document.getElementsByClassName('arbolit')[0].style = "    transform: translate(0px, 0px);";
};
const animItems = document.querySelectorAll('.animation');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const AnimItemOffset = offseting(animItem).top;
            const AnimStart = 9999999999999999999999999;
            let AnimItemPoint = window.innerHeight - animItemHeight / AnimStart;
            if (animItemHeight > window.innerHeight) {
                AnimItemPoint = window.innerHeight - window.innerHeight / AnimStart;
            }
            if ((scrollY > AnimItemOffset - animItemHeight - window.innerHeight)) {
                animItem.classList.add('active');
            }
        }
    }

    function offseting(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
}
$(function() {
    $("#free-call-form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "call-form.php",
            dataType: "json", // Add datatype
            data: form_data
        }).done(function(data) {
            console.log(data);
            alert("Спасибо, мы с вами свяжемся!");
        }).fail(function(data) {
            console.log(data);
            alert("Произошла ошибка");
        });
    });
});