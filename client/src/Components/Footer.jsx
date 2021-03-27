import { AiFillGithub, AiFillMail, AiOutlinePhone } from "react-icons/ai";


export default function Footer() {
        return (
<footer class="page-footer card-panel cyan darken-3" style={{position:"absolut", marginTop: 100}}>
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">BSALE</h5>
      <p class="grey-text text-lighten-4">Esta página fue desarrollada por Jairo M. Ponti</p>
    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Contacto:</h5>
      <ul>
        <li><a class="grey-text text-lighten-3" href="https://github.com/JairoPonti"><AiFillGithub className="grey-text text-darken-3 icon" /> GitHub</a></li>
        <li><a class="grey-text text-lighten-3" href="https://wa.me/5491131090584"><AiOutlinePhone className="grey-text text-darken-3 icon" /> WhatsApp</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © 2021 Copyright 
  <h6 class="grey-text text-lighten-4 right" style={{paddingRight: "95px"}}><AiFillMail className="grey-text text-darken-3 icon" /> jairomponti@gmail.com</h6>
  </div>
</div>
</footer>
        )
} 