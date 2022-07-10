function load_data_karyawan() {
    const xhttp = new XMLHttpRequest();
    let pf;
    xhttp.onload = function () {
        var dataKaryawan = JSON.parse(this.responseText);
        if (dataKaryawan.length >= 1) {
            displayKaryawan(dataKaryawan);
        }
        else {
            
        }
    }
    xhttp.open("GET", "http://localhost/spbu/api/bensin/karyawan/view_karyawan.php");
    xhttp.send();
}

load_data_karyawan();

function submit_data_karyawan_image() {

    var form = document.forms.namedItem("form-tambah");
    form.addEventListener('submit', function(ev) {

        var oOutput = document.querySelector("#menu-wrapper");
        oData = new FormData(form);

        var oReq = new XMLHttpRequest();
        oReq.open("POST", "http://localhost/spbu/api/bensin/karyawan/add_karyawan.php", true);
        oReq.onload = function(oEvent) {
            if (oReq.status == 200) {
                search_data("");
            }
            else {
                oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
            }
        };
        
        oReq.send(oData);
        ev.preventDefault();

        var myModalEl = document.getElementById('modalTambahKaryawan');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

    }, false);
}

submit_data_karyawan_image();

function update_karyawan() {
    
    var form = document.forms.namedItem("form-update");
    form.addEventListener('submit', function(ev) {
        var oOutput = document.querySelector("#menu-wrapper"),
        oData = new FormData(form);

        var oReq = new XMLHttpRequest();
        oReq.open("POST", "http://localhost/spbu/api/bensin/karyawan/update_karyawan.php", true);
        oReq.onload = function(oEvent) {
            if (oReq.status == 200) {
                search_data("");

                var myModalEl = document.getElementById('modalEditKaryawan');
                var modal = bootstrap.Modal.getInstance(myModalEl);
                modal.hide();
            }
            else {
                oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
            }
        };
        
        oReq.send(oData);
        ev.preventDefault();        
    }, false);
}

update_karyawan();

function remove_karyawan() {
    var http = new XMLHttpRequest();

    var id = document.getElementById("delete-KaID").value;

    var url = "http://localhost/spbu/api/bensin/karyawan/delete_karyawan.php";
    var params = "id_k=" + id;
    http.open('POST', url, true);


    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            search_data("");

            var myModalEl = document.getElementById('modalDeleteKaryawan');
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
        }
    }
    http.send(params);
}


