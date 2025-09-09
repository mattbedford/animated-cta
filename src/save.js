import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { mediaURL, mediaAlt, headline, body, linkURL, linkText, reverse, accent, maxWidth } = attributes;

    return (
        <section
            className={['montage-section', reverse ? 'is-reversed' : ''].join(' ')}
            data-accent={accent}
            style={{ '--montage-max': `${maxWidth}px` }}
        >
            <div className="montage-bg" aria-hidden="true"></div>

            <div className="montage-flex">
                <div className="montage-media">
                    { mediaURL ? <img src={mediaURL} alt={mediaAlt || ''} /> : null }
                </div>

                <div className="montage-content">
                    <RichText.Content tagName="h2" value={headline} />
                    <RichText.Content tagName="p" value={body} />
                    <a className="btn" href={linkURL || '#'}>{linkText || 'Scopri'}</a>
                </div>
            </div>
        </section>
    );
}
