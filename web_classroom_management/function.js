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


  var studentRef = db.collection("student").doc(mssv);
// Lấy dữ liệu của document đó
studentRef.get().then(function(doc) {
    if (doc.exists) {
        // Lấy thông tin họ tên của sinh viên từ dữ liệu của document
       var studentName = doc.data().name;
        console.log(studentName);
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