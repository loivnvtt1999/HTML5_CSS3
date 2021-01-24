// JavaScript Document
function KiemTraTenDN(){
		var re=/^[a-z]\w*/;
		if(re.test(document.getElementById('txtDN').value.trim())==false){
			tendn.innerText="* bắt buộc, bắt đầu bằng ký tự";
			return false;
		}
		else{
				
			tendn.innerText="*";
			return true;	
				}
				
	}
function KiemTraPassWord(){
		var re=/(?=.*\d).{6,}/;
		if(re.test(document.getElementById('txtDN').value.trim())==false){
			mk.innerText="* phải có chữ số và ít nhất 6 ký tự";
			return false;
		}
		else{
			mk.innerText="*";
			return true;
			}
	}
function KiemTraXacNhanPassWord(){
	if(document.getElementById('txtXNMK').value!=document.getElementById('txtMK').value){
		xnmk.innerText="*phải giống mật khẩu";
		return false;
		
		}
	else{
		xnmk.innerText="*";
		return true;
		}
	}
function KiemTraNgaySinh(){
	var ns= new Date(document.getElementById('txtNS').value);
	var today= new Date();
	if(eval (today.getFullYear()-ns.getFullYear())<=10){
		ngaysinh.innerText="* Tuổi phải lớn hơn 10";
		return false;
		}
	else{
		ngaysinh.innerText="*";
		return true;
		}
	}
function SubmitForm(){
		if(KiemTraTenDN()==false||KiemTraPassWord()==false||KiemTraXacNhanPassWord()==false){
			alert("Bạn nhập chưa đầy đủ thông tin!!");
			return false;
			}
			return true;
	}