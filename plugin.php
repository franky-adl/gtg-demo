<?php
/*
Plugin Name: Gutenberg Block Demo
*/
function gtg_demo_register_block() {
  wp_register_script(
    'gtg-demo-editor-script',
    plugins_url( 'build/editor.js', __FILE__ ),
    array( 'wp-blocks' ),
    filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.js' )
  );

  wp_register_style(
    'gtg-demo-style',
    plugins_url( 'build/style.css', __FILE__ ),
    [],
    filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
  );

  wp_register_style(
    'gtg-demo-editor-style',
    plugins_url( 'build/editor.css', __FILE__ ),
    [],
    filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
  );

  register_block_type( 'myfirstblock/gtg-demo', array(
    'editor_script' => 'gtg-demo-editor-script',
    'editor_style' => 'gtg-demo-editor-style',
    'style' => 'gtg-demo-style'
  ) );
 
}
add_action( 'init', 'gtg_demo_register_block' );