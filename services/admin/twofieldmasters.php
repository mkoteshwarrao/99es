<?php

require_once('dbconnector.php');

/**
 * Description of twofieldmasters
 *
 * @author kiran
 */
class twofieldmasters extends dbconnector {

    //put your code here
    function __construct() {
       parent::__construct();
    }
    
    function gettwofieldscategories($params) {
       
        $query = "SELECT * FROM twofieldtypes";
        $result = parent::execute($query,'json');
      
        if($result){
            echo $result;
        }
        else
        {
            echo false;
        }       
    }
}

?>