<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wptheme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<title><?php bloginfo('name'); ?></title>
	<meta property="og:type" content="website">
	<meta property="og:url" content="http://www.caffenero.com">
	<meta property="og:title" content="<?php bloginfo('name'); ?>">
	<meta property="og:image" content="logo-share.jpg">
	<link rel="canonical" href="http://www.caffenero.com">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<header>
		header content here
	</header>