import './Oasis.css'
import TemplateSongs from './TemplateSongs'
import back from '../../assets/imagesTemplates/oasis-back.jpg'
import disc from '../../assets/imagesTemplates/oasis-disc.jpg'


export default function Oasis(){
    return(
        <TemplateSongs
        title='Oasis - Wonderwall'
        image={back}
        disco={disc}
        />
    )
}