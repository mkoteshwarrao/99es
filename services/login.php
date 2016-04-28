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
    	$query = "SELECT * FROM users WHERE name = '".$params['user']."' AND password ='".$params['pass']."'";
        
       $this->result = parent::execute($query,'json');
      
      if($this->result){   

      		echo  $this->result;
      }
      else
      {  
             echo false;   
      } 

    }
}

?>