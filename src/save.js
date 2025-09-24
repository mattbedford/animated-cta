import { InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { reverse, accent, maxWidth } = attributes;

    return (
        <section
            className={['animated-section', reverse ? 'is-reversed' : ''].join(' ')}
            data-accent={accent}
            style={{ '--animated-max': `${maxWidth}px` }}
        >
            <div className="animated-bg" aria-hidden="true"></div>

            <div className="animated-flex">
                <InnerBlocks.Content />
            </div>
        </section>
    );
}