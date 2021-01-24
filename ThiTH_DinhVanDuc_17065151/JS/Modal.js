// JavaScript source code
$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    //kiểm tra mã tour: *, theo mẫu
    function KiemtraMa() {
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        if ($("#txtMa").val() == "") {
            $("#tbMa").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtMa").val())) {
            $("#tbMa").html("* Mã tour theo mẫu: XXX-XXX-00-0000");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KiemtraMa);
    //kiểm tra điểm đến: *
    function KiemtraDD() {
        if ($("#txtDiemDen").val() == "") {
            $("#tbDiemDen").html("* bắt buộc nhập");
            return false;
        }
        $("#tbDiemDen").html("*");
        return true;
    }
    $("#txtDiemDen").blur(KiemtraDD);
    //kiểm tra ngày khởi hành, phải sau ngày hiện tại
    function KiemtraNgayKH() {
        if ($("#txtNgay").val() == "") {
            $("#tbNgay").html("* bắt buộc nhập");
            return false;
        }
        var day = new Date($("#txtNgay").val());
        var today = new Date();
        today.setDate(today.getDate() + 30);
        if (day < today) {
            $("#tbNgay").html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(KiemtraNgayKH);
   
    //kiểm tra chung
    $("#btnSave").click(function () {
        if (!KiemtraMa()||!KiemtraDD()||!KiemtraNgayKH()) {
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin")
            return false;
        }
        var matour = $("#txtMa").val();
        var diemden = $("#txtDiemDen").val();
        var ngaykh = $("#txtNgay").val();
        var tg = $("#txtTG").val();
        

        var them = "<tr><td>" + (i++) + "</td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh + "</td><td>" + tg + "</td></tr>"
        $("table tbody").append(them);

        $("#myModal").modal("hide");
        return true;
    })

});