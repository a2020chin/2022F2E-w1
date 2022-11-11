import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Loading from './component/Loading'
import TitleAnime from './component/TitleAnime'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Loading>
      <TitleAnime/>
    </Loading>
  </React.StrictMode>
)
