  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBCj7JA2ot3ePQUQ9FWGg0JU2psGHptrK4",
    authDomain: "quanlylophoc-64de5.firebaseapp.com",
    projectId: "quanlylophoc-64de5",
    storageBucket: "quanlylophoc-64de5.appspot.com",
    messagingSenderId: "98954416186",
    appId: "1:98954416186:web:7d3f02d9ef7a83e66c6503"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();



  
let newinfoStudent = {
  mssv: "",
  name: "",
  phone: "",
  rule: "",
  email: "",
  gender: "",
  age: "",
  avarta: ""
};

 function SaveAvarta(name){
    newinfoStudent.avarta = name;
    console.log(newinfoStudent.avarta);
 };


 function uploadFile() {
     const fileInput = document.getElementById('fileInput');
     const file = fileInput.files[0];
     const formData = new FormData();
     formData.append('file', file);
 
     const xhr = new XMLHttpRequest();
     xhr.open('POST', 'upload.php');
     xhr.onload = function() {
     if (xhr.status === 200) {
         console.log('Upload successful!');
     } else {
         console.log('Upload failed!');
     }
     };
     xhr.send(formData);
 }


/////////////////////////////Create CLassroom/////////////////////////////////
const link = document.getElementById('showclassroom');
link.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = false;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("xoasv").hidden = true;
});

const link1 = document.getElementById('showdiemdanhlink');
link1.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = false;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = false;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = false;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("xoasv").hidden = true;
});

const link2 = document.getElementById('thongtincanhan');
link2.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = false;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("xoasv").hidden = true;
  Showinfo();
});

const link3 = document.getElementById('guithongbao');
link3.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = false;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("choncansu").hidden = true;
  document.getElementById("xoasv").hidden = true;
});

const link4 = document.getElementById('showchatbox');
link4.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = false;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("choncansu").hidden = true;
  document.getElementById("xoasv").hidden = true;
  Danhsachlop();
});

const link5 = document.getElementById('dellassroom');
link5.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = false;
  document.getElementById("choncansu").hidden = true;
  document.getElementById("xoasv").hidden = true;
  GetData2();
});

const link6 = document.getElementById('selectcansu');
link6.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("choncansu").hidden = false;
  document.getElementById("xoasv").hidden = true;
  danhsachlophoc("danhsachlophoc","table-cansu");
});

const link7 = document.getElementById('xoasinhvien');
link7.addEventListener('click', function(event) {
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = true;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("edit_thongtindangnhap").hidden = true;
  document.getElementById("sent_message").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("formchatbox").hidden = true;
  document.getElementById("xoalophoc").hidden = true;
  document.getElementById("choncansu").hidden = true;
  document.getElementById("xoasv").hidden = false;
  danhsachlophoc("danhsachlophoc2","table-xoasv");
});

// const link2 = document.getElementById('xemchitiet');
// link2.addEventListener('click', function(event) {
//   xemchitietdeimdanh();
// });

let cookie = {
  email: "",
  id: "",
  rule: "",
  chat: ""
};


var datacookie = document.cookie.split(";");
  
for (var i = 0; i < datacookie.length; i++) {
  var datacookiee = datacookie[i].trim();
  if (datacookiee.indexOf("rule=") == 0) {
    var rule = datacookiee.substring("rule=".length, datacookiee.length);
    cookie.rule = rule;
  }
  if (datacookiee.indexOf("email=") == 0) {
    var email = datacookiee.substring("email=".length, datacookiee.length);
    cookie.email = email;
  }
  if (datacookiee.indexOf("id=") == 0) {
    var id = datacookiee.substring("id=".length, datacookiee.length);
    cookie.id = id;
  }
}

let create_classroom;
let delete_classroom;



if (cookie.rule == 0){
    create_classroom = true;
    delete_classroom = true;
}else{
    create_classroom = false;
    delete_classroom = false;
}

if (create_classroom == false){
  var notification = document.getElementById("create_classroom");
  notification.innerHTML = "Bạn Không Có Quyền Sử Dụng Chức Năng Này";
  var notification2 = document.getElementById("xoalophoc");
  notification2.innerHTML = "Bạn Không Có Quyền Sử Dụng Chức Năng Này";
}

function Showinfo(){
  var mssv = cookie.id;
  let img = document.getElementById("showavarta");
  img.src = "/dashboard/uploads/avatar/"+mssv+".png";



  db.collection("student").doc(mssv).get().then((doc) => {
    document.getElementById("outputMssv").value = doc.data().mssv;
    document.getElementById("outputName").value = doc.data().name;
    document.getElementById("outputEmail").value = doc.data().email;
    document.getElementById("outputDay").value = doc.data().age;
    document.getElementById("outputPhone").value = doc.data().phone;
    document.getElementById("outputGender").value = doc.data().gender;
  }).catch((error) => {
    console.log("Lỗi: ", error);
  });


  // let file_name = cookie.id;
  // let file_path = 'dashboard/uploads/' + file_name;
  // let file_ext = file_name.split('.').pop();

  // let img = document.getElementById("showavarta");
  // img.src = file_name + '.' + file_ext;
  // document.body.appendChild(img);

}

