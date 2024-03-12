import '../../assets/Form.css'
import { useForm, ValidationError } from '@formspree/react'
import { API_KEY } from '../data/form'

export default function Form() {
    const [ state, handleSubmit ] = useForm(API_KEY);
    if (state.succeeded) {
        return <p className='contacto-form'>Gracias por contactarnos, nos comunicaremos a la brevedad!</p>
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div className="descr">Dejanos un mensaje!</div>

          <div className="input">
              <input
              className='input-form' 
              required='' 
              autoComplete='off' 
              type='text'
              id='name'
              name='name' />
              <label htmlFor="name">Nombre</label>
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
          </div>
    
          <div className='input'>
              <input
              className='input-form' 
              required='' 
              autoComplete='off' 
              name='email' 
              type='email'
              id='email' />
              <label htmlFor='email'>E-mail</label>
              <ValidationError 
                prefix='Email' 
                field='email'
                errors={state.errors}
              />
          </div>
    
          <div className='input'>
              <textarea required='' 
              cols='30' 
              rows='1' 
              id='message'
              name='message' >

              </textarea>
              <label htmlFor="message">Mensaje</label>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
          </div>
          <button className='button-form' type='submit' disabled={state.submitting}>Enviar mensaje →</button>
        </form>
    </div>
    )
}