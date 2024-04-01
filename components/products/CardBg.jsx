import { Badge, Card } from 'antd'
import React from 'react'

const CardBg = ({ children,width }) => {
    return (
        <section className='badge_ribbon card_badge_ribbon' style={{ width: width || '25%',padding: 10, }}>
            <Badge.Ribbon text="__" >
                <Card
                    style={{
                        width: "100%",
                        boxShadow: '1px 2px 9px #9A9A9A',
                    }}
                >
                    {children}
                </Card>
            </Badge.Ribbon>
        </section>
    )
}

export default CardBg