function Editinfo(){
    document.getElementById("outputMssv").disabled = true;
    document.getElementById("outputName").disabled = false;
    document.getElementById("outputEmail").disabled = true;
    document.getElementById("outputDay").disabled = false;
    document.getElementById("outputPhone").disabled = false;
    document.getElementById("outputGender").disabled = true;
}


function Saveinfo(){

  const fileInput = document.getElementById('fileInput');

  const filePath = fileInput.value;
  const fileExtension = filePath.split('.').pop();
  newinfoStudent.avarta = cookie.id+"."+fileExtension;
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'upload.php');
  xhr.onload = function() {
  if (xhr.status === 200) {
      console.log('Upload successful!');
  } else {
      console.log('Upload failed!');
  }
  };
  xhr.send(formData);



  newinfoStudent.mssv = document.getElementById("outputMssv").value;
  newinfoStudent.name = document.getElementById("outputName").value;
  newinfoStudent.phone = document.getElementById("outputPhone").value;
  newinfoStudent.rule = cookie.rule;
  newinfoStudent.gender = document.getElementById("outputGender").value;
  newinfoStudent.email = document.getElementById("outputEmail").value;
  newinfoStudent.age = document.getElementById("outputDay").value;
  SaveDatabase("student",newinfoStudent.mssv,newinfoStudent);
  alert("Lưu thành công");

  document.getElementById("outputMssv").disabled = true;
  document.getElementById("outputName").disabled = true;
  document.getElementById("outputEmail").disabled = true;
  document.getElementById("outputDay").disabled = true;
  document.getElementById("outputPhone").disabled = true;
  document.getElementById("outputGender").disabled = true;

  document.getElementById("edit_thongtindangnhap").hidden = true;

  document.getElementById("edit_thongtindangnhap").hidden = false;

}




