import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss'; 

registerBlockType( 'myfirstblock/gtg-demo', {
  apiVersion: 2,
  title: 'GTG Demo Block',
  icon: 'heading', // https://developer.wordpress.org/resource/dashicons/#heading
  category: 'text',
  attributes: {
    text: {
      type: 'string',
      default: 'Hell World!'
    },
    shit: {
      type: 'string',
      source: 'attribute',
      selector: 'h1',
      attribute: 'shit',
    },
    dish: {
      type: 'string'
    }
  },
  edit: props => {
    const blockProps = useBlockProps( {
      className: 'gtg-demo-h1',
      'data-id': 'special-h1-id'
    } );
    if (!props.attributes.shit) {
      props.setAttributes({shit: 'color: yellow'})
    }
    if (!props.attributes.dish) {
      props.setAttributes({dish: 'Needs washed'})
    }
    return (
      <h1 {...blockProps} shit={props.attributes.shit}>{props.attributes.text} {props.attributes.dish}</h1>
    );
  },
  save: props => {
    const blockProps = useBlockProps.save( {
      className: 'gtg-demo-h1',
    } );
    return (
      <h1 {...blockProps} shit={props.attributes.shit}>{props.attributes.text} {props.attributes.dish}</h1>
    );
  },
} );