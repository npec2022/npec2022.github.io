$.get("header.html", data => $("body").prepend(data));
$.get("footer.html", data => $("body").append(data));
