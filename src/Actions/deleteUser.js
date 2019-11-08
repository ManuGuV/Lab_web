const deleteUser = user => {
    return {
        type: 'deleteUser',
        payload: user
    };
};

export default deleteUser;