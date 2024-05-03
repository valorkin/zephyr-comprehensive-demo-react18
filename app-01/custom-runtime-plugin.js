const runtimePlugin = function () {
    return {
        name: 'my-runtime-plugin',
        beforeInit(args) {
            console.log('beforeInit: ', args);
            return args;
        },
        init(args) {
            console.log('init: ', args);
            return args;
        },
        beforeRequest(args) {
            console.log('beforeRequest: ', args);
            return args;
        },
        afterResolve(args) {
            console.log('afterResolve', args);
            return args;
        },
        onLoad(args) {
            console.log('onLoad: ', args);
            return args;
        },
        handlePreloadModule(args) {
            console.log('handlePreloadModule: ', args);
            return args;
        },
        errorLoadRemote(args) {
            console.log('errorLoadRemote: ', args);
            return args;
        },
        resolveShare(args) {
            console.log('resolveShare: ', args);
            return args;
        },
        beforePreloadRemote(args) {
            console.log('beforePreloadRemote: ', args);
            return args;
        },
        generatePreloadAssets(args) {
            console.log('generatePreloadAssets: ', args);
            return args;
        },
        createScript(args) {
            console.log('createScript: ', args);
            return args;
        },
        async loadShare(args) {
            console.log('loadShare:', args);
        },
        async beforeLoadShare(args) {
            console.log('beforeloadShare:', args);
            return args;
        },
    };
};

export default runtimePlugin;
