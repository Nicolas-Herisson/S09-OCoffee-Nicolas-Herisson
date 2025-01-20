let currentIndex = 0;
const articles = document.querySelectorAll('.news.article');


function displayArticle(index)
{
    articles.forEach(article => article.classList.remove('article--active'));
    articles[index].classList.add('article--active');
    //articles[index].classList.remove('article');
    currentIndex = index;
};

function next()
{
    if (currentIndex === 2)
        currentIndex = 0;
    else
        currentIndex++;

    displayArticle(currentIndex);
};

function previous()
{
    if (currentIndex === 0)
        currentIndex = 2;
    else
        currentIndex--;

        displayArticle(currentIndex);
    
}

displayArticle(currentIndex);
