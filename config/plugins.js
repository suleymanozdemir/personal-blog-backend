// path: ./config/plugins.js

module.exports = ({ env }) => ({
    upload: {
        config: {
            breakpoints: {
                xlarge: 1920,
                large: 1000,
                medium: 750,
                small: 500,
                xsmall: 64
            },
            providerOptions: {
                sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
                localServer: {
                    maxage: 300000
                },
            },
        },
    },
});
