import '../../assets/Contact.css'

export default function Contacto () {
    return (
        <div id='contact' className="social-media-icons">
<h2 className='h2-sections'>CÓMO CONTACTAR ?</h2>
<div className='social-container'>
<a className='social-a' href="mailto:estebeeen@outlook.com">
<svg className='social-icon email' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
    fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
        fill="none" /><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
    <path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" /></svg>

</a>
<p className='section-par'>Podes solicitar un presupuesto, o coordinar una visita</p>
<p className='section-p'>Envianos un mail</p>
</div>

<div className='social-container'>
<a className='social-a' href="https://www.instagram.com/saltoinstalaciones/">
<svg className='social-icon insta' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1
 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 
0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>      

</a>
<p className='section-par'>Tambien podés chequear nuestros trabajos acá</p>
</div>

<div className='social-container'>
<a className='social-a' href="https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL">
<svg className='social-icon face' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>

</a>  
<p className='section-par'>Podés encontrar más información acá</p>
</div>

</div>
    )
}

