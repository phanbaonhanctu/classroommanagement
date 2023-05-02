<!--- BEGIN CODE HANDLE UPLOAD FILE --->
<?php 
    if(isset($_POST["btnSubmit"])) {
        $target_dir = './uploads/avarta/'; //Set target directory to save file
        $file_name = "";
        if(isset($_FILES["txtFile"])) {
            $file_name = $_FILES["txtFile"]["name"]; //Set file name to variable $file_name
            $extension = pathinfo($file_name, PATHINFO_EXTENSION);
            if($_FILES["txtFile"]["error"] > 0) { //Check error
                echo 'Sorry, there was an error uploading your file';
            } else {
                //Here code upload file to server

                // $basename = basename($file_name, "." . $extension);
                $cookieValue = $_COOKIE['id'];
                $new_file_name_with_extension = $cookieValue. "." .$extension;
                move_uploaded_file($_FILES["txtFile"]["tmp_name"], $target_dir . $new_file_name_with_extension);
                // echo "File " . basename($file_name) . " has been uploaded!";
            }
        }
    }
?>
<!--- END CODE HANDLE UPLOAD FILE --->

<script src="/js/firebase.js"></script>

<?php
    // Gọi hàm JavaScript
    // echo "<script>
    //         SaveAvarta('".$new_file_name_with_extension."');
    //       </script>";
    
?>