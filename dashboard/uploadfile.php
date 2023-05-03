<?php
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
  $filename = $_FILES['file']['name'];
  $tempFile = $_FILES['file']['tmp_name'];
  move_uploaded_file($tempFile, "uploads/files/$filename");
  echo "File uploaded successfully!";
} else {
  echo "File upload failed.";
}
?>
