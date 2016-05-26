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

      function getTwoCategoryList($params) {
        
       if($params['key'])
       {
            $query = "SELECT * FROM two_field_category WHERE category_id = '".$params['key']."'";
       }else{
            $query = "SELECT * FROM two_field_category";
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

    function updateSubCategory($params) {
      $obj = $params['data'];
       
       if($obj['id'])
       {
            $query = "UPDATE two_field_subcategory SET category_id='".$obj['category_id']."',description='".$obj['description']."',bundle='".$obj['bundle']."',status='".$obj['status']."' WHERE id='".$obj['id']."'";

       }else{
            //$query = ​"INSERT INTO two_field_subcategory(category_id, description, bundle, status) VALUES //('".$obj.category_id."','".$obj.description."','".$obj.bundle."','".$obj.status."')";
       }
        
        $result = parent::execute1($query);
      
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