function GetID(){

        var value = cookie.id;

        // var testt = document.getElementById("outputID");
        // testt.value = "Mã số cán bộ của bạn là: "+value;

        // var test = document.getElementById("outputID2");
        // test.value = "Mã số cán bộ của bạn là: "+value;

        // var test1 = document.getElementById("outputID3");
        // test1.value = "Mã số cán bộ của bạn là: "+value;
        return value;

  }



  function GetRule(){
        var value = cookie.rule;
        return value;
  }

  function GetClassOfTeach(id){

  }

  var myButtonnew = document.getElementById("title_message");
  myButtonnew.addEventListener("click", function() {
    var dropdownnew = document.getElementById("myDropdown1");
    while (dropdownnew.options.length > 1) {
      dropdownnew.remove(1);
    }
    var idnew = cookie.id;
    db.collection("classroom").where("idteacher", "==", idnew)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var selectElementnew = document.getElementById("myDropdown1");
          var newOptionnew = document.createElement("option");
          newOptionnew.value = doc.id;
          newOptionnew.text = doc.data().tenlop;
          // Thêm option mới vào select
          selectElementnew.add(newOptionnew);
        })

      })
  })

  function danhsachlophoc(selectedID,table){
    var dropdownnew = document.getElementById(selectedID);
    while (dropdownnew.options.length > 1) {
      dropdownnew.remove(1);
    }
    var selectElement = document.getElementById(selectedID);
    db.collection("classroom").where("idteacher", "==", cookie.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var newOptionnew = document.createElement("option");
          newOptionnew.value = doc.id;
          newOptionnew.text = doc.data().tenlop;
          // Thêm option mới vào select
          selectElement.add(newOptionnew);
        })
      })
      selectElement.onchange = function() {
        // alert(selectElement.value);
        CLearTablename(table);
          // Lấy giá trị của tùy chọn được chọn
          db.collection("classroom").doc(selectElement.value)
          .get()
          .then(function(doc) {
            for (var mssv of doc.data().dssv) {
              // Lấy tham chiếu đến document có id là "abc123" trong collection "myCollection"
              var docRef = firebase.firestore().collection("student").doc(mssv);
              // Lấy dữ liệu của document và xử lý kết quả
              docRef.get().then(function(doc2) {
                const tableBody = $("#"+table+" tbody");
                var data = doc2.data();
                var vaitro = data.rule;

                if (data.rule == 1){
                    vaitro = "<p style='color: darkblue;'>Cán sự</p>";
                }else{
                    vaitro = "Sinh viên";
                }
                      const row = `
                      <tr>
                        <td>${data.mssv}</td>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.gender}</td>
                        <td>${data.phone}</td>
                        <td>${vaitro}</td>
                        <td><input type="checkbox" class="checkbox"></td>
                      </tr>
                    `;
                    tableBody.append(row);
              });
              $("#"+table).tablesorter();
          };
          });
        };
  }

  
 

  function LuuThongBao(){
    let message = {
      time: "",
      content: "",
      sent_from: "",
      sent_to: "",
      name: "",
      file: ""
    };

    const fileInput = document.getElementById('fileInput2');

    const filePath = fileInput.value.split("\\").pop();
    message.file = filePath;
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'uploadfile.php');
    xhr.onload = function() {
    if (xhr.status === 200) {
        console.log('Upload successful!');
    } else {
        console.log('Upload failed!');
    }
    };
    xhr.send(formData);

    message.time = Gettime();
    message.name = document.getElementById("title_message").value;
    message.content = document.getElementById("txt_message").value;
    message.sent_from = cookie.id;
    message.sent_to = document.getElementById("myDropdown1").value;

    SaveDatabaseRandomID("notification",message);
    alert("Lưu thông báo thành công");
  }




  var myButton = document.getElementById("inputdiemdanhname");

    // Thêm sự kiện "onclick" cho phần tử đó
    myButton.addEventListener("click", function() {
      // Lấy dropdown bằng ID
      var dropdown = document.getElementById("myDropdown");

      // Lặp qua các option và xóa chúng
      while (dropdown.options.length > 1) {
        dropdown.remove(1);
      }

      // Xử lý sự kiện ở đây
          // Lấy đối tượng select từ id của nó
    // Thực hiện truy vấn trong Firestore
    var selectElement = document.getElementById("myDropdown");
      db.collection("classroom").where("idteacher", "==", cookie.id)
      .get()
      .then((querySnapshot) => {
          // Lặp qua các tài liệu trong truy vấn
          querySnapshot.forEach((doc) => {
              // Tạo một option mới
              var newOption = document.createElement("option");
              newOption.value = doc.id;
              newOption.text = doc.data().tenlop;
              // Thêm option mới vào select
              selectElement.add(newOption);
              console.log(doc.data().dssv);
          });
          selectElement.onchange = function() {
          //  alert(selectElement.value);
          CLearTablename("lophoc");
            // Lấy giá trị của tùy chọn được chọn
            db.collection("classroom").doc(selectElement.value)
            .get()
            .then(function(doc) {
              for (var mssv of doc.data().dssv) {
                // Lấy tham chiếu đến document có id là "abc123" trong collection "myCollection"
                var docRef = firebase.firestore().collection("student").doc(mssv);
                // Lấy dữ liệu của document và xử lý kết quả
                docRef.get().then(function(doc2) {
                  const tableBody = $("#lophoc tbody");
                  var data = doc2.data();
                        const row = `
                        <tr>
                          <td>${data.mssv}</td>
                          <td>${data.name}</td>
                          <td>${data.gender}</td>
                          <td><input type="checkbox" class="checkbox"></td>
                        </tr>
                      `;
                      tableBody.append(row);
                });
                $("#lophoc").tablesorter();
            };
            });
          };
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    });




    var listsv = [];
    var listsvuncheck = [];
    function DeleteStudent(){
      GetSvSelected();
      DeleteSV(listsvuncheck);
    }

  function UpdateStudent(){
    GetSvSelected();
    UpdateRule(listsv,listsvuncheck);
  }

  function UpdateRule(list,list2){
    for (i=0;i<list.length;i++){
    var docRef = db.collection("student").doc(list[i]);
    // Cập nhật trường "name" thành "Peter"
    docRef.update({
        rule: "1"
    })}
    for (i=0;i<list2.length;i++){
      var docRef = db.collection("student").doc(list2[i]);
      // Cập nhật trường "name" thành "Peter"
      docRef.update({
          rule: "2"
      })
      }
      alert("Cập nhật thành công!");
  }

  function DeleteSV(list){
    var selectElement = document.getElementById("danhsachlophoc2").value;
    var docRef = db.collection("classroom").doc(selectElement);
    docRef.update(
      {
        dssv: list
      }
    )
    alert("Xóa thành công!");
  }

  function GetSvSelected(){
                    // Lấy tất cả các ô kiểm tra
                    var checkboxes = document.getElementsByClassName("checkbox");
    
                    // Lưu trữ các hàng được chọn
                    var selectedRows = [];
                    var unselectedRows = [];
                    // Duyệt qua tất cả các ô kiểm tra và kiểm tra xem các ô kiểm tra nào được chọn
                    for (var i = 0; i < checkboxes.length; i++) {
                      if (checkboxes[i].checked) {
                        // Lấy hàng tương ứng với ô kiểm tra được chọn
                        var selectedRow = checkboxes[i].parentNode.parentNode;
                        // Lưu trữ hàng được chọn
                        selectedRows.push(selectedRow);
                      }else{
                        var selectedRow = checkboxes[i].parentNode.parentNode;
                        unselectedRows.push(selectedRow);
                      }
                    }
                  
                    // Lấy dữ liệu từ các hàng được chọn
                    for (var j = 0; j < selectedRows.length; j++) {
                      var masv = selectedRows[j].cells[0].textContent;
                      listsv.push(masv);
                    }
                    for (var j = 0; j < unselectedRows.length; j++) {
                      var masv = unselectedRows[j].cells[0].textContent;
                      listsvuncheck.push(masv);
                    }
  }

    

  function CreateDiemdanh(){
    var name = document.getElementById("inputdiemdanhname").value;
    var diadiem = document.getElementById("inputdiadiem").value;
    var time = Gettime();
    var listsv = [];
            // Lấy tất cả các ô kiểm tra
            var checkboxes = document.getElementsByClassName("checkbox");
    
            // Lưu trữ các hàng được chọn
            var selectedRows = [];
          
            // Duyệt qua tất cả các ô kiểm tra và kiểm tra xem các ô kiểm tra nào được chọn
            for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                // Lấy hàng tương ứng với ô kiểm tra được chọn
                var selectedRow = checkboxes[i].parentNode.parentNode;
          
                // Lưu trữ hàng được chọn
                selectedRows.push(selectedRow);
              }
            }
          
            // Lấy dữ liệu từ các hàng được chọn
            for (var j = 0; j < selectedRows.length; j++) {
              var masv = selectedRows[j].cells[0].textContent;
              console.log(masv);
              listsv.push(masv);
            }

            let newdiemdanh = {
              user_create: cookie.id,
              name: name,
              time: time,
              listsv: listsv,
              diadiem: diadiem
            };
            SaveDatabaseRandomID("diemdanh",newdiemdanh);
            alert("Tạo hoạt động điểm danh thành công");
            document.getElementById("inputdiemdanhname").value = "";
            document.getElementById("inputdiadiem").value = "";
  }

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
    let newClassroom = {
      time: "",
      idteacher: "",
      tenlop: "",
      content: "",
      dssv: ["null"]
    };

    newClassroom.time = Gettime();
    newClassroom.idteacher = cookie.id;
    newClassroom.tenlop = document.getElementById("inputClassname").value;
    newClassroom.content = document.getElementById("inputClasscontent").value;
    for (var i = 0; i < data.length; i++) {
      let newStudent = {
        mssv: "",
        name: "",
        phone: "",
        rule: "2",
        email: "",
        gender: "",
        age: ""
      };
      

      for (var key in data[i]) {
        if (key == "mssv"){
          newStudent.mssv = data[i][key];
          newClassroom.dssv[i] = data[i][key];
        }else if(key == "name"){
          newStudent.name =  data[i][key];
        }else if(key == "phone"){
          newStudent.phone =  data[i][key];
        }
        else if(key == "email"){
          newStudent.email =  data[i][key];
          RegisterStudent(newStudent.email);
        }
        else if(key == "gender"){
          newStudent.gender =  data[i][key];
        }
        else if (key == "age"){
            var birthdateObj = new Date(data[i][key]);
            var day = birthdateObj.getDate();
            var month = birthdateObj.getMonth() + 1; // Tháng bắt đầu từ 0 nên cộng thêm 1
            var year = birthdateObj.getFullYear();
            // Hiển thị ngày tháng theo định dạng dd/mm/yyyy
            var formattedDate = day + "/" + month + "/" + year;
            newStudent.age = formattedDate;
        }
      }
        SaveDatabase("student",newStudent.mssv,newStudent);
    }
    SaveDatabaseRandomID("classroom",newClassroom);
    alert("Tạo lớp học thành công. Tài khoản mặc định cho sinh viên là email với mật khẩu 123456");
    document.getElementById("inputClassname").value = "";
    document.getElementById("inputClasscontent").value = "";
    document.getElementById("create_classroom").hidden = true;
    document.getElementById("dashboardclassroom").hidden = false;
    }
  
    function SaveDatabase (col,doc,data){
      const collectionRef = firebase.firestore().collection(col);
      const mssvDocRef = collectionRef.doc(doc);
      mssvDocRef.set(data);
    }
    function SaveDatabaseRandomID (col,data){
      const collectionRef = firebase.firestore().collection(col);
      collectionRef.add(data);
    }

    function Gettime(){
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; //Tháng tính từ 0 (tháng 0 là tháng 1)
      const day = now.getDate();
      const time = `${day}/${month}/${year}`;
      return time;
    }


  /////////////////////////////////////Create classroom//////////////////////////////////



      // Get data from Firestore
