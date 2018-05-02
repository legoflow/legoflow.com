'use strict';

const path = require('path');

module.exports = {
    base: '/wiki/',
    title: 'LegoFlow 2',
    description: 'legoflow 2',
    head: [
        [ 'link', { rel: 'icon', href: '/logo.png' } ],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                image: path.resolve( __dirname, '../image' ),
            }
        }
    },
    themeConfig: {
        nav: [
            { text: '官网', link: 'https://legoflow.com' },
            { text: '指南', link: 'https://legoflow.com/wiki' },
            { text: '配置', link: './config' },
        ],
        repo: 'legoflow/legoflow',
    }
}
