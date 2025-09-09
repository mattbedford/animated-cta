import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { mediaURL, mediaAlt, headline, body, linkURL, linkText, reverse, accent, maxWidth } = attributes;

    return (
        <section
            className={['animated-section', reverse ? 'is-reversed' : ''].join(' ')}
            data-accent={accent}
            style={{ '--animated-max': `${maxWidth}px` }}
        >
            <div className="animated-bg" aria-hidden="true"></div>

            <div className="animated-flex">
                <div className="animated-media">
                    { mediaURL ? <img src={mediaURL} alt={mediaAlt || ''} /> : null }
                </div>

                <div className="animated-content">
                    <RichText.Content tagName="h2" value={headline} />
                    <RichText.Content tagName="p" value={body} />
                    <a className="btn" href={linkURL || '#'}>{linkText || 'Scopri'}</a>
                </div>
            </div>
        </section>
    );
}
