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
        styleProps,
        tag,
        title,
    }) => {
        const classNames = ['image'];

        circle && classNames.push('circle');
        onClick && classNames.push('clickable');
        classNameProp && classNames.push(classNameProp);

        switch (tag) {
            case 'div':
                return (
                    <div
                        className={classNames.join(' ')}
                        alt={alt}
                        onClick={onClick}
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'none',
                            ...styleProps,
                        }}
                        title={title}
                    />
                );

            case 'img':
            default:
                return (
                    <img
                        className={classNames.join(' ')}
                        alt={alt}
                        onClick={onClick}
                        src={src}
                        title={title}
                    />
                );
        }
    };

    Image.defaultProps = {
        circle: false,
        styleProps: {},
        tag: 'img',
    };

    Image.propTypes = {
        alt: PropTypes.string.isRequired,
        circle: PropTypes.bool,
        onClick: PropTypes.func,
        src: PropTypes.string.isRequired,
        styleProps: PropTypes.object,
        tag: PropTypes.oneOf(['img', 'div']),
        title: PropTypes.string.isRequired,
    };

    return Image;
};
