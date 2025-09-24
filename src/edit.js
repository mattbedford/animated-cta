import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, ColorPalette, RangeControl, Button, TextControl } from '@wordpress/components';

const ACCENT_CHOICES = [
    '#ff7a00', '#f97316', '#ef4444', '#22c55e', '#06b6d4', '#6366f1'
];

const TEMPLATE = [
    ['generateblocks/container', {}, [
        ['generateblocks/grid', { columns: 2 }, [
            ['generateblocks/container', {}, [
                ['generateblocks/image', {}]
            ]],
            ['generateblocks/container', {}, [
                ['generateblocks/headline', {
                    element: 'h2',
                    content: 'Scopri il nostro shop'
                }],
                ['generateblocks/text', {
                    content: 'Testo descrittivo che spiega cosa offriamo.'
                }],
                ['generateblocks/button', {
                    text: 'Scopri',
                    url: '#'
                }]
            ]]
        ]]
    ]]
];

export default function Edit({ attributes, setAttributes }) {
    const { mediaURL, mediaAlt, reverse, accent, maxWidth } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Layout', 'frequenze')}>
                    <ToggleControl
                        label={__('Reverse layout (image right)', 'frequenze')}
                        checked={reverse}
                        onChange={(v)=>setAttributes({ reverse: v })}
                    />
                    <RangeControl
                        label={__('Max content width (px)', 'frequenze')}
                        min={600} max={1600}
                        value={maxWidth}
                        onChange={(v)=>setAttributes({ maxWidth: v })}
                    />
                </PanelBody>
                <PanelBody title={__('Accent color', 'frequenze')} initialOpen={false}>
                    <ColorPalette
                        colors={ACCENT_CHOICES.map(c => ({ color: c }))}
                        value={accent}
                        onChange={(c)=>setAttributes({ accent: c })}
                    />
                    <TextControl
                        label={__('Custom CSS color (optional)', 'frequenze')}
                        value={accent}
                        onChange={(v)=>setAttributes({ accent: v })}
                        help="Any valid CSS color."
                    />
                </PanelBody>
            </InspectorControls>

            <section className={[
                'animated-section',
                reverse ? 'is-reversed' : ''
            ].join(' ')}
                     data-accent={accent}
                     style={{ '--animated-max': `${maxWidth}px` }}
            >
                <div className="animated-bg" aria-hidden="true"></div>

                <div className="animated-flex">
                    <InnerBlocks
                        template={TEMPLATE}
                        allowedBlocks={[
                            'generateblocks/container',
                            'generateblocks/grid',
                            'generateblocks/headline',
                            'generateblocks/text',
                            'generateblocks/button',
                            'generateblocks/image',
                            'core/heading',
                            'core/paragraph',
                            'core/button',
                            'core/image'
                        ]}
                    />
                </div>
            </section>
        </>
    );
}