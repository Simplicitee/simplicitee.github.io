main = function() {
	var number;
    $(".tab").mouseclick(function() {
    	number = $(this.id);
    	$(this).addClass("nav-highlight");
    });
    for (var i = 1; i < 5; i++) {
    	if (number != i) {
    		document.getElementById(i).removeClass("nav-highlight");
    	}
    }
};

document.ready(main());
