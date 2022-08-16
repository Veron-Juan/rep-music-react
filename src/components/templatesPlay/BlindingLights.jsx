import '../templatesPlay/BlindingLights.css'
import TemplateSongs from './TemplateSongs'
import back from '../../assets/imagesTemplates/theweknd-bl-back.jpg'
import disc from '../../assets/imagesTemplates/theweknd-disc.jpg'

export default function BlindingLights(){
    return(
        <TemplateSongs
        title='The Weeknd - Blinding Lights'
        image={back}
        disco={disc}
        />
    )
}
