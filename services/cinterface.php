<?php
	
     require_once('authentication.php');
     require_once('login.php');
     require_once('admin/twofieldmasters.php');
     require_once('admin/twofieldmasters_s.php');
     
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

//=====================================================
       // $headers = apache_request_headers();

      //  foreach ($headers as $header => $value) {
     //       echo "$header: $value <br />\n";
      //  }
//=====================================================


    $pass = false;

    if($service == "login" && $method == "loginuser")
    {
       // if login service 

        $pass = false;

        $obj = new $service;             
        if($data)
        {
            // echo implode(" ",$data);
            $obj->$method($data);
        }  
        else
        {
            $obj->$method(null);
        }  

    }else{

         //validate user
        $auth = new authentication();
        $pass = $auth->checkuser(true);
    }
    
    if($pass){
       $obj = new $service;             
        if($data)
        {
            // echo implode(" ",$data);
            $obj->$method($data);
        }  
        else
        {
            $obj->$method(null);
        }  

    }

   
	        
?>



