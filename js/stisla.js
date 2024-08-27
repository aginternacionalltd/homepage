$(function() {
	let loading = {
		show: function() {
			$("body").append("<div class='main-loading'></div>");
		},
		hide: function() {
			$(".main-loading").remove();
		}
	}	

	$("#contact-form").submit(function() {
		let $this = $(this);
		$.ajax({
			url: 'server/send.php',
			type: "post",
			data: $this.serialize(),
			dataType: 'json',
			beforeSend: function() {
				loading.show();
			},
			complete: function() {
				loading.hide();
			},
			success: function(data) {
				if(data.status == true) {
					swal("Success", data.data, "success");
					$this[0].reset();
				}else{
					swal("Failed", data.data, "error");
				}
			}
		});
		return false;
	});

});