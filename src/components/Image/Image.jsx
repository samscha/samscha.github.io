import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

export default () => {
    const Image = ({
        alt,
        circle,
        className: classNameProp,
        onClick,
        src,
        style,
        tag,
        title,
    }) => {
        const classNames = ['image'];
        const initImgDisplay = tag === 'div' ? 'none' : undefined;
        const [imgDisplay, updateImgDisplay] = React.useState(initImgDisplay);
        const [imgHasError, updateImgHasError] = React.useState(false);

        circle && classNames.push('circle');
        onClick && classNames.push('clickable');
        classNameProp && classNames.push(classNameProp);
        imgHasError && classNames.push('error');

        const img = (
            <img
                className={classNames.join(' ')}
                onError={() => {
                    updateImgDisplay('unset');
                    updateImgHasError(true);
                }}
                alt={alt}
                onClick={onClick}
                src={src}
                title={title}
                style={{ display: imgDisplay }}
            />
        );

        if (tag === 'div') {
            return (
                <div
                    className={classNames.join(' ')}
                    alt={alt}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'none',
                        ...style,
                    }}
                    title={title}
                >
                    {img}
                </div>
            );
        }

        return img;
    };

    Image.defaultProps = {
        circle: false,
        style: {},
        tag: 'img',
    };

    Image.propTypes = {
        alt: PropTypes.string.isRequired,
        circle: PropTypes.bool,
        href: PropTypes.string,
        onClick: PropTypes.func,
        src: PropTypes.string.isRequired,
        style: PropTypes.object,
        tag: PropTypes.oneOf(['div', 'img']),
        title: PropTypes.string,
    };

    return Image;
};
