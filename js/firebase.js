//         <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
//         <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
//         <script src="./firebase.js"></script>


  //import firebase from 'firebase/app';
  //import 'firebase/firestore';

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

// db.collection("student").doc("B1805900").get().then((doc) => {
//   if (doc.exists) {
//     // Cập nhật dữ liệu vào HTML
//       const data = doc.data();
//       const name = data.name; // truy cập đến trường "name"
//       const phone = data.phone; // truy cập đến trường "phone"
//       console.log(`Name: ${name}, Phone: ${phone}`);
//     document.getElementById("myField").textContent = (`Name: ${name}, Phone: ${phone}`);
//   } else {
//     console.log("Không tìm thấy tài liệu!");
//   }
// });

        // var usersTable = document.getElementById('usersTable');
        // var tbody = usersTable.getElementsByTagName('tbody')[0];

        // for (var key in users) {
        //     if (users.hasOwnProperty(key)) {
        //         var user = users[key];
        //         var row = tbody.insertRow();
        //         var nameCell = row.insertCell(0);
        //         var emailCell = row.insertCell(1);
        //         var phoneCell = row.insertCell(2);
        //         nameCell.innerHTML = user.name;
        //         emailCell.innerHTML = user.email;
        //         phoneCell.innerHTML = user.phone;
        //     }
        // }

      // Get data from Firestore
function GetData(){
    db.collection("classroom").onSnapshot((querySnapshot) => {
        ClearTable();
        const tableBody = $("#my-table tbody");
        querySnapshot.forEach((doc) => {
        const book = doc.data();
        const timestamp = book.date_create; // timestamp được trả về từ Firestore
        const date = new Date(timestamp.seconds * 1000); // chuyển đổi timestamp thành đối tượng Date
        const dateString = date.toLocaleDateString(); // định dạng ngày tháng thành chuỗi
        // console.log(dateString); // hiển thị ngày tháng dưới dạng chuỗi

          const row = `
            <tr>
              <td>${book.name}</td>
              <td>${book.id_teacher}</td>
              <td>${book.id_student}</td>
              <td>${dateString}</td>
            </tr>
          `;
          tableBody.append(row);
        });
        // Initialize tablesorter
        $("#my-table").tablesorter();
 //       setTimeout(GetData, 1000);
      });
}

function GetDataTable(){
  // db.collection("diemdanh").get().then((querySnapshot) => {
  //   // Duyệt qua từng tài liệu và xuất ID của nó
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id);
  //   });
  // });
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
        stt++;
        const row = `
          <tr>
            <td>${stt}</td>
            <td>${bookk.name}</td>
            <td>${dateString}</td>
            <td>${bookk.listsv.length}</td>
            <td><a href="http://127.0.0.1:5501/charts.html?id=${doc.id}" target="_blank">test</a></td>
          </tr>
        `;
        tableBody.append(row);
      });
      // Initialize tablesorter
      $("#diemdanh").tablesorter();
    });
}

// Hàm lấy họ tên của sinh viên từ Firestore
function getStudentName(mssv) {
// Lấy reference đến document của sinh viên
var studentRef = db.collection("student").doc(mssv);

// Lấy dữ liệu của document đó
studentRef.get().then(function(doc) {
  const tableBody = $("#diemdanhchitiet tbody");
    if (doc.exists) {
        // Lấy thông tin họ tên của sinh viên từ dữ liệu của document
        var studentName = doc.data().name;
        const row = `
          <tr>
            <td>${mssv}</td>
            <td>${studentName}</td>
          </tr>
        `;
        tableBody.append(row);
    } else {
        console.log("Không tìm thấy document!");
    }
}).catch(function(error) {
    console.log("Lỗi khi lấy dữ liệu:", error);

});
}



function diemdanhchitiet(){
  // db.collection("diemdanh").get().then((querySnapshot) => {
  //   // Duyệt qua từng tài liệu và xuất ID của nó
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id);
  //   });
  // });
  const queryString = window.location.search; // lấy chuỗi truy vấn từ URL
  const urlParams = new URLSearchParams(queryString); // tạo đối tượng URLSearchParams để truy cập các tham số truy vấn
  const id = urlParams.get('id'); // lấy giá trị của biến "name"
  console.log("Lỗi: ", id);

    db.collection("diemdanh").doc(id).get().then((doc) => {
      if (doc.exists) {
        var name = doc.data().listsv;
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          getStudentName(element);
      }
      } else {
        console.log("Tài liệu không tồn tại");
      }
    }).catch((error) => {
      console.log("Lỗi: ", error);
      $("#diemdanhchitiet").tablesorter();
    });
}








