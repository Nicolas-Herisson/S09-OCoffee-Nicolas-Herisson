let currentIndex = 0;
const articles = document.querySelectorAll('.news.article');
const navigateArrows = document.querySelectorAll('.navigate');


function displayArticle(index)
{
    const screenWidth = window.screen.width;
    
    articles.forEach(article => article.classList.remove('article--active'));
    articles[index].classList.add('article--active');

    if (navigateArrows[0].classList.contains('hide'))
        navigateArrows.forEach(arrow => arrow.classList.remove('hide'));

    if (screenWidth < 1024 && screenWidth > 768)
    { 
        if (articles[index+1]) 
            articles[index+1].classList.add('article--active');
    }
    if (screenWidth > 1024)
    {
        articles.forEach(article => article.classList.add('article--active'));
        navigateArrows.forEach(arrow => arrow.classList.add('hide'));
    }
    currentIndex = index;
};

function next()
{
    if (currentIndex === articles.length - 1)
        currentIndex = 0;
    else
        currentIndex++;

    displayArticle(currentIndex);
};

function previous()
{
    if (currentIndex === 0)
        currentIndex = articles.length - 1;
    else
        currentIndex--;

        displayArticle(currentIndex);
    
}

displayArticle(currentIndex);
window.addEventListener("resize", () => displayArticle(currentIndex));
