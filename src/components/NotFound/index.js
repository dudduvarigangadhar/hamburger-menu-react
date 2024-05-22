import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="notFound-img"
    />
    <h1 className="not-found-heading">Lost your way?</h1>
    <p className="not-found-description">
      {`Sorry, we can't find that page. you'll find lots to explore on the home
      page`}
    </p>
  </div>
)

export default NotFound
