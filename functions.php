<?php
/**
 * Personal Brand Theme functions and definitions
 */

// Theme setup function
function personal_brand_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'personal-brand'),
    ));
}
add_action('after_setup_theme', 'personal_brand_setup');

// Enqueue scripts and styles
function personal_brand_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('personal-brand-style', get_stylesheet_uri());
    wp_enqueue_style('personal-brand-main', get_template_directory_uri() . '/assets/css/main.css');
    
    // Enqueue custom scripts
    wp_enqueue_script('personal-brand-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'personal_brand_scripts');

// Register widget areas
function personal_brand_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'personal-brand'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'personal-brand'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'personal_brand_widgets_init');
