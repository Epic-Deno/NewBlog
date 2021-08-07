/**
 * author:xiaoyaozi
 * description:css to jsx
 */
const withCss =require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css'] = file =>{}
}
module.exports = withCss({})