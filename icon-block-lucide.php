<?php

/**
 * Plugin Name:       Icon Block Lucide
 * Description:       Adds Lucide icon set to the Icon Block.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Edu Wass
 * Author URI:        https://eduwass.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       icon-block-lucide
 */

/**
 * Prevent direct access.
 */
defined('ABSPATH') || exit;

/**
 * Version number.
 */
const ICON_BLOCK_LUCIDE_VERSION = '1.0.0';

/**
 * Registers the custom icons for the Icon Block.
 */
function icon_block_lucide_register_custom_icons() {
    wp_enqueue_script(
        'icon-block-lucide-register-custom-icons',
        plugin_dir_url(__FILE__) . 'register.js',
        array('wp-i18n', 'wp-hooks', 'wp-dom'),
        ICON_BLOCK_LUCIDE_VERSION,
        true
    );
}
add_action('enqueue_block_editor_assets', 'icon_block_lucide_register_custom_icons');
