import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
        className="not_found"
      />
      <h1>Lost Your Way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
