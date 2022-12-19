import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../pages"


export const LazyLayout = () => {
  return (
    
    <div>
        <h1>LazyLayout Page</h1>
        <ul>
            <li><NavLink to='lazy-1'className={({isActive})=>isActive ? 'nav-active' : '' } >Lazy 1</NavLink></li>
            <li><NavLink to='lazy-2' className={({isActive})=>isActive ? 'nav-active' : '' }>Lazy 2</NavLink></li>
            <li><NavLink to='lazy-3' className={({isActive})=>isActive ? 'nav-active' : '' }>Lazy 3</NavLink></li>
        </ul>
        <Routes>
            <Route path='lazy-1' element={<LazyPageOne/>}/>
            <Route path='lazy-2' element={<LazyPageTwo/>}/>
            <Route path='lazy-3' element={<LazyPageThree/>}/>

            <Route path='*' element={ <Navigate replace to={'lazy-1'}/>}  />
        </Routes>
        
    </div>
  )
}

export default LazyLayout

