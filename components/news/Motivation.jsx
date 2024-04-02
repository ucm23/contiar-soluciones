import pages from '../../public/data/pages.json'
//import '../../assets/styles/motivation.styles.css'

const Motivation = ({ index }) => {
    return (
        <div className='motivation'>
            <div className="header">
                <h1 className='title'>
                    {pages[index]?.motivation?.title}
                </h1>
                <h1 className='paragraph'>
                    {pages[index]?.motivation?.paragraph}
                </h1>
                <img
                    src={`captures/buzon-detalle.png`}
                    style={{ width: '95%', height: 'auto', borderRadius: 14, margin: '0 auto' }}
                    alt='captures/detalle.png'
                />
            </div>
        </div>
    )
}

export default Motivation;
