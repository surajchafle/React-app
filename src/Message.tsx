function Message() {
    const name = 'Suraj Chafle';
    if (name) {
        return <h1>Hello {name} to react world</h1>
    }
    return <h1>Hello world</h1>
}

export default Message;