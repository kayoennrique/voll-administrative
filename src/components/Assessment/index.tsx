import IProfessional from "../../types/IProfessional";
import Card from "./Card";

function Assessment({ profissionais }: { profissionais: IProfessional[] | null }) {
  return (
    <section>
      {profissionais?.map((profissional) => {
        return <Card profissional={profissional} />
      })}
    </section>
  )
}

export default Assessment;