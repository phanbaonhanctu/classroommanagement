// Hàm lấy dữ liệu firestore có id

function Getdatabyid(colection, id){
    const col = firebase.firestore().collection(colection).doc(id);
    col.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
        });
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
}