function ClearTable(){
    const table = document.getElementById("my-table");
    const rows = table.getElementsByTagName("tr");
    
    // Lặp qua từng dòng và xóa chúng
    while (rows.length > 1) {
      table.deleteRow(0);
    }
    
}

function ClearTableDiemdanh(){
  const table = document.getElementById("diemdanh");
  const rows = table.getElementsByTagName("tr");
  
  // Lặp qua từng dòng và xóa chúng
  while (rows.length > 1) {
    table.deleteRow(0);
  }
  
}



function Register(){
    var user = document.getElementById("inputEmail");
    var pass = document.getElementById("inputPassword");
    var email = user.value;
    var password = pass.value;
    // if (username === 'admin' && password === 'admin') {
    //   alert('Login successful!');
    //   window.location.href = 'https://www.google.com';
    // } else {
    //   alert('Invalid username or password.');
    // }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      alert('Register successful!');
      window.location.href = 'http://127.0.0.1:5501/login.html';
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

    
    const usersReff = firebase.firestore().collection('info');

    // Thêm một document mới với ID tự tạo
    usersReff.add({
      id: inputmscb,
      name: inputname,
      email: inputemail,
      phone: inputphone,
      gender: inputgender,
      rule: "0"
    })

}


function DelCookie(){
    const cookieName = "email";
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    const cookieName1 = "rule";
    document.cookie = `${cookieName1}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    alert('Logout successful!');
}


function Checklogin(){
    var user = document.getElementById("inputEmail");
    var pass = document.getElementById("inputPassword");
    var email = user.value;
    var password = pass.value;
    // if (username === 'admin' && password === 'admin') {
    //   alert('Login successful!');
    //   window.location.href = 'https://www.google.com';
    // } else {
    //   alert('Invalid username or password.');
    // }
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert('Login successful!');




    // Lấy tham chiếu đến collection "users"
      const usersRef = firebase.firestore().collection("info");

      // Tìm kiếm các document có trường "email" có giá trị là "example@gmail.com"
      usersRef.where("email", "==", email).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Truy cập trường "name" của document
          window.location.href = 'http://127.0.0.1:5501/index.html';
          document.cookie = "email="+email;
          document.cookie = "rule="+doc.data().rule;
        });
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
 //     window.location.href = 'http://127.0.0.1:5501/index.html';
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Invalid username or password.');
    });
}

function checkRule(email){

}




function GetCookie(){
    const cookies = document.cookie.split(";"); // Lấy danh sách các cookie
    let rule = null;

    cookies.forEach(cookie => {
    if (cookie.trim().startsWith("rule=")) { // Tìm cookie có tên là "sessionID"
        rule = cookie.trim().substring("rule=".length, cookie.trim().length); // Lấy giá trị của cookie
    }
    });

    console.log(rule); // In ra giá trị của cookie "sessionID"

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

function CheckID(){
  ///////////////////////////
              // Lấy collection "users" từ Firestore
              const usersRef = firebase.firestore().collection('teacher');

              // Sắp xếp các documents theo trường "age" theo thứ tự giảm dần
              usersRef.orderBy('id', 'desc')
          
                // Giới hạn số lượng documents trả về là 1
                .limit(1)
          
                // Lấy documents trả về
                .get()
                .then(querySnapshot => {
                  // Lấy document cuối cùng trong danh sách documents trả về
                  const doc = querySnapshot.docs[0];
                  if (doc.exists) {
                    // Lấy giá trị của trường "age" trong document cuối cùng
                    const maxid = doc.data().id;
                    const maxxid = maxid + 1;
                    return maxxid;
                    console.log('Giá trị lớn nhất của trường "id" là:', maxxid);
                  } else {
                    console.log('Không tìm thấy documents');
                  }
                })
                .catch(error => {
                  console.log('Lỗi:', error);
                });
              //////////////////////////
}


  function CheckloginOld() {
    // alert('Invalid username or password.');
    // console.log("ok");

  db.collection("student").doc("B1805901").get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      const name = data.name; // truy cập đến trường "name"
      const phone = data.phone; // truy cập đến trường "phone"
      console.log(`Name: ${name}, Phone: ${phone}`);
      document.getElementById("myField").textContent = (`Name: ${name}, Phone: ${phone}`);
 //     setTimeout(Checklogin, 1000);
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });



      db.collection("teacher").doc("ID001").set({
        name: "John Doe",
        email: "johndoe@example.com"
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });


      db.collection("teacher").doc("ID002").update({
        email: "newemail@example.com"
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });

}

GetCookie();
GetData();
GetDataTable();
diemdanhchitiet();