function GetData(){
  if (cookie.rule == 0){
    db.collection("classroom").where("idteacher","==",cookie.id).onSnapshot((querySnapshot) => {
      ClearTable();
        const tableBody = $("#my-table tbody");
        querySnapshot.forEach((doc) => {
        const book = doc.data();
        const timestamp = book.time;

          const row = `
            <tr>
              <td>${book.tenlop}</td>
              <td>${book.idteacher}</td>
              <td>${book.content}</td>
              <td>${book.dssv.length} Sinh viên</td>
              <td>${timestamp}</td>
            </tr>
          `;
          tableBody.append(row);
        });
        // Initialize tablesorter
        $("#my-table").tablesorter();
 //       setTimeout(GetData, 1000);
      });
  }else{
    db.collection("classroom").where("dssv", "array-contains", cookie.id).onSnapshot((querySnapshot) => {
      ClearTable();
        const tableBody = $("#my-table tbody");
        querySnapshot.forEach((doc) => {
        const book = doc.data();
        const timestamp = book.time;

          const row = `
            <tr>
              <td>${book.tenlop}</td>
              <td>${book.idteacher}</td>
              <td>${book.content}</td>
              <td>${book.dssv.length} Sinh viên</td>
              <td>${timestamp}</td>
            </tr>
          `;
          tableBody.append(row);
        });
        // Initialize tablesorter
        $("#my-table").tablesorter();
 //       setTimeout(GetData, 1000);
      });
  }

}

