function DangKi(){
 
	var x = document.getElementById("dangki1");
	var y = document.getElementById("dangnhap1");
	x.style.display="block";
	y.style.display="none";
  }
   function DangNhap(){
   var x = document.getElementById("dangki1");
	var y = document.getElementById("dangnhap1");
	x.style.display="none";
	y.style.display="block";
  }
   function KThople(){
    var pthongbao = document.getElementById("ktthongbao");
  var x = document.getElementById("name").value;

	var y =/^[A-Z]\w*(\s?\w*)*$/;
	var x1 = document.getElementById("email").value;

	var y1 =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var x2 = document.getElementById("username").value;

	var y2 =/^\w*$/;
	var x3 = document.getElementById("pass").value;

	var y3 =/^\w*$/;
	
  if(frmDangKi.name.value ==""|| frmDangKi.email.value ==""|| frmDangKi.username.value==""|| frmDangKi.pass.value=="" ){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Dữ  liệu không được để trống!!";
	return false;
  }
  
  else {
	if(y.test(x)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Họ tên không hợp lệ";
	return false;
	}
	else if(y1.test(x1)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Email không hợp lệ";
	return false;
	}
	else if(y2.test(x2)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Tên tài khoản không hợp lệ";
	return false;
	}
	else if(y3.test(x3)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Mật khẩu không hợp lệ";
	return false;
	}
	else if(y.test(x)==true || y1.test(x1)==true || y2.test(x2)==true || y3.test(x3)==true ){
  
  pthongbao.style.display="none";
  
  return true;
  }
 
	
}
}
function KTDC(){
    var pthongbao = document.getElementById("ktthongbao2");
  var x = document.getElementById("namenn").value;

	var y =/^[A-Z]\w*(\s?\w*)*$/;
	var x1 = document.getElementById("tel").value;
	var y1=/^\d{10,11}$/
	
	var x2 = document.getElementById("diachi").value;
	
	
  if(frmDangKi.namenn.value ==""|| frmDangKi.tel.value ==""|| frmDangKi.diachi.value=="" ){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Dữ  liệu không được để trống!!";
	return false;
  }
  
  else {
	if(y.test(x)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Họ tên người nhận không hợp lệ";
	return false;
	}
	else if(y1.test(x1)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="SĐT không hợp lệ";
	return false;
	}
	else if(y2.test(x2)==false){
	pthongbao.style.display="block";
	pthongbao.innerHTML="Địa chỉ người nhận không hợp lệ";
	return false;
	}
	
	else if(y.test(x)==true || y1.test(x1)==true || y2.test(x2)==true || y3.test(x3)==true ){
  
  pthongbao.style.display="none";
 alert('Đơn hàng của bạn đã được ghi nhận. Xin cảm ơn! ');
  return true;
  }
 
	
}
}
 
  function KTdulieu(){
  var x = document.getElementById("namedn").value;

	var y =/^\w*$/;
  var pthongbao = document.getElementById("ktthongbao1");
	if(frmDangnhap.namedn.value==""|| frmDangnhap.passdn.value==""){
	  
	
	pthongbao.style.display="block";
	pthongbao.innerHTML="Dữ liệu không được để trống!!";
	return false;
  }
  else if(y.test(x)){

	pthongbao.style.display="none";
	return true;
	
	}
	else{
		pthongbao.style.display="block";
	pthongbao.innerHTML="Tên đăng nhập k hợp lệ";
	return false;
	
	}
  
  
 }
 
 
 
	