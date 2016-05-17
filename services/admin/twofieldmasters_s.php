<?php

require_once('dbconnector.php');

/**
 * Description of twofieldmasters_s
 *
 * @author kiran
 */
class twofieldmasters_s extends dbconnector {

    //put your code here
    function __construct() {
       parent::__construct();
    }
    
    function gettwofieldslist($params) {
        
       if($params['key'])
       {
            // $query = "SELECT * FROM `two_field_subcategory`";
            $query = "SELECT * FROM two_field_subcategory WHERE category_id = '".$params['key']."'";

       }else{
            $query = "SELECT * FROM two_field_subcategory";
       }
        
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