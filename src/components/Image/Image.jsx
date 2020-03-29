import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

export default () => {
    const Image = ({
        alt,
        circle,
        className: classNameProp,
        href,
        onClick,
        src,
        styleProps,
        tag,
        title,
    }) => {
        const classNames = ['image'];
        const imageStyle = {};
        const img = (
            <img
                className={classNames.join(' ')}
                alt={alt}
                onClick={onClick}
                src={src}
                title={title}
                style={imageStyle}
            />
        );

        circle && classNames.push('circle');
        onClick && classNames.push('clickable');
        classNameProp && classNames.push(classNameProp);

        if (tag === 'a') {
            imageStyle.display = 'none';
            return (
                <a
                    className={classNames.join(' ')}
                    alt={alt}
                    href={href}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'none',
                        ...styleProps,
                    }}
                    title={title}
                >
                    {img}
                </a>
            );
        }

        return img;
    };

    Image.defaultProps = {
        circle: false,
        styleProps: {},
        tag: 'img',
    };

    Image.propTypes = {
        alt: PropTypes.string.isRequired,
        circle: PropTypes.bool,
        href: PropTypes.string,
        onClick: PropTypes.func,
        src: PropTypes.string.isRequired,
        styleProps: PropTypes.object,
        tag: PropTypes.oneOf(['a', 'img']),
        title: PropTypes.string.isRequired,
    };

    return Image;
};
