import { Link } from 'react-router-dom'
import '../assets/Error.css'

export default function Error() {
    return <div className='container-error'> Error 404, parece qué estás perdido.. 
        <Link to='/' >Volver 
        <svg width="24" height="24" viewBox="0 0 24 24" 
            strokeWidth="1.5" stroke="currentColor" fill="none"
            strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 
            1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" strokeWidth="0"
            fill="currentColor" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 
            .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" 
            strokeWidth="0" fill="currentColor" />
        </svg> 
        </Link>
    </div>
}