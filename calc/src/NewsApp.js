import axios from "axios";
import { useEffect, useState } from "react";

const NewsApp = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        axios
            .get(
                "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8cd5165b65a9491dba79885c059155f1"
            )
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles);
            });
    }, []);

    const handleReadMore = (newsItem) => {
        console.log("---->>>>>>", newsItem);
        setSelectedNews(newsItem);
    };

    const handleGoBack = () => {
        setSelectedNews(null);
    };

    const dummyImageURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTMzMzJycnPz8/d3d3V1dXi4uLo6Ojw8PDx8fH39/ft7e3Y2NjQ0NDp6enb29uHE20LAAACaklEQVR4nO3b6W6CQBhGYUTWD9T7v9uylLIN6jCk8Cbn+deEGo6DMOAYRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJyFiuzshLesStJAdVZdufEV38LFydkZm6w+IrBJrK86itkxgU1ifnaKmz363QvUvsbjmoNYdjuXPPMQz6R7lfLsGKeq3bd76LvfHwnFIXt0tOKYwjuF51kVtjMUbzqFVmR1/cpK30idwv7qH98yz0SVwvI+XP19JygqhY9xehMnXokihfl0/hZ77a5I4WM2zXz5DKJI4XwKvjHLNGeGRmE1L7w7N7fKeRLSKCy+KGwCnedZjcJofruXuo7SbpwdiRqFlk4D42y9rf0eyOtEjcL5BzFeb2rV5oRApNAmj6QcjyRs8g4sE0UKJ4nxemJq8yGeJ6oURpY/uic26frppy0uJvNEmcI2JM/yovlz8cxlGbhIFCrcsA6cX0/kC52Bt3hMlC90Bk5HUbzQPYL9KA6b6BXmk8/YZuCYqFdYj/f47wL/EtUKrR6/LXsfOCSKFbaBQ+KnwGa79sqpVWjp7x1Ec6B+DhQsHAK7xM+BeoVjYLPzr499eoXTwO+IFfoHihXuWbWgVVh792kV7lt3IlRoe0ZQqvCLax+FZ8c4UUghheebFu6jU1gk++gU7l3t3f2rRmGAyxcGr329cuEh60stunBh2Z3y6yxM/wX52S1u/bf3Ryzzdq9tuIDnYWv1q7NTNlhy0O8t/Nb6/SfLbnHoYbpjSep/sjLfOZ0ZXfTXJKPgH69deAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDyA0uAKIxQw0bjAAAAAElFTkSuQmCC"; 

    return (
        <>
            <div className="container my-5">
                {selectedNews ? (
                    <div>
                        <div>
                            <img
                                src={selectedNews.urlToImage ? selectedNews.urlToImage : dummyImageURL}
                                className="card-img-top"
                                alt="..."
                                height="700px"
                            />
                            <h2>{selectedNews.title}</h2>
                            <h5>Author: {selectedNews.author}</h5>
                            <h5>Published At: {selectedNews.publishedAt}</h5>
                            <p>{selectedNews.description}</p>
                            <button className="btn btn-primary" onClick={handleGoBack}>
                                Go Back
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="row text-center">
                        {news.map((val, index) => {
                            return (
                                <div className="col my-3" key={index}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img
                                            src={val.urlToImage ? val.urlToImage : dummyImageURL}
                                            className="card-img-top"
                                            alt="..."
                                            height="200px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.description}</p>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleReadMore(val)}
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default NewsApp;
