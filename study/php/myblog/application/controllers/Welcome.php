<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Article_model');
	}
	
	public function index()
	{
		$this->load->view('index');
		$user = $this->session->userdata('user');
		

		$this->load->library('pagination');
		$total = $this->Article_model->get_count_article();

		$config['base_url'] = base_url().'welcome/index';//当前控制器方法
		$config['total_rows'] = $total;//总数
		$config['per_page'] = 1;//每页显示条数

		$config['next_link'] = '>>';

		$this->pagination->initialize($config);
		$links = $this->pagination->create_links();

		$types = $this->Article_model->get_article_type();
		$result = $this->Article_model->get_article_list($this->uri->segment(3),$config['per_page']);		

		$this->load->view('index',array('list'=>$result,'types'=>$types,'links'=>$links));	
	}

	public function index_logined(){
		
		$user = $this->session->userdata('user');
		

		$this->load->library('pagination');
		$total = $this->Article_model->get_count_logined_article($user->user_id);

		$config['base_url'] = base_url().'welcome/index';//当前控制器方法
		$config['total_rows'] = $total;//总数
		$config['per_page'] = 3;//每页显示条数 

		$config['next_link'] = '>>';

		$this->pagination->initialize($config);
		$links = $this->pagination->create_links();

		$types = $this->Article_model->get_logined_article_type($user->user_id);
		$result = $this->Article_model->get_logined_article_list($this->uri->segment(3),$config['per_page'],$user->user_id);		

		$this->load->view('index_logined',array('list'=>$result,'types'=>$types,'links'=>$links,'user_id'=>$user));
	}


	public function publish_blog(){
		$title = $this->input->post('title');
		$content = $this->input->post('content');
		$catalog = $this->input->post('catalog');
		$user = $this->session->userdata('user');

		$rows = $this->Article_model->publish_blog(array(
            'title'=>$title,
            'content'=>$content,
            'user_id'=>$user->user_id,
            'post_date'=>date('Y-m-d h:m:s'),
            'type_id'=>$catalog
        ));
		if($rows>0){
			redirect('welcome/index_logined');
		}
	}

	
}
