const apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=wsw52WCvWMcvA5jcUrUNmLaV77xXA6pb&limit=10&q=";

export const getGifs = async(category) => {
    const queryUrl = apiUrl + category;

    const resp = await fetch(queryUrl);

    const {data = []} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}