function GetData2(){
    db.collection("classroom").where("idteacher","==",cookie.id).onSnapshot((querySnapshot) => {
      ClearTable2();
        const tableBody = $("#my-table2 tbody");
        querySnapshot.forEach((doc) => {
        const book = doc.data();
        const timestamp = book.time;
          const row = `
            <tr>
              <td>${book.tenlop}</td>
              <td>${doc.id}</td>
              <td>${book.dssv}</td>
              <td>${timestamp}</td>
              <td><input type="checkbox" class="checkbox"></td>
            </tr>
          `;
          tableBody.append(row);
        });
        // Initialize tablesorter
        $("#my-table2").tablesorter();
      });
}

function DeleteClassroom(id){
            // Lấy tất cả các ô kiểm tra
            var checkboxes = document.getElementsByClassName("checkbox");
    
            // Lưu trữ các hàng được chọn
            var selectedRows = [];
          
            // Duyệt qua tất cả các ô kiểm tra và kiểm tra xem các ô kiểm tra nào được chọn
            for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                // Lấy hàng tương ứng với ô kiểm tra được chọn
                var selectedRow = checkboxes[i].parentNode.parentNode;
          
                // Lưu trữ hàng được chọn
                selectedRows.push(selectedRow);
              }
            }
          
            // Lấy dữ liệu từ các hàng được chọn
            for (var j = 0; j < selectedRows.length; j++) {
              var id = selectedRows[j].cells[1].textContent;
              // Get a reference to the document to be deleted
              db.collection("classroom").doc(id).delete().then(function() {
                  console.log("Document successfully deleted!");
              }).catch(function(error) {
                  console.error("Error removing document: ", error);
              });
            }
            
}


let tenhoatdong = [];
let soluong = [];
// vebieudo(tenhoatdong,soluong);

function GetDataTable(){
  db.collection("diemdanh").onSnapshot((querySnapshot) => {
      var stt = 0;
      ClearTableDiemdanh();
      const tableBody = $("#diemdanh tbody");
      querySnapshot.forEach((doc) => {
      const bookk = doc.data();
      const timestamp = bookk.time; // timestamp được trả về từ Firestore
      const date = new Date(timestamp.seconds * 1000); // chuyển đổi timestamp thành đối tượng Date
      const dateString = date.toLocaleDateString(); // định dạng ngày tháng thành chuỗi
      // console.log(dateString); // hiển thị ngày tháng dưới dạng chuỗi
      tenhoatdong.push(bookk.name);
      soluong.push(bookk.listsv.length);
        stt++;
        const row = `
          <tr>
            <td>${stt}</td>
            <td>${bookk.name}</td>
            <td>${timestamp}</td>
            <td>${bookk.diadiem}</td>
            <td>${bookk.listsv.length}</td>
            <td id="${doc.id}" onclick="xemdiemdanh('${doc.id}','${bookk.name}','${timestamp}','${bookk.diadiem}')" >Click here</td>
          </tr>
        `;
        tableBody.append(row);
      });
      // Initialize tablesorter
      $("#diemdanh").tablesorter();
      myChart.update();
    });

}



  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: tenhoatdong,
      datasets: [{
          label: 'Số lượng tham gia',
          data: soluong,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      responsive: false, // thêm dòng này để tắt khả năng tương thích của biểu đồ với màn hình
      maintainAspectRatio: false // thêm dòng này để vô hiệu hóa tỷ lệ giữa chiều rộng và chiều cao
  }
});




  function xemdiemdanh(id,ten,time,diadiem){
    ClearTableChitiet();
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = false;
  document.getElementById("create_diemdanh").hidden = true;
  document.getElementById("myChart").hidden = true;
  document.getElementById("infodiemdanh").innerHTML = "Hoạt động: "+ten+" - Diễn ra vào lúc: "+time+" - Tại: "+diadiem+"            Với danh sách sinh viên tham gia bên dưới";
    db.collection("diemdanh").doc(id).get().then((doc) => {
      if (doc.exists) {
        var name = doc.data().listsv;
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          getStudentName(element)
      }
      } else {
        console.log("Tài liệu không tồn tại");
      }
    }).catch((error) => {
      console.log("Lỗi: ", error);

    });
  }



