<?php
/**
 * Plugin Name: Animated CTA Block
 * Description: Reusable two-column CTA with animated expanding background.
 * Author: Matt Bedford
 * Version: 2.0.0
 */

if ( ! defined('ABSPATH') ) exit;

add_action('init', static function () {
    // Let block.json handle assets; this ensures styles & view script are enqueued on the front only when used.
    register_block_type( __DIR__ . '/build' );
});
