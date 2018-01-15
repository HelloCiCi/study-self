<?php
class User_model extends CI_Model
{
    

    public function add($user){
        $this->db->insert('t_user',$user);
        return $this->db->affected_rows(); 
    }

    public function get_user_by_email($email){
        $finder = $this->db->get_where('t_user',array(
            'email'=>$email,
        ));
        return $finder->result();
    }

}










?>