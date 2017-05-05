export default (func, ...extraParams) => {
    return (...args) => {
        return (func.bind(null, ...extraParams, ...args))();
    };
};
