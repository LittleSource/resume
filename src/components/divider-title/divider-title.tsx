import { FC } from 'react'
import './divider-title.less'

export interface DividerTitleProps  {
    title: string
}

const DividerTitle: FC<DividerTitleProps> = ({title}) => {
    return (
        <div className='section-hd'>
            <span className='section-title-l section-title-divider'></span>
                <h2 className='section-title'>{title}</h2>
            <span className='section-title-r section-title-divider'></span>
        </div>
    )
}

export default DividerTitle