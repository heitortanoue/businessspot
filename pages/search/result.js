import Container from "../../components/global/container";
import axios from "axios";
import Image from "next/image";
import MyPie from "../../components/in/charts/myPie"
import MyLine from "../../components/in/charts/myLines"
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head"

export async function getServerSideProps(context) {
    const classe = context.query.class
    const res = await fetch(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/${classe}`)
    const data = await res.json()
    const stringfied = await JSON.stringify(data)
    //const data = await fetchClasse(context.query.class)
    return { props: { resultados: stringfied, estado: context.query.state } }
}

export default function Result ({ resultados, estado }) {
    const [CLASSE, setCLASSE] = useState({})
    const query = () => {
        axios.post("/api/connect")
        .then (function(response) {

        })
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }

    useEffect(() => {
        setCLASSE(JSON.parse(resultados))
    }, [resultados, setCLASSE])

    const data = [
        {
          "id": "São Paulo",
          "label": "São Paulo",
          "value": 143,
          "color": "hsl(240, 70%, 50%)"
        },
        {
          "id": "Campinas",
          "label": "Campinas",
          "value": 115,
          "color": "hsl(37, 70%, 50%)"
        },
        {
          "id": "Salvador",
          "label": "Salvador",
          "value": 164,
          "color": "hsl(283, 70%, 50%)"
        },
        {
          "id": "Brasília",
          "label": "Brasília",
          "value": 495,
          "color": "hsl(282, 70%, 50%)"
        },
        {
          "id": "Curitiba",
          "label": "Curitiba",
          "value": 434,
          "color": "hsl(339, 70%, 50%)"
        }
      ]

      const data2= [
        {
          "id": "crescimento",
          "color": "hsl(310, 70%, 50%)",
          "data": [
        {
            "x": "01",
            "y": "113422.52000000009"
        },
        {
            "x": "02",
            "y": "96548.79000000008"
        },
        {
            "x": "03",
            "y": "79780.7300000001"
        },
        {
            "x": "04",
            "y": "67445.49000000008"
        },
        {
            "x": "05",
            "y": "87139.49000000005"
        },
        {
            "x": "06",
            "y": "70209.50000000004"
        },
        {
            "x": "07",
            "y": "906402.5500000002"
        },
        {
            "x": "08",
            "y": "167717.91000000006"
        },
        {
            "x": "09",
            "y": "60234.080000000016"
        },
        {
            "x": "10",
            "y": "82291.91000000002"
        },
        {
            "x": "11",
            "y": "62965.050000000054"
        },
        {
            "x": "12",
            "y": "41092.11000000002"
        }
        ]}]

    return (
        <>
        <Head>
            <title>
                {CLASSE && CLASSE.descricao ? (`${capitalizeFirstLetter(CLASSE.descricao)} em ${estado}`) : "Carregando..."}
            </title>
        </Head>
        <Container hideHeader={true}>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <Link passHref href="/">
                        <div className="relative w-12 h-12 cursor-pointer">
                            <Image src="/logos/icon.svg" layout="fill"/>
                        </div>
                    </Link>
                    <div className="flex gap-0.5 flex-col">
                        <div className="font-title text-3xl">
                            {CLASSE && CLASSE.descricao ? capitalizeFirstLetter(CLASSE.descricao) : "Carregando..."}
                        </div>
                        <div className="text-background-lighter font-title">
                        no estado de {estado}
                    </div>
                    </div>
                </div>
                <div className="py-1 px-3 text-white font-light rounded-full text-lg bg-background-dark">2020</div>
            </div>
            <div className="mt-10 flex flex-col gap-5">
                <div className="flex gap-3 items-stretch">
                    <div className="w-2/3 flex gap-3">
                    <div className="bg-background-dark rounded-xl flex-1 p-5 h-150">
                        <div className="font-bold text-3xl">Compras</div>
                        <div className="font-title text-background-lighter">por Cidade</div>
                        <div className="h-full">
                        <MyPie data={data} color={"greens"}/>
                        </div>
                    </div>
                    <div className="bg-background-dark rounded-xl flex-1 p-5 h-150">
                        <div className="font-bold text-3xl">Vendas</div>
                        <div className="font-title text-background-lighter">por Cidade</div>
                        <div className="h-full">
                        <MyPie data={data}/>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-5">
                        <div className="bg-background-dark rounded-xl p-5 flex-1 flex gap-3">
                            <div className="rounded-xl bg-secondary p-5 w-10 h-10 flex items-center justify-center">
                                <i className="fas fa-dollar-sign text-xl"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="font-bold text-4xl">R$ 113,4 Mil</div>
                                <div className="font-title text-background-lighter">de Vendas Brutas</div>
                            </div>
                        </div>
                        <div className="bg-background-dark rounded-xl p-5 flex-1 flex gap-3">
                            <div className="rounded-xl bg-primary p-5 w-10 h-10 flex items-center justify-center">
                                <i className="fas fa-dollar-sign text-xl"></i>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="font-bold text-4xl">R$ 305,4 Mil</div>
                                <div className="font-title text-background-lighter">de Compras Brutas</div>
                            </div>
                        </div>
                        <div className="bg-background-dark rounded-xl p-5 flex-1">TESTE</div>
                    </div>
                </div>
                <div className="flex gap-3 items-stretch">
                    <div className="bg-background-dark rounded-xl w-2/3 p-5 h-96">
                        <div className="font-bold text-3xl">Evolução</div>
                        <div className="font-title text-background-lighter">das Compras e Vendas</div>
                        <div className="h-full">
                        <MyLine data={data2} color={"greens"}/>
                        </div>
                    </div>
                    <div className="bg-background-dark rounded-xl flex-1 p-5">TESTE</div>
                </div>
                <div className="bg-background-dark rounded-xl flex-1 p-5">
                    TESTE
                </div>
            </div>
        </Container>
        </>
    )
}