function getStudentName(mssv) {
  const tableBody = $("#diemdanhchitiet tbody");
// Lấy reference đến document của sinh viên
var studentRef = db.collection("student").doc(mssv);
// Lấy dữ liệu của document đó
studentRef.get().then(function(doc) {
    if (doc.exists) {
        // Lấy thông tin họ tên của sinh viên từ dữ liệu của document
       var student = doc.data();
        const row = `
          <tr>
            <td>${mssv}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
          </tr>
        `;
        tableBody.append(row);
    } else {
        console.log("Không tìm thấy document!");
    }
}).catch(function(error) {
    console.log("Lỗi khi lấy dữ liệu:", error);
});
$("#diemdanh").tablesorter();

}



function xemchitietdiemdanh(){
  ClearTableChitiet();
  document.getElementById("create_classroom").hidden = true;
  document.getElementById("showdiemdanh").hidden = true;
  document.getElementById("dashboardclassroom").hidden = true;
  document.getElementById("xemchitiet").hidden = false;
  document.getElementById("create_diemdanh").hidden = true;
  let id = "rRPsjv1QdEczsROKKRzT";
    db.collection("diemdanh").doc(id).get().then((doc) => {
      if (doc.exists) {
        var name = doc.data().listsv;
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          getStudentName(element)
      }
      } else {
        console.log("Tài liệu không tồn tại");
      }
    }).catch((error) => {
      console.log("Lỗi: ", error);

    });
}

function ClearTableChitiet(){
  const table = document.getElementById("diemdanhchitiet");
  const rows = table.getElementsByTagName("tr");
  
  // Lặp qua từng dòng và xóa chúng
  while (rows.length > 1) {
    table.deleteRow(1);
  }
  
}


function ClearTable(){
    const table = document.getElementById("my-table");
    const rows = table.getElementsByTagName("tr");
    
    // Lặp qua từng dòng và xóa chúng
    while (rows.length > 1) {
      table.deleteRow(1);
    }
    
}

function ClearTable2(){
  const table = document.getElementById("my-table2");
  const rows = table.getElementsByTagName("tr");
  
  // Lặp qua từng dòng và xóa chúng
  while (rows.length > 1) {
    table.deleteRow(1);
  }
  
}

function ClearTableDiemdanh(){
  const table = document.getElementById("diemdanh");
  const rows = table.getElementsByTagName("tr");
  
  // Lặp qua từng dòng và xóa chúng
  while (rows.length > 1) {
    table.deleteRow(1);
  }
  
}

  function CLearTablename(name){
    const table = document.getElementById(name);
    const rows = table.getElementsByTagName("tr");
    
    // Lặp qua từng dòng và xóa chúng
    while (rows.length > 1) {
      table.deleteRow(1);
    }
  }


function RegisterStudent(email){
  firebase.auth().createUserWithEmailAndPassword(email, "123456")
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log('Register successful!' + email);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('Register not sucessful!' + email);
    // ..
  });
}


function Register(){
    var user = document.getElementById("inputEmail");
    var pass = document.getElementById("inputPassword");
    var email = user.value;
    var password = pass.value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      alert('Register successful!');
      window.location.href = '/login/login.html';
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Register not sucessful!');
      // ..
    });

    //Save info to table users//
    var inputemail = document.getElementById("inputEmail").value;
    var inputname = document.getElementById("inputName").value;
    var inputphone = document.getElementById("inputPhone").value;
    var inputgender = document.getElementById("gender").value;
    var inputmscb = document.getElementById("inputmscb").value;

    let newStudent = {
      mssv: inputmscb,
      name: inputname,
      phone: inputphone,
      rule: "0",
      email: inputemail,
      gender: inputgender,
      age: "Null"
    };
    
    SaveDatabase("student",newStudent.mssv,newStudent);

}


