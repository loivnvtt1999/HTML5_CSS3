// JavaScript Document
$(document).ready(function(e) {
    function KiemTraMa(){
		var re=/(?=.*\d).{6,}/;
		if(!re.test($("#txtMa").val())){
			$("#madk").text("* Vui lòng nhập đúng mã");
			$("#madk").css("color","red");
			return false;
			}
			$("#madk").text("*");
			return true;
		}
	$("#txtMa").on("blur",function(){
			KiemTraMa();
		});
	function KiemTraTen(){
		var re=/^[A-Z]_*/;
		if(!re.test($("#txtTenDK").val())){
			$("#tendk").text("Họ tên phải viết hoa và có chứa khoảng trắng");
			$("#tendk").css("color","red");
			return false;
			}
		else{
			$("#tendk").text("*");
			return true;
			}
		}
	$("#txtTenDK").on("blur",function(){
		KiemTraTen();
	});
	function KiemTraDiaChi(){
		var re=/\w?\d?/;
		if(!re.test($("#txtDiaChi").val())){
			$("#diachi").text("* Vui lòng nhập địa chỉ");
			$("#diachi").css("color","red");
			return false;
			}
			$("#diachi").text("*");
			return true;
		}
	$("#txtDiaChi").on("blur",function(){
			KiemTraDiaChi();
		});
		function KiemTraSoDienThoai(){
		var re=/^\+?\d/;
		if(!re.test($("#txtDienthoai").val())){
			$("#dienthoai").text("* Vui lòng số điện thoại");
			$("#dienthoai").css("color","red");
			return false;
			}
			$("#dienthoai").text("*");
			return true;
		}
	$("#txtDienthoai").on("blur",function(){
			KiemTraSoDienThoai();
		});
		function KiemTraEmail(){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var email = $("#txtEmailDK").val().trim();
		if(!re.test(email)){
			$("#emaildk").text("Nhập đúng định dạng email");
			$("#emaildk").css("color", "red");
			return false;
		}
		else{
			$("#emaildk").text("");
			$("#emaildk").css("color", "blue");
			return true;
		}
	}
	$("#txtEmailDK").on("blur",function(){
		KiemTraEmail();
	});
	var stt=1;
	/*function SubmitForm(){
		if(!KiemTraMa()||!KiemTraTen()||!KiemTraSoDienThoai()||!KiemTraEmail()){
				return false;
			}
			var row="<tr><td>"+stt+"</td>";
					row=row+"<td>"+$("#txtMa").val()+"</td>";
			row=row+"<td>"+$("#txtTenDK").val()+"</td>";
			row=row+"<td>"+$("#txtDiaChi").val()+"</td>";
			row=row+"<td>"+$("#txtDienthoai").val()+"</td>";
			row=row+"<td>"+$("#txtEmailDK").val()+"</td></tr>";
			$("#myTable").append(row);
			stt++;
			return true;
		}
		$("#submitdk").on("click",function(){
				SubmitForm();
			});*/
			function SubmitForm(){
			if(!KiemTraMa()||!KiemTraTen()||!KiemTraSoDienThoai()||!KiemTraEmail()||!KiemTraDiaChi()){
					
					return false;
				}
			
					var row="<tr><td>"+stt+"</td>";
					row=row+"<td>"+$("#txtMa").val()+"</td>";
					row=row+"<td>"+$("#txtTenDK").val()+"</td>";
					row=row+"<td>"+$("#txtDiaChi").val()+"</td>";
					row=row+"<td>"+$("#txtDienthoai").val()+"</td>";
					row=row+"<td>"+$("#txtEmailDK").val()+"</td></tr>";
					$("#myTable").append(row);
					stt++;
					return true;
			}
			$("#submitdk").on("click",function(){
				SubmitForm();
			});
});