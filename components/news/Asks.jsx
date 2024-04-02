import pages from '../../public/data/pages.json'
//import '../../public/css/asks.styles.css'

/*import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'*/

import { Collapse, Divider } from 'antd';

const Asks = ({ index }) => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className='asks'>
            <div className="asks-header">
                <h1 className='asks-header-title'>
                    ¿Tienes preguntas?
                </h1>
                <h1 className='asks-header-paragraph'>
                    Estamos aquí para responder y ayudarte en lo que necesites.
                </h1>
            </div>
            <div className="asks-body">
                {/*<Accordion allowToggle>
                    {pages[index]?.asks.map((item, index) => (
                        <AccordionItem>
                                <AccordionButton justifyContent={'space-between'} _hover={{ bg: 'white' }}>
                                    <h1 className='ask-ask' as="span" flex='1' textAlign='left'>
                                        {item?.title}
                                    </h1>
                                    <AccordionIcon />
                                </AccordionButton>
                            <AccordionPanel pb={0}>
                                <h1 className='ask-res'>{item?.paragraph}</h1>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                    </Accordion>*/}

                {/*<Collapse defaultActiveKey={['1']} onChange={onChange}>

                    {pages[index]?.asks.map((item, index) => (
                        <div header={item?.title} key={`according-${index}`}>
                            <h1 className='ask-res'>{item?.paragraph}</h1>
                        </div>
                    ))}
                    </Collapse>*/}

                {pages[index]?.asks.map((item, index) => (
                    <div key={`according-${index}`}>
                        <Collapse
                            items={[
                                {
                                    key: `asks-${index+1}`,
                                    label: item?.title,
                                    children: <h1 className='ask-res'>{item?.paragraph}</h1>,
                                },
                            ]}
                        />
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Asks;
