$.get("header.html .header", data => $("body").prepend(data));
$.get("footer.html .footer", data => $("body").append(data));
