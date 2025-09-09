import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('frequenze/montage-cta', {
    edit: Edit,
    save,
});