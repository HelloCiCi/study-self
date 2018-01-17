<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('User_model');
        $this->load->model('Article_model');
    }


    public function login()
    {
        $this->load->view('login');
       
    }

    public function reg_user(){
        $name = $this->input->get('name');
        $email = $this->input->get('email');
        $pwd = $this->input->get('pwd');
        $pwd2 = $this->input->get('pwd2');
        $gender = $this->input->get('gender');
        $province = $this->input->get('province');
        $city = $this->input->get('city');

        if($pwd != $pwd2){
            echo 'pwd-error';
            die();
        }

        $rows = $this->User_model->add(array(
            'username'=>$name,
            'email'=>$email,
            'password'=>$pwd,
            'sex'=>$gender,
            'province'=>$province,
            'city'=>$city 
        ));
        if($rows>0){
            echo 'success';
        }else{
            echo 'fail';
        }
    }

    public function captcha(){
        $this->load->helper('captcha');   
        $rand = rand(1000,9999);
        $this->session->set_userdata(array(
            "captcha"=>$rand
        ));
        $vals = array(
			'word'      => $rand,
			'img_path'  => './captcha/',
			'img_url'   => base_url().'captcha/',
			'font_path' => './path/to/fonts/texb.ttf',
			'img_width' => '150',
			'img_height'    => 30,
			'expiration'    => 7200,
			'word_length'   => 8,
			'font_size' => 16,

			// White background and border, black text and red grid
			'colors'    => array(
				'background' => array(255, 255, 255),
				'border' => array(255, 255, 255),
				'text' => array(0, 0, 0),
				'grid' => array(255, 40, 40)
			)
		);

		$cap = create_captcha($vals);
        $img = $cap['image'];
        return $img;

    }

    public function change_code(){
        $img = $this->captcha();
        echo $img;
    }

    public function reg()
    {    
       $img = $this->captcha();
       $this->load->view('reg',array('img'=>$img));  	
    }
    
    public function check_email(){
         $email = $this->input->get('email');
         $result = $this->User_model->get_user_by_email($email);
            if(count($result)>0){
                echo '1';
            }else{
                echo '0';
            }
    }

    public function check_login(){
        $email = $this->input->get('email');
        $pwd = $this->input->get('pwd');

        $result = $this->User_model->get_user_by_email($email);

        // var_dump($result[0]);
        // die();
        if(count($result) == 0){
            echo 'email_not_exist';
        }else{
            if($result[0]->password == $pwd){
                $this->session->set_userdata(array(
                    'user'=>$result[0]
                ));
            echo 'success';
            }else{
            echo 'password_error';
            }
        }
    }


    public function logout()
    {
        $this->session->unset_userdata('user');
        redirect('welcome/index');
    }

    public function auto_login()
    {
            $email = $this->input->get('email');
            $result = $this->User_model->get_user_by_email($email);
            $this->session->set_userdata(array(
                'user'=>$result[0]
            ));
            redirect('welcome/index');
    }


    public function admin_index()
    {
        $this->load->view('adminIndex');
    }

    public function new_blog()
    {
        $user = $this->session->userdata('user');
        $result = $this->Article_model->get_type_by_id($user->user_id);
        $this->load->view('newBlog',array('lists'=>$result));       
    }
}
?>
