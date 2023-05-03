<?php
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
  $filename = $_FILES['file']['name'];
  $extension = pathinfo($filename, PATHINFO_EXTENSION);
  $cookieValue = $_COOKIE['id'];
  $new_file_name_with_extension = $cookieValue. "." .$extension;
  $tempFile = $_FILES['file']['tmp_name'];
  move_uploaded_file($tempFile, "uploads/avatar/$new_file_name_with_extension");
  echo "File uploaded successfully!";
} else {
  echo "File upload failed.";
}
?>
