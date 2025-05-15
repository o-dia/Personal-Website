<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
<div class="reveal-zone"></div>
<div class="site-header-spacer"></div>
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="site-branding">
                <?php if (has_custom_logo()): ?>
                    <div class="site-logo"><?php the_custom_logo(); ?></div>
                <?php else: ?>
                    <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a></h1>
                    <p class="site-description"><?php bloginfo('description'); ?></p>
                <?php endif; ?>
            </div>

            <nav id="site-navigation" class="main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="menu-icon"></span>
                </button>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                ));
                ?>
            </nav>
        </div>
    </header>

    <div id="content" class="site-content">
