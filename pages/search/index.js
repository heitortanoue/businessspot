import Container from "../../components/global/container"
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from "next/link"

export default function Index () {
    const ESTADOS = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"]
    const [SETORES, setSETORES] = useState([])
    const [DIVISOES, setDIVISOES] = useState([])
    const [GRUPOS, setGRUPOS] = useState([])
    const [CLASSES, setCLASSES] = useState([])

    const [ESTADO, setESTADO] = useState()
    const [SETOR, setSETOR] = useState()
    const [DIVISAO, setDIVISAO] = useState()
    const [GRUPO, setGRUPO] = useState()
    const [CLASSE, setCLASSE] = useState()

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    console.log(CLASSE)

    useEffect(() => {
    fetch("https:servicodados.ibge.gov.br/api/v2/cnae/secoes")
      .then (function(response) {
        return response.json()
      })
      .then (function(data) {
        setSETORES(data)
      })
    }, [setSETORES])

    useEffect(() => {
        setCLASSE("")
    }, [SETOR, DIVISAO, GRUPO])

    const fetchDivisoes = (secao) => {
        fetch(`https://servicodados.ibge.gov.br/api/v2/cnae/secoes/${secao}/divisoes`)
        .then (function(response) {
          return response.json()
        })
        .then (function(data) {
          setDIVISOES(data)
        })  
    }

    const fetchGrupos = (divisao) => {
        fetch(`https://servicodados.ibge.gov.br/api/v2/cnae/divisoes/${divisao}/grupos`)
        .then (function(response) {
          return response.json()
        })
        .then (function(data) {
          setGRUPOS(data)
        })  
    }

    const fetchClasses = (grupo) => {
        fetch(`https://servicodados.ibge.gov.br/api/v2/cnae/grupos/${grupo}/classes`)
        .then (function(response) {
          return response.json()
        })
        .then (function(data) {
          setCLASSES(data)
        })  
    }

    return (
        <>
        <Head>
            <title>BusinessSpot | Busca</title>
        </Head>
        <Container>
            <div>
                <div className="font-title text-3xl pb-1 pt-10">
                    Vamos encontrar seu setor
                </div>
                <div className="font-light pb-4 ml-1 text-lg">
                    Preencha as caixas de seleção abaixo
                </div>
                <div className="flex gap-2 mb-3">

                <select className="select-field" onChange={(e) => {setESTADO(e.target.value)}}>
                <option selected disabled>Estado</option>
                {ESTADOS.map((el) => {
                    return (
                    <option value={el} key={el}>{el}</option>
                    )
                })}
                </select>

                <select className="select-field w-full" onChange={(e) => {setSETOR(e.target.value); fetchDivisoes(e.target.value)}}>
                <option selected disabled>Setor</option>
                    {SETORES.map((el) => {
                    return (
                        <option value={el.id} key={el.id}>{capitalizeFirstLetter(el.descricao)}</option>
                    )
                    })}
                </select>

                <select className="select-field w-full" disabled={DIVISOES.length > 0 && SETOR && ESTADO ? false : true} onChange={(e) => {setDIVISAO(e.target.value); fetchGrupos(e.target.value); setCLASSES([])}}>
                <option selected disabled>Divisão</option>
                    {DIVISOES.map((el) => {
                    return (
                        <option value={el.id} key={el.id}>{capitalizeFirstLetter(el.descricao)}</option>
                    )
                    })}
                </select>
                </div>
                <div className="flex gap-2">
                <select className="select-field w-1/2" disabled={GRUPOS.length && DIVISAO > 0 ? false : true} onChange={(e) => {setGRUPO(e.target.value); fetchClasses(e.target.value)}}>
                <option selected disabled>Grupo</option>
                {GRUPOS.map((el) => {
                    return (
                    <option value={el.id} key={el.id}>{capitalizeFirstLetter(el.descricao)}</option>
                    )
                })}
                </select>
                <select className="select-field w-full" disabled={CLASSES.length > 0 && GRUPO ? false : true} onChange={(e) => {setCLASSE(CLASSES.find((el) => el.id == e.target.value))}}>
                <option selected disabled>Classe</option>
                    {CLASSES.map((el) => {
                    return (
                        <option value={el.id} key={el.id}>{capitalizeFirstLetter(el.descricao)}</option>
                    )
                    })}
                </select>
                </div>
                <Link passHref href={{pathname: "/search/result", query: {class: CLASSE ? CLASSE.id : "error"}}}>
                <button className="w-full bg-primary hover:bg-primary-dark rounded-xl text-center py-1.5 px-10 transition-all mt-5">
                    Buscar esse setor
                </button>
                </Link>
            </div>
            {CLASSE ?
            <>
            <hr className="my-8"/>
            <div>
                <div className="font-title text-2xl">{capitalizeFirstLetter(CLASSE.descricao)}</div>
                <ol className="font-body list-disc">
                    {CLASSE.observacoes.map((el, ind) => {
                        return (
                            <li key={ind}>{el}</li>
                        )
                    })}
                </ol>
            </div>
            </>
            : null}
        </Container>
        </>
    )
}