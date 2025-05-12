<?php get_header(); ?>

<div class="container">
    <div id="primary" class="content-area">
        <main id="main" class="site-main">

            <?php while (have_posts()): the_post(); ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                    </header>

                    <div class="entry-content">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . __('Pages:', 'personal-brand'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>
                </article>

            <?php endwhile; ?>

        </main>
    </div>
</div>

<?php get_footer(); ?>
