<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of dbconnector
 *
 * @author kiran
 */
class dbconnector {

    public  $link;
    public  $data;
    public  $requestparams;
    
    public function __construct() {
       // $this->connect();) {
       
    }
    
    public function connect(){
        $this->link = mysqli_connect("localhost","root","","99es");
        // Check connection
        if (!$this->link)
        {
            echo "Failed to connect to MySQL: ";
        }
        //else { echo "success connect to MySQL";}
        return  $this->link;
    }
    
     function execute1($query)
    {      
    	
    		mysql_connect("localhost", "root", "") or die (mysql_error ());			 
			mysql_select_db("99es") or die(mysql_error());			 
			$this->data = mysql_query($query); 
			mysql_close();

			return $this->data;
       
    }


    function execute($query,$resulttype)
    {      
    	
    		@mysql_connect("localhost", "root", "") or die (mysql_error ());			 
			mysql_select_db("99es") or die(mysql_error());			 
			$this->data = mysql_query($query); 
			mysql_close();

        if($this->data){
            
            if($resulttype == 'json'){               
            
  				 $rows[] = array();
    				
		   			 while ($row = mysql_fetch_assoc($this->data)) {				      
		   			 	
			       		 $rows[] = $row;
		   			}	
		   			   		
		    		$ret = json_encode($rows);       

		    		//$ret  =  str_replace("[","{",$ret);
		    		//$ret  = str_replace("]","}",$ret);

		    		$ret  = str_replace("[],","",$ret);
		    		$ret  = str_replace("[]","",$ret);
		    		
		    		$ret  = str_replace("{},","",$ret);		    		
		    		$ret  = str_replace("{}","",$ret); 
		    		$ret  = str_replace("{,","",$ret);

		    		return $ret;
            }  
            else
            {            	
                return $this->data;
            }            
        }  
        else 
        {        	 
             return false;
        }    
    }

    public function closecon() {
        
        if($this->link)
        {
             mysqli_close($this->link);
        }
    }
}
?>