<?php

require_once('dbconnector.php');

/**
 * Description of login
 *
 * @author kiran
 */
class login extends dbconnector {

    public $result='';

    function __construct() {
       parent::__construct();
    }

    function loginuser($params)
    {
	   
    	if(!$params)
    	{
    		echo "required username and password";
    		return;
    	}	

    	//$query = "SELECT * FROM users";
    	$query = "SELECT * FROM user WHERE user_name = '".$params['user']."' AND password ='".$params['pass']."'";
        
       $this->result = parent::execute($query,'json');
      
      if($this->result){   
 
          session_start();
          $_SESSION['sid']=session_id();

            $response = array(
             'code' => 1,
             'success' => true,
             'data' => $this->result
            );

          echo json_encode($response);
      }
      else
      {  
    
          echo "Please check Username and password";   
      } 

    }

    function logoutuser(){
      echo "Logged out scuccessfully";
      session_start();
      session_destroy();
      setcookie(PHPSESSID,session_id(),time()-1);

    }
}

?>