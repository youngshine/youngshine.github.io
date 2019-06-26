<?php
	//教育企业号，json文件路径
	require_once "jssdk-sig.php";

	$url = $_REQUEST['url']; // 前台传入，因ajax调用后台文件
	$corpid = "wxd2f957eaf6a3b7b1";
	//$corpsecret = "OqZ3IoFLZTGLSxtaLVQm_nDt-63bPsP5AXcNqQSinwU";
	$corpsecret = "onFq7XeNSXmQqgnXNmnMrUvpoDhXpS6R-g1_gYFyI3Dc4m-YUpViH08Kgiz3QkC-";
	
	$jssdk = new JSSDK($corpid, $corpsecret, $url);
	
	$signPackage = $jssdk->getSignPackage();
	
	echo json_encode($signPackage);
?>

