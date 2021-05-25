import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, RichTextToolbarButton } from '@wordpress/block-editor';
import { toggleFormat, registerFormatType } from '@wordpress/rich-text';
import './editor.scss'; 

let formatName = 'myfirstblock/underline-format';

const UnderlineButton = ( props ) => {
  return (
    <RichTextToolbarButton
      icon="editor-underline"
      title="Underline"
      onClick={ () => {
        props.onChange(
          toggleFormat( props.value, {
            type: formatName
          } ) 
        );
      } }
      isActive={ props.isActive }
    />
  );
};
 
registerFormatType( formatName, {
  title: 'Underline',
  tagName: 'u',
  className: null,
  edit: UnderlineButton,
} );

registerBlockType( 'myfirstblock/gtg-demo', {
  apiVersion: 2,
  title: 'GTG Demo Block(RichText)',
  icon: 'heading', // https://developer.wordpress.org/resource/dashicons/#heading
  category: 'text',
  attributes: {
    subheading: {
      type: 'string',
    },
    heading: {
      type: 'string',
    },
    content: {
      type: 'string',
    }
  },
  edit: props => {
    const blockProps = useBlockProps( {
      className: 'gtg-demo-card'
    } );

    const {
      attributes,
      setAttributes
    } = props;

    const {
      subheading,
      heading,
      content
    } = attributes;

    return (
      <div {...blockProps}>
        <RichText
          tagName='h3'
          className='card-subheading'
          value={subheading}
          onChange={(newVal) => setAttributes({subheading: newVal})}
          placeholder="Subheading Goes Here"
        />
        <RichText
          tagName='h1'
          className='card-heading'
          value={heading}
          onChange={(newVal) => setAttributes({heading: newVal})}
          placeholder="Heading Goes Here"
        />
        <RichText
          tagName='div'
          className='card-content'
          multiline='p'
          value={content}
          onChange={(newVal) => setAttributes({content: newVal})}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    );
  },
  save: props => {
    const blockProps = useBlockProps.save( {
      className: 'gtg-demo-card',
    } );

    const {
      attributes
    } = props;

    const {
      subheading,
      heading,
      content
    } = attributes;

    return (
      <div {...blockProps}>
        <RichText.Content
          tagName='h3'
          className='card-subheading'
          value={subheading}
        />
        <RichText.Content
          tagName='h1'
          className='card-heading'
          value={heading}
        />
        <RichText.Content
          tagName='div'
          className='card-content'
          value={content}
        />
      </div>
    );
  },
} );