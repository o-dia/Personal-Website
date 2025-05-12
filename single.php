<?php get_header(); ?>

<div class="container">
    <div id="primary" class="content-area">
        <main id="main" class="site-main">

            <?php while (have_posts()): the_post(); ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                        <div class="entry-meta">
                            <span class="posted-on"><?php echo get_the_date(); ?></span>
                            <span class="author">by <?php the_author(); ?></span>
                        </div>
                    </header>

                    <?php if (has_post_thumbnail()): ?>
                        <div class="featured-image">
                            <?php the_post_thumbnail('large'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . __('Pages:', 'personal-brand'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>

                    <footer class="entry-footer">
                        <?php
                        // Display categories and tags
                        $categories_list = get_the_category_list(', ');
                        if ($categories_list) {
                            echo '<span class="cat-links">Posted in ' . $categories_list . '</span>';
                        }

                        $tags_list = get_the_tag_list('', ', ');
                        if ($tags_list) {
                            echo '<span class="tags-links">Tagged ' . $tags_list . '</span>';
                        }
                        ?>
                    </footer>
                </article>

                <?php
                // If comments are open or we have at least one comment, load up the comment template.
                if (comments_open() || get_comments_number()) :
                    comments_template();
                endif;
                ?>

                <nav class="navigation post-navigation">
                    <h2 class="screen-reader-text">Post navigation</h2>
                    <div class="nav-links">
                        <?php
                        previous_post_link('<div class="nav-previous">%link</div>', 'Previous Post');
                        next_post_link('<div class="nav-next">%link</div>', 'Next Post');
                        ?>
                    </div>
                </nav>

            <?php endwhile; ?>

        </main>
    </div>
</div>

<?php get_footer(); ?>
