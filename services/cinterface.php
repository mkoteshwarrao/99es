<?php
	
     require_once('login.php');
     require_once('twofieldmasters.php');
     require_once('twofieldmasters_s.php');
     
     //echo "first hit";
     $rest_json = file_get_contents("php://input");
     $_POST = json_decode($rest_json, true);

	$service = $_POST["service"];
	$method = $_POST["method"];

    $data = null;
	if(isset($_POST["payload"]))
	{
	    $ref = $_POST["payload"];
	    //echo $ref;
	   // $data = json_decode($ref, true);   
        $data = $ref;   
	}
       
	   $obj = new $service;       
              
        if($data)
        {
            $obj->$method($data);
        }  
        else
        {
            $obj->$method(null);
        }       
?>


