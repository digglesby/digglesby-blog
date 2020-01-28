> STATIC_PATH.js
echo "export default \"https://cdn.digglesby.com/static\";" >> STATIC_PATH.js
> next.config.js
echo "module.exports = { target: 'serverless', assetPrefix: 'https://cdn.digglesby.com' };" >> next.config.js
