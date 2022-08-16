import TemplateSongs from "./TemplateSongs";
import back from '../../assets/imagesTemplates/charlie-back.jpg'
import disc from '../../assets/imagesTemplates/charlie-disc.jpg'


export default function CharliePuth(){
    return(
        <TemplateSongs
        title="Charlie Puth ft Selena Gomez - We don't talk anymore"
        image={back}
        disco={disc}
        />
    )
}