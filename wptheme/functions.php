<?php
/**
 * Caffe Nero functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wptheme
 */

if ( ! function_exists( 'wptheme_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function wptheme_setup() {

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'wptheme' ),
		'footer' => esc_html__( 'Footer Menu', 'wptheme' )
	) );

}
endif; // wptheme_setup
add_action( 'after_setup_theme', 'wptheme_setup' );

/**
 * Enqueue scripts and styles.
 */
function wptheme_scripts() {
	wp_enqueue_style( 'wptheme-genericons', get_template_directory_uri() . '/genericons.css');
	wp_enqueue_style( 'wptheme-style', get_stylesheet_uri() );
	wp_enqueue_script( 'wptheme-app', get_template_directory_uri() . '/js/app.js', '20120206', true );
}

add_action( 'wp_enqueue_scripts', 'wptheme_scripts' );

