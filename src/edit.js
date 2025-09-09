import { __ } from '@wordpress/i18n';
import { MediaUpload, RichText, InspectorControls, URLInputButton } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, ColorPalette, RangeControl, Button, TextControl } from '@wordpress/components';

const ACCENT_CHOICES = [
    '#ff7a00', '#f97316', '#ef4444', '#22c55e', '#06b6d4', '#6366f1'
];

export default function Edit({ attributes, setAttributes }) {
    const { mediaURL, mediaAlt, headline, body, linkURL, linkText, reverse, accent, maxWidth } = attributes;

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
                'montage-section',
                reverse ? 'is-reversed' : ''
            ].join(' ')}
                     data-accent={accent}
                     style={{ '--montage-max': `${maxWidth}px` }}
            >
                <div className="montage-bg" aria-hidden="true"></div>

                <div className="montage-flex">
                    <div className="montage-media">
                        <MediaUpload
                            onSelect={(m)=>setAttributes({ mediaURL: m.url, mediaAlt: m.alt || '' })}
                            allowedTypes={['image']}
                            render={({ open }) => (
                                mediaURL ? (
                                    <div className="media-wrap" onClick={open} role="button" tabIndex={0} onKeyDown={(e)=>e.key==='Enter'&&open()}>
                                        <img src={mediaURL} alt={mediaAlt || ''} />
                                        <div className="change-overlay">{__('Change image','frequenze')}</div>
                                    </div>
                                ) : (
                                    <Button variant="primary" onClick={open}>{__('Select image','frequenze')}</Button>
                                )
                            )}
                        />
                    </div>

                    <div className="montage-content">
                        <RichText
                            tagName="h2"
                            value={headline}
                            onChange={(v)=>setAttributes({ headline: v })}
                            placeholder={__('Titolo…','frequenze')}
                            allowedFormats={[]}
                        />
                        <RichText
                            tagName="p"
                            value={body}
                            onChange={(v)=>setAttributes({ body: v })}
                            placeholder={__('Testo…','frequenze')}
                        />
                        <div className="montage-actions">
                            <URLInputButton
                                url={linkURL}
                                onChange={(url)=>setAttributes({ linkURL: url })}
                            />
                            <TextControl
                                label={__('Link text','frequenze')}
                                value={linkText}
                                onChange={(v)=>setAttributes({ linkText: v })}
                            />
                        </div>
                        <a className="btn" href={linkURL || '#'}>{linkText || __('Scopri','frequenze')}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
