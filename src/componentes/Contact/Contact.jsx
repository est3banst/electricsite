import '../../assets/Contact.css'

export default function Contacto () {
    return (
        <div id='contact' className="pattern-contact my-4 h-auto grid grid-cols-1 md:grid-cols-2 py-6 px-4">
<div>
<h2 className="text-2xl md:text-3xl w-max self-start uppercase m-4 py-2 border-b-4 border-[#0393f8]">
Contacto</h2>
</div>
<div className='flex flex-col border-2 max-h-72 shadow-2xl rounded-e-3xl p-4 bg-[#f2f2f248] justify-center backdrop-blur-sm items-center'>
<a className='' href="mailto:hugojure@saltoinstalaciones.com">
<svg className='social-icon email animate-pulse p-4' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
    fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z"
        fill="none" /><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
    <path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" /></svg>

</a>
<p className='text-xl font-black p-2'>Podés solicitar un presupuesto, o coordinar una visita</p>
<p className='text-xl font-medium'>Envianos un mail</p>
</div>

<div className='flex flex-col border-2 max-h-72 shadow-2xl rounded-e-3xl p-4 bg-[#f2f2f248] justify-center backdrop-blur-sm items-center'>
<a className='' href="https://www.instagram.com/saltoinstalaciones/">
<svg className='social-icon insta animate-pulse p-4' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1
 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 
0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>      

</a>
<p className='text-xl font-black p-2'>También podés chequear nuestros trabajos acá</p>
</div>

<div className='flex flex-col border-2 max-h-72 shadow-2xl mb-4 rounded-e-3xl p-4 bg-[#f2f2f248] justify-center backdrop-blur-sm items-center'>
<a className='' href="https://www.facebook.com/salto.salto.9678?mibextid=ZbWKwL">
<svg className='social-icon face animate-pulse p-4' width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" 
stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>

</a>  
<p className='text-xl font-black p-2'>Podés encontrar más información acá</p>
</div>

</div>
    )
}

