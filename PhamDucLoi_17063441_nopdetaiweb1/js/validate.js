// JavaScript Document// JavaScript Document
$(document).ready(function(e) {
	function KiemTraTen(){
		var re=/^[A-Z]_*/;
		if(!re.test($("#txtTen").val())){
			$("#hoten").text("Họ tên phải viết hoa và có chứa khoảng trắng");
			$("#hoten").css("color","red");
			return false;
			}
		else{
			$("#hoten").text("*");
			return true;
			}
		}
	$("#txtTen").on("blur",function(){
		KiemTraTen();
	});
	function KiemTraPassWord(){
		var txtMK=$("#txtMK1").val();
		var re = /(?=.*\d).{6,}/;
		if(!re.test($("#txtMK1").val())){
			$("#mk").text(" * phải có chữ, số, ít nhất 6 kí tự");
			$("#mk").css("color","red");
			return false;
		}
		else{
			$("#mk").text( "*");
			return true;
		}
	}
	$("#txtMK1").on("blur",function(){
		KiemTraPassWord();
	});
	function KiemTraXacNhanPassWord(){
		if($("#txtNLMK").val()!=$("#txtMK1").val()){
			$("#nlmk").text(" *phải giống ô mật khẩu");
			$("#nlmk").css("color","red");
			return false;
		}
		else{
			$("#nlmk").text("*");
			return true;
		}
	}
	$("#txtNLMK").on("blur",function(){
		KiemTraXacNhanPassWord();
	});
	function KiemTraNgaySinh(){
		var ns = new Date($("#txtNgay").val());
		var today=new Date();
		if(eval(today.getFullYear()-ns.getFullYear())<=10){
			$("#ngaysinh").text(" tuổi phải lớn hơn 10");
			$("#ngaysinh").css("color","red");
			return false;
		}
		else{
			$("#ngaysinh").text("");
			return true;
		}
	}
	$("#txtNgay").on("blur",function(){
		KiemTraNgaySinh();
	});
	function KiemTraEmail(){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var email = $("#txtEmail").val().trim();
		if(!re.test(email)){
			$("#email").text("Nhập đúng định dạng email");
			$("#email").css("color", "red");
			return false;
		}
		else{
			$("#email").text("");
			$("#email").css("color", "blue");
			return true;
		}
	}
	$("#txtEmail").on("blur",function(){
		KiemTraEmail();
	});
	
	function SubmitForm(){
		if(!KiemTraTen()||!KiemTraPassWord()||!KiemTraXacNhanPassWord()||!KiemTraEmail()){
			alert("Bạn chưa nhập đầy đủ và đúng thông tin!");
			return false;
		}
		return true;
	}
	$("#smdk").on("click",function(){
			SubmitForm();
		});
});


