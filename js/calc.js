$(document).on('input', '#wall-height', function() {
    var width = $("#wall-width").val();
    var height = $("#wall-height").val();
    var depth = $("input[name='options']:checked").val();
    if (width > 0 && height > 0 && depth > 0) {
        let wall_square = width * height;
        if (depth == 0.2 || depth == 0.3) {
            $("#count").text(Math.ceil(wall_square / 0.4 / 0.5));
        } else if (depth == 0.4) {
            $("#count").text(Math.ceil(wall_square / 0.3 / 0.5));
        }
    }
})

$(document).on('input', '#wall-width', function() {
    var width = $("#wall-width").val();
    var height = $("#wall-height").val();
    var depth = $("input[name='options']:checked").val();
    if (width > 0 && height > 0 && depth > 0) {
        let wall_square = width * height;
        if (depth == 0.2 || depth == 0.3) {
            $("#count").text(Math.ceil(wall_square / 0.4 / 0.5));
        } else if (depth == 0.4) {
            $("#count").text(Math.ceil(wall_square / 0.3 / 0.5));
        }
    }
})

$('input[name=options]').change(function() {
    var width = $("#wall-width").val();
    var height = $("#wall-height").val();
    var depth = $("input[name='options']:checked").val();
    if (width > 0 && height > 0 && depth > 0) {
        let wall_square = width * height;
        if (depth == 0.2 || depth == 0.3) {
            $("#count").text(Math.ceil(wall_square / 0.4 / 0.5));
        } else if (depth == 0.4) {
            $("#count").text(Math.ceil(wall_square / 0.3 / 0.5));
        }
    }
});