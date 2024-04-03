$.ajax({ url: "header.html", datatype: "html", success: html => $("body").prepend($(html).find(".header")) });
$.ajax({ url: "footer.html", datatype: "html", success: html => $("body").append($(html).find(".footer")) });
