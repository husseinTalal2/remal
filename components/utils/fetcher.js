const fetcher = (path) =>
    fetch("https://dest-life-api.herokuapp.com/api/" + path)
        .then((res) => res.json())
        .then((data) => data);

module.exports = fetcher;