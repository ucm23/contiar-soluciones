import Navbar from "./Navbar";
import React, { useEffect, useState, useRef, useMemo, memo } from "react"
import { indexLogs } from "../../api/logs";
import { Spin } from 'antd';
import { MoreOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import moment from "moment";

function Logs() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const [scrolling, setScrolling] = useState(false)

    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [length, setLength] = useState(0);
    const pageSize = 99;
    const loadLess = () => {
        if (currentPage > 0) {
            setCurrentPage(Math.abs(currentPage - pageSize))
            setPage(page - 1);
        }
    }
    const loadMore = () => {
        if (length > currentPage + pageSize) {
            setCurrentPage(Math.abs(currentPage + pageSize));
            setPage(page + 1);
        }
    }

    const totalPages = Math.ceil(length / pageSize);

    useEffect(() => {
        getData()
    }, [page])

    const memoizedValue = useMemo(() => ({ data }), [data]);

    const getData = async () => {
        try {
            let range = (length !== 0 && page !== 1) ? `${(page - 1) * 100}-${((page - 1) * 100) + pageSize}` : '0-99';
            const response = await indexLogs({ project_id: 1, range, length })
            setData(response?.data)
            setLength(response?.length)
        } catch (error) {
            console.log("🚀 ~ getData Logs 45 ~ error:", error)
        } finally {
            setLoading(true)
        }
    }

    const contenedorRef = useRef(null);

    const handleScroll = () => {
        const scrollTop = contenedorRef.current.scrollTop;
        const scrollLeft = contenedorRef.current.scrollLeft;
        if (scrollLeft !== 0) setScrolling(false)
        else if (scrollTop !== 0) setScrolling(true)
    };

    const renderItem = ({ item, index }) => {
        return (
            <tr key={index}>
                <td className="sticky-left">{item?.id}</td>
                <td>{item?.browser_type}</td>
                <td>{moment(new Date(item?.created_at).toISOString()).format('DD-MM-YYYY ~ HH:mm')}</td>
                <td>{item?.dispositive}</td>

                <td>{item?.ip_address_v4}</td>
                <td>{item?.ip_address_v6}</td>

                <td>{item?.latitude}</td>
                <td>{item?.longitude}</td>
                <td>{item?.plataform}</td>

                {/*<td style={{ width: '10%' }}>
                    <Dropdown menu={{
                        items: [
                            {
                                label: (
                                    <a target="_blank" rel="noopener noreferrer" onClick={() => handleTeamClick({ item, index })}>
                                        Modificar
                                    </a>
                                ),
                            },
                            {
                                label: (
                                    <a target="_blank" rel="noopener noreferrer" onClick={() => console.log(item)}>
                                        Desactivar
                                    </a>
                                ),
                            }
                        ]
                    }}>
                        <a onClick={(e) => e.preventDefault()} >
                            <div className="table-column-logo" style={{ marginRight: 5 }}>
                                <MoreOutlined />
                            </div>
                        </a>
                    </Dropdown>
                </td>*/}
            </tr>
        );
    };
    return (
        <Navbar>
            {!loading ? <div className="center-loader"><Spin tip="Cargando..."></Spin></div> :
                <div className="tabla">
                    <div className="cabecera">Historial</div>
                    <div
                        className="contenido table-scroll"
                        ref={contenedorRef}
                        onScroll={handleScroll}
                    >
                        <table>
                            <thead className="cabecera">
                                <tr>
                                    <th className={`${!scrolling && "sticky-left"}`}>ID</th>
                                    <th>Tipo de Navegador</th>
                                    <th>Fecha ~ Hora</th>
                                    <th>Dispositivo</th>

                                    <th>IP v4</th>
                                    <th>IP v6</th>

                                    <th>Latitud</th>
                                    <th>Longitud</th>
                                    <th>Plataforma</th>
                                </tr>
                            </thead>
                            <tbody>
                                {memoizedValue?.data.map((item, index) => renderItem({ item, index }))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pie">
                        <a onClick={loadLess} >
                            <div className="table-column-logo" style={{ marginRight: 5 }}>
                                <ArrowLeftOutlined />
                            </div>
                        </a>
                        {`${page} de ${totalPages}`}

                        <a onClick={loadMore} >
                            <div className="table-column-logo" style={{ marginRight: 5 }}>
                                <ArrowRightOutlined />
                            </div>
                        </a>
                        {`${length} elems`}
                    </div>
                </div>
            }
        </Navbar>
    )
}

export default Logs
