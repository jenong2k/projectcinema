function search_data(keyword) {
    const xhttp = new XMLHttpRequest();
    let pf;
    xhttp.onload = function () {
        var dataKaryawan = JSON.parse(this.responseText);
        
        if (dataKaryawan.length >= 1) {
            displayKaryawan(dataKaryawan);
            // alert(dataKoki)
        }
        else {
            document.getElementById("menu-wrapper").innerHTML = "";
        }
    }
    xhttp.open("GET", "http://localhost/spbu/api/bensin/karyawan/search_karyawan.php?keyword=" + keyword);
    xhttp.send();
}


function displayKaryawan(dataKaryawan) {
    output = "";
    for (let i = 0; i < dataKaryawan.length; i++) {

        output += '<div class="col" style="padding-top: 10px; padding-bottom: 10px;">';
            output += '<div class="card" style="width:100%">';
                output += '<img class="img-fluid" style="border-radius: 5px 5px 0 0; width: 100%; height: 200px; object-fit: cover;" src="http://localhost/spbu/api/bensin/karyawan/images/' + dataKaryawan[i]["foto_k"] + '">';
                output += '<div class="card-body text-center">';
                    output += '<h5 class="card-title">';
                        output += dataKaryawan[i]["nik_k"] + '</span>';
                        output += '</br>'
                        output += dataKaryawan[i]["nama_k"] + '</span>';
                        output += '</br>'
                        output += dataKaryawan[i]["nohp_k"] + '</span>';
                    output += '</h4>';
                    output += '<div class="btn-group" role="group" aria-label="Basic example">';
                        output += '<a href="#" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditKaryawan" onclick="load_form_data(' + dataKaryawan[i]["id_k"] + ')">';
                            output += '<i class="bi bi-file-diff-fill"></i>';
                            output += 'Edit';
                        output += '</a>';
                        output += '<i type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalDeleteKaryawan" onclick="displayDelete(' + dataKaryawan[i]["id_k"] + ')">';
                            output += '<i class="bi bi-file-earmark-x"></i>';
                            output += 'Delete';
                        output += '</i>';
                    output += '</div>';
                output += '</div>';
            output += '</div>';
        output += '</div>';

    }
    document.getElementById("menu-wrapper").innerHTML = output;
}

function displayForm(dataForm) {
    document.getElementById("update-KaID").value = dataForm[0]["id_k"];
    document.getElementById("update-karyawan-nik").value = dataForm[0]["nik_k"];
    document.getElementById("update-karyawan-nama").value = dataForm[0]["nama_k"];
    document.getElementById("update-karyawan-nohp").value = dataForm[0]["nohp_k"];
    // document.getElementById("update-karyawan-foto").value = dataForm[0]["foto_k"];
}



function load_form_data(keyword_id) {
    const xhttp = new XMLHttpRequest();
    let pf;
    xhttp.onload = function () {
        var dataForm = JSON.parse(this.responseText);
        if (dataForm.length >= 1) {
            displayForm(dataForm)
        }
        else {
            alert("error");
        }
    }
    xhttp.open("GET", "http://localhost/spbu/api/bensin/karyawan/search_karyawan_by_id.php?id=" + keyword_id);
    xhttp.send();
}


function displayDelete(keyword_id) {
    const xhttp = new XMLHttpRequest();
    let df = null
    xhttp.onload = function () {
        var dataForm = JSON.parse(this.responseText);
        if (dataForm.length >= 1) {
            df = dataForm
            document.querySelector(".delete-nama_k").innerHTML = "Apakah karyawan " + df[0]["nama_k"] + " ingin dihapus?";
            document.getElementById("delete-KaID").value = df[0]["id_k"];
        }
        else {
            alert("error");
        }
    }
    xhttp.open("GET", "http://localhost/spbu/api/bensin/karyawan/search_karyawan_by_id.php?id=" + keyword_id);
    xhttp.send();    
}



function clear_form() {
    document.getElementById("MID").value = null
    document.getElementById("pilih-koki").value = null
    document.getElementById("menu-nama").value = null
    document.getElementById("harga-menu").value = null;

    document.getElementById("mstatus_1").setAttribute('checked', '');   
}
 
const searchElement = document.querySelector('#search-menu');

searchElement.addEventListener('input', () => {
    var keyword = searchElement.value;
    search_data(keyword);
});

document.addEventListener('DOMContentLoaded', function() {
   search_data("");
}, false);