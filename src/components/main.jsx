//importação das funcionalidades
import { useState, useEffect } from 'react';

//importação do estilo
import '../styles/main.scss';

//importação das imagens
import CNH from '../assets/cnh.png';
import truck from '../assets/truck.jpg'

export default function main() {

    useEffect(() => {
        alert('Seja bem vindo!')
    }, [])




    return (
        <main>
            <div>
                <section>
                    <h1>Seja muito bem vindo!
                         fique a vontade para aproveitar os nossos planos !</h1>

                    <figure>
                        <img className='CNH' src={CNH} alt='' />
                        <figcaption></figcaption>
                    </figure>
                </section>

                <section>
                    <p>
                        Processo de Obtenção:

                        Detalhes sobre os passos para obter uma carteira de habilitação.
                        Requisitos mínimos de idade e documentos necessários.
                        Informações sobre as aulas teóricas e práticas.
                    </p>

                    <button>Categorias de habilitação</button>
                </section>
            </div>


            <div>
                <h2>Fique à vontade para escolher entre os nossos planos e garanta sua carteira digital imediatamente!</h2>


                <figure className='cards'>
                    <section className='card'>
                        <img className='truck' src={truck} alt='' />
                        <button>Teste</button>
                    </section>

                    <section className='card'>
                        <img className='truck' src='https://classic.exame.com/wp-content/uploads/2023/07/djamila-ribeiro-GM-chevrolet-mulheres-2.jpg?quality=70&strip=info&w=1024' alt='' />
                        <button>Teste</button>
                    </section>

                    <section className='card'>
                        <img className='truck' src='https://classic.exame.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-08-at-15.33.01.jpeg?quality=70&strip=info&w=1024' alt='' />
                        <button>Teste</button>
                    </section>




                </figure>




            </div>
        </main >
    )
}
