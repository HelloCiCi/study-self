<?php
class User_model extends CI_Model
{
    public function add($name){
        $this->db->insert(t_user,array(
            'name'=>$name
        ));
        return $this->db->affect_rows(); 
    }





}










?>