function DelCookie(){
    const cookieName = "email";
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    const cookieName1 = "rule";
    document.cookie = `${cookieName1}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    const cookieName2 = "id";
    document.cookie = `${cookieName2}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    alert('Logout successful!');
}


function Checklogin(){
    var user = document.getElementById("inputEmail");
    var pass = document.getElementById("inputPassword");
    var email = user.value;
    var password = pass.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Lấy tham chiếu đến collection "users"
       const usersRef = firebase.firestore().collection("student");

      // // Tìm kiếm các document có trường "email" có giá trị là "example@gmail.com"
      usersRef.where("email", "==", email).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Truy cập trường "name" của document
          document.cookie = "email="+email+"; path=/";
          document.cookie = "rule="+doc.data().rule+"; path=/";
          document.cookie = "id="+doc.data().mssv+"; path=/";
          window.location.replace("/dashboard/index.html");
        });
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Invalid username or password.');
    });
}


function RecoveryPassword(){
    var user = document.getElementById("inputEmail");
    var email = user.value;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert('Email sent successful!');
    })
    .catch(function(error) {
        alert('Can not find email account');
    });
}

  let thonbao = {
    avarta: "",
    content: ""
  };
  getavarta(cookie.id);
  function Notification(){
    const formtb = document.getElementById("notification");
    let html = '';
    var tb = db.collection("notification");
    tb.onSnapshot((querySnapshot) => {
      Delnotification();
      querySnapshot.forEach((doc) => {
        var thongbao = doc.data();
        thonbao.content = thongbao.content;
        html += '<li class="header_notify-item" id="'+doc.id+'">'+'<img src="/dashboard/uploads/avatar/'+thonbao.avarta+'" alt="" width="30px" height="30px"><p onclick="Showthongbaonoi()">&nbsp;'+thongbao.name+'</p></li>';
      });
      formtb.innerHTML = html;
      html = "";
    })
  }

  function getavarta(id){
    var docRef = firebase.firestore().collection("student").doc(id);
    docRef.get().then(function(doc) {
    var data = doc.data();
    thonbao.avarta = data.avarta;
    })
  }

  function Delnotification(){
    const del = document.getElementById('notification');
    del.innerHTML = '';
  }

  function Showthongbaonoi(){
    const myList = document.getElementById('notification');
    const items = myList.getElementsByTagName('li');
    // Bắt sự kiện click cho từng phần tử li
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function() {
        // Lấy id của phần tử li được click
        const itemId = this.id;
        var docRef = firebase.firestore().collection("notification").doc(itemId);
        docRef.get().then(function(doc) {
      // Tạo phần tử div để chứa bảng thông báo
      var popup = document.createElement('div');

      // Thêm nội dung cho bảng thông báo
      var html = "<div>Nội dung: "+doc.data().content+"</div><div>Thông báo lúc: "+doc.data().time+"</div><div>File đính kèm: <a target='_blank' href=/dashboard/uploads/files/"+doc.data().file+">"+doc.data().file+"</a></div>";
      popup.innerHTML = html;
 
      // Thêm nút "OK" vào bảng thông báo
      var okButton = document.createElement('button');
      okButton.innerHTML = 'Đóng thông báo';
      popup.appendChild(okButton);

      // Thêm lớp CSS cho bảng thông báo
      popup.classList.add('popup');

      // Thêm bảng thông báo vào trang web
      document.body.appendChild(popup);

      // Xử lý sự kiện click cho nút "OK"
      okButton.addEventListener('click', function() {
        popup.remove(); // Xóa bảng thông báo khỏi trang web
      });
        })
      });
    }
  }

GetData();
GetDataTable();
Notification();






const chatBox = document.getElementById('chatbox');

function addMessage(message1,id) {
  const reciveMessage = document.createElement('div');
  reciveMessage.innerText = message1;
  reciveMessage.classList.add('reciveMessage');
  const max = message1.length * 11;
  reciveMessage.style.maxWidth = max +'px';
  chatBox.appendChild(reciveMessage);
  cookie.chat = id;
}

function sendMessage(mess,id){
  const sentMessage = document.createElement('div');
  sentMessage.innerText = mess;
  sentMessage.classList.add('sentMessage');
  const max1 = mess.length * 11;
  sentMessage.style.maxWidth = max1 +'px';
  chatBox.appendChild(sentMessage);
  cookie.chat = id;
}

var input = document.getElementById("inputChat");

input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // Kiểm tra xem người dùng đã nhấn phím Enter
    event.preventDefault(); // Ngăn chặn trang web chuyển đến trang khác khi nhấn Enter
    actionMessage();
  }
});


const btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", function(event){
  actionMessage();
})

  function actionMessage(){
    const inputChat = document.getElementById('inputChat').value;
    const testvalue = document.getElementById('inputChat');
    let newMessage = {
      message: "",
      sendBy: "",
      time: ""
    };
  
    newMessage.message = inputChat;
    var now = new Date();
    newMessage.time = now.getTime();
    newMessage.sendBy = cookie.email;
    SaveMessage(newMessage);
    testvalue.value = "";
  }

function SaveMessage(mess){
  let id = cookie.chat;
  let collectionRef = firebase.firestore().collection("chatRoom").doc(id).collection("chats");
  collectionRef.add(mess);
}

function ChatRoom(id){
      var firestore = firebase.firestore();
      var docRef2 = firestore.collection("chatRoom").doc(id).collection("chats");
      docRef2.orderBy("time", "asc").onSnapshot((querySnapshot) => {
        chatBox.innerHTML = "";
        querySnapshot.forEach((doc) => {
          const data = doc.data();
            if (data.sendBy == cookie.email){
              sendMessage(data.message,id);
            }else{
              addMessage(data.message,id);
            }
        });
        html = "";
      })
}



function getChatroomId(user1,user2){
            var firestore = firebase.firestore();
            firestore.collection("chatRoom").where("chatRoomId", "in", [user1+"_"+user2, user2+"_"+user1])
            .get()
            .then((querySnapshot) => {
              if (querySnapshot.size === 0) {
                
                let newChatroom = {
                  chatRoomId: "",
                  users: []
                }
                newChatroom.chatRoomId = user1+"_"+user2;
                newChatroom.users[0] = user1;
                newChatroom.users[1] = user2;

                SaveDatabase("chatRoom",newChatroom.chatRoomId,newChatroom);
                cookie.chat = newChatroom.chatRoomId;
                console.log("Đã tạo chat room với id: "+cookie.chat);
                ChatRoom(cookie.chat);
              }
                querySnapshot.forEach((doc) => {
                    var id = doc.id;
                    ChatRoom(id);
                });
  })
}

// ChatRoom("phanbaonhanctu@gmail.com_nhanb1805900@student.ctu.edu.vn");

function Danhsachlop() {
  friendList.innerHTML="";
  if(cookie.rule == 0){
    var firestore = firebase.firestore();
            firestore.collection("classroom").where("idteacher", "==", cookie.id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    const data = doc.data();
                    for(i=0;i<data.dssv.length;i++){
                      var mssv = data.dssv[i];
                      var docRef = firebase.firestore().collection("student").doc(mssv);
                      docRef.get().then(function(doc1) {
                      var data1 = doc1.data();
                      addFriend(data1.name,data1.email);
                    });
                    }
                });
            })
  }else if(cookie.rule == 2){
    var firestore = firebase.firestore();
            firestore.collection("classroom").where("dssv", "array-contains", cookie.id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id);
                    const data = doc.data();
                    firebase.firestore().collection("student").doc(data.idteacher).get().then(function(doc2) {
                      var data2 = doc2.data();
                      addFriend(data2.name,data2.email);
                    });
                    for(i=0;i<data.dssv.length;i++){
                      var mssv = data.dssv[i];
                      var docRef = firebase.firestore().collection("student").doc(mssv);
                    docRef.get().then(function(doc1) {
                      var data1 = doc1.data();
                      addFriend(data1.name,data1.email);
                    });
                    }
                });
            })
  }
}

var friendList = document.getElementById("friend-list-ul");

// Lấy tham chiếu đến danh sách bạn bè


// Thêm bạn bè vào danh sách
function addFriend(name,email) {
    var li = document.createElement("li");
    li.innerText = name;
    li.id = email;
    li.addEventListener('click', () => {
      // Gọi hàm chat ở đây
      // console.log(li.id);
      getChatroomId(cookie.email,email);
    });
    friendList.appendChild(li);
}

// Xóa bạn bè khỏi danh sách
function removeFriend() {
  var liList = friendList.getElementsByTagName("li");
  for (var i = 0; i < liList.length; i++) {
    console.log(liList.length);
      // friendList.removeChild(liList[i]);
  }
}



// Sửa tên bạn bè trong danh sách
function editFriend(oldName, newName) {
  var liList = friendList.getElementsByTagName("li");
  for (var i = 0; i < liList.length; i++) {
    if (liList[i].innerText === oldName) {
      liList[i].innerText = newName;
      break;
    }
  }
}

// Sử dụng các hàm để thêm, xóa hoặc sửa đổi bạn bè trong danh sách
// addFriend("John");
// addFriend("Jane");
// removeFriend("John");
editFriend("Test Teacher", "Test Teacher2");