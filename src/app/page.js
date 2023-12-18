"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"

const Home = () => {

   const [mensajeBackend, setMensajeBackend] = useState('');

  useEffect(() => {
    // Llamar al backend cuando el componente se monta
    fetch('/api/home')
      .then((res) => res.json())
      .then((data) => setMensajeBackend(data.mensaje))
      .catch((error) => console.error('Error al llamar al backend:', error));
  }, []);


  return (
      <div>
        <p>
          Get started by editing&nbsp;
         {mensajeBackend}
        </p>
        <Link href={'/about'} > ABOUT</Link>
      </div>
  )
}

export default Home