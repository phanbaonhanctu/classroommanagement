function readFile() {
    var file = document.getElementById("input").files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, { type: "binary" });
      var sheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[sheetName];
      var jsonData = XLSX.utils.sheet_to_json(worksheet, { 
        raw: false, // Trả về các giá trị không chuyển đổi sang định dạng khác
        dateNF: "dd-mm-yyyy", // Định dạng ngày tháng (nếu có) để giữ nguyên định dạng
        });
      displayData(jsonData);
    };
    reader.readAsBinaryString(file);

  }
  
  function displayData(data) {
    var table = "<table>";
    table += "<thead><tr>";
    for (var key in data[0]) {
      table += "<th>" + key + "</th>";
    }
    table += "</tr></thead>";
    table += "<tbody>";
    for (var i = 0; i < data.length; i++) {
      table += "<tr>";
      for (var key in data[i]) {
        if (key == "age"){
            var birthdateObj = new Date(data[i][key]);
            var day = birthdateObj.getDate();
            var month = birthdateObj.getMonth() + 1; // Tháng bắt đầu từ 0 nên cộng thêm 1
            var year = birthdateObj.getFullYear();
            // Hiển thị ngày tháng theo định dạng dd/mm/yyyy
            var formattedDate = day + "/" + month + "/" + year;
            table += "<td>" + formattedDate + "</td>";
        }else{
            table += "<td>" + data[i][key] + "</td>";
        }

      }
      table += "</tr>";
    }
    table += "</tbody></table>";
    document.getElementById("data-container").innerHTML = table;
  }
  

  function saveData(data) {
    for (var i = 0; i < data.length; i++) {
      const newStudent = {
        mssv: data[i][mssv],
        name: data[i][name],
        gender: data[i][gender],
        age: data[i][age],
        phone: data[i][phone],
        email: data[i][email],
      };
    db.collection("student").add(newStudent).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
    }
  }