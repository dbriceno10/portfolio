const getHash = () => {
    const hash = window.location.hash
        const id  = hash.slice(2)
    return id
}

export default getHash