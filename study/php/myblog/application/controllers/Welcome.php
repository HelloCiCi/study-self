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
		$result = $this->Article_model->get_article_list();

		$user = $this->session->userdata('user');

		$types = $this->Article_model->get_article_type();

		$this->load->view('index',array('list'=>$result,'types'=>$types));
		
	
		
	}
}
