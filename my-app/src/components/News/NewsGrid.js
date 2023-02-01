import NewsItem from './NewsItem'
import "./News.css"
function NewsGrid({items}) {
return (
    <div className='new-grid-container'>
<div className="news-grid">
{items.map((item, i) => (
<NewsItem key={i} item={item}/>
))}
</div>
</div>
)
}
export default NewsGrid;