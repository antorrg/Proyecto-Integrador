import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.cont}>
      <div className={style.text}>
        <h1 className={style.title}>Acerca de:</h1>
        <p className={style.letter}>
          Mi nombre es Antonio y al día de la fecha (30/07/2023) soy un alumno
          de Henry, este es un proyecto perteneciente al Modulo 2 (frontend) en
          el cual estoy aprendiedo a hacer un proyecto con React a fin de
          implementar todos los conocimientos que me han sido impartidos en las
          lectures y en los code reviews.En el día de la fecha
          (15/08/2023)comenzamos con los estilos.
          <br />
          <br />
          Luego de un largo esfuerzo pude poner en orden un poco la aplicacion (esto llegó a ser una suerte de diario o crónica del bootcamp, pienso corregir todo este texto al final y poner alguna otra cosa), en el dia de la fecha
          (18/09/2023), pude completar un poco más los estilos y corregir un par
          de errores.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};
export default About;
