'use strict';

const versionElement = document.getElementById( 'version' );

axios( 'https://raw.githubusercontent.com/legoflow/legoflow/master/package.json' )
    .then( ( response ) => {
        const { data } = response;

        const { version } = data;

        versionElement.innerText = `- ${ version } -`;
    } )
    .catch( ( e ) => {
        versionElement.innerText = '- VERSION -';
    } )

