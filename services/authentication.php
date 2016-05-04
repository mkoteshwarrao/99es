<?php

require_once('dbconnector.php');

/**
 * Description of login
 *
 * @author kiran
 */
class authentication extends dbconnector {

    public $result='';

    function __construct() {
       parent::__construct();
    }

    function checkuser($params)
    {
	   
      session_start();
      if($_SESSION['sid']==session_id())
      {
         
          if(!$params)
          {
            session_destroy();
            return false;
          } 

          return true;
          $query = "SELECT * FROM user WHERE user_name = '".$params['user']."' AND password ='".$params['pass']."'";
            
           $this->result = parent::execute($query,'json');
          
          if($this->result){   

              return true;
          }
          else
          {  
             session_destroy();
             return false;  
          } 
         
      }
      else
      {
          session_destroy();
          echo "error:1000,message:authentication failed,success:false"; 
          return false;
      }
    }
}

?>