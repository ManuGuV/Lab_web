const addFile = file => {
    return {
        type: 'addFile',
        payload: file
    };
};

export default addFile;