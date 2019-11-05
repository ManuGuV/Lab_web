const addUser = user => {
    return {
        type: 'addUser',
        payload: user
    };
};

export default addUser;