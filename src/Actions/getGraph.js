const getGraph = id => {
    return {
        type: 'getGraph',
        payload: id
    };
};

export default getGraph;