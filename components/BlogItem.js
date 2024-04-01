import moment from 'moment/moment'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BlogItem = ({ id, cover, date, title, body }) => {

    const { push } = useRouter()

    const handleBlog = () => push(`/post/${id}`)

    return (
        <div className='box'
            onClick={handleBlog}
        >
            <div className='img-blog'>
                {/* <Image
                    width={342}
                    height={230}
                    src={cover} 
                    alt={title}
                    layout="responsive" /> */}

                <img
                    src={cover}
                    alt={title}
                    //style={{ width: 342, height: 230 }}
                />
                <div className='textblog'>
                    <h2>{title}</h2>
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>{body}</p>
                    <span>{moment(date).format('ll')}</span>
                </div>
            </div>

        </div>
    )
}

export default BlogItem