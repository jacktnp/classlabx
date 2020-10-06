<?php $count = 0;?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ClasslabX</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="container my-5">
        <h2 class="text-center mb-4">62070xxx - Section 1 - Lab 304</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">รหัสนักศึกษา</th>
                    <th scope="col">ชื่อเล่น</th>
                    <th scope="col">เซค</th>
                    <th scope="col">ห้อง</th>
                </tr>
            </thead>
            <tbody>
            <?php
                $url = "https://classlabx.herokuapp.com/checkin/sec/1";
                $response = file_get_contents($url);
                $stdlist = json_decode($response);
                
                for($i = 0;$i < count($stdlist);$i++){
                    if($stdlist[$i]->room == '304'){
                        $count++;
                        echo '<tr>';
                        echo "<td>" . $stdlist[$i]->userid . "</td>";
                        echo "<td>" . $stdlist[$i]->nickname . "</td>";
                        echo "<td>" . $stdlist[$i]->section . "</td>";
                        echo "<td>" . $stdlist[$i]->room . "</td>";
                        echo "</tr>";
                    }
                }
            ?>
            </tbody>
        </table>
        <h6 class="text-center mt-5">เข้าเรียนทั้งหมด <?php echo $count; ?> คน</h6>
    </div>    

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>