const deleteFile = id => {
    return {
        type: 'deleteFile',
        payload: id
    };
};

export default deleteFile;