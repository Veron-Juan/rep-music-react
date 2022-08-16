import '../templatesPlay/WhereU.css'
import TemplateSongs from './TemplateSongs'
import back from '../../assets/imagesTemplates/wu-back.jpg'
import disc from '../../assets/imagesTemplates/wu-disc.jpg'

export default function WhereU(){
    return(
        <TemplateSongs
        title='Justin Bieber ft Scrillex -  Where are you now'
        image={back}
        disco={disc}
        />
    )
}


