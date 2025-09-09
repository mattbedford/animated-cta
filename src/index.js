import './style.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('frequenze/animated-cta', {
    edit: Edit,
    save,
});