import Head from 'next/head'
import Container from '../components/global/container'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from "next/link"

export default function Home() {
  const GROWTH_CONST = 2

  return (
    <>
    <Head>
      <title>BusinessSpot | Encontre a melhor cidade para o seu negócio</title>
    </Head>
    <Container>
          <div className="flex gap-24 items-center justify-between">
            <div className="flex flex-col gap-8 w-5/12">
              <div className="flex flex-col gap-3">
                <div className="font-title text-size-title">
                  <p>Encontre a melhor</p>
                  <p>cidade para seu</p>
                  <p>negócio</p>  
                </div>
                <div className="font-light text-xl">
                <p>Use nossas ferramentas para descobrir os nichos mais</p>
                <p>lucrativos do seu município, os setores saturados e quais</p>
                <p>são as oportunidades atuais.</p>
                </div>
              </div>
            <Link passHref href="/search">
            <button className="bg-primary rounded-full py-2 px-2 text-lg w-full hover:bg-primary-dark transition-all font-semibold">
              Quero crescer meu negócio
            </button>
            </Link>
            </div>
            <div className="relative w-6/12">
              <Image src="/grafico.png" width={512*GROWTH_CONST} height={481*GROWTH_CONST} priority/>
            </div>
          </div>
    </Container>
    </>
  )
}
