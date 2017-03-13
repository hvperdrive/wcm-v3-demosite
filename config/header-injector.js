'use strict';

const path = require('path');

const addPublicPath = (relPath, publicPath) => {
    return relPath.indexOf(publicPath) === 0 ? relPath : path.join(publicPath, relPath);
};

const parseToHtmlString = (data, tagName, publicPath) => {
    return data
        .map(tag => {
            const attributeNames = Object.getOwnPropertyNames(tag);
            const attributes = attributeNames.map(attr => {
                const attrValue = attr === 'href' ? addPublicPath(tag[attr], publicPath) : tag[attr];

                return `${attr}="${attrValue}"`;
            }).join(' ');

            const closingTag = tagName === 'script' ? `></${tagName}>` : `/>`;

            return `<${tagName} ${attributes} ${closingTag}`;
        })
        .reduce((arr, curr) => arr.concat(curr), [])
        .join('\n\t');
};

module.exports = function headerInjector(headerConfig, publicPath) {
    const headTags = {};

    if (headerConfig) {
        publicPath = publicPath || '';

        for (let prop in headerConfig) {
            headTags[prop] = parseToHtmlString(headerConfig[prop], prop, publicPath);
        }
    }

    return Object.getOwnPropertyNames(headTags)
        .reduce((arr, curr) => arr.concat(headTags[curr]), [])
        .join('\n\t');
};
