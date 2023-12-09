import { FooterStyles } from "./FooterStyles";
import {
  MdOutlineLanguage,
  MdOutlineEuro,
  MdOutlineFacebook,
} from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaSnapchatGhost } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterStyles>
      <div className="footer_grids">
        <div className="footer_grid">
          <div>
            <span className="footer_heading"> {t("assistance")}</span>
          </div>
          <div>
            <span className="footer_subheading">Centre d'aide</span>
          </div>
          <div>
            <span className="footer_subheading">AirAssur</span>
          </div>
          <div>
            <span className="footer_subheading">
              Lutte contre la discrimination
            </span>
          </div>
          <div>
            <span className="footer_subheading">Assistance handicap</span>
          </div>
          <div>
            <span className="footer_subheading">Options d'annulation</span>
          </div>
          <div>
            <span className="footer_subheading">
              J'ai un problème de voisinage
            </span>
          </div>
        </div>

        <div className="footer_grid">
          <div>
            <span className="footer_heading">Accueil de voyageurs</span>
          </div>
          <div>
            <span className="footer_subheading">
              Mettez votre logement sur LODGE ME
            </span>
          </div>
          <div>
            <span className="footer_subheading">AirAssur pour les hôtes</span>
          </div>
          <div>
            <span className="footer_subheading">Ressources pour les hôtes</span>
          </div>
          <div>
            <span className="footer_subheading">Forum de la communauté</span>
          </div>
          <div>
            <span className="footer_subheading">Hébergement responsable</span>
          </div>
        </div>

        <div className="footer_grid">
          <div>
            <span className="footer_heading">LODGE ME</span>
          </div>
          <div>
            <span className="footer_subheading">Newsroom</span>
          </div>
          <div>
            <span className="footer_subheading">Nouvelles fonctionnalités</span>
          </div>
          <div>
            <span className="footer_subheading">Carrières</span>
          </div>
          <div>
            <span className="footer_subheading">Investisseurs</span>
          </div>
          <div>
            <span className="footer_subheading">Cartes cadeaux </span>
          </div>
          <div>
            <span className="footer_subheading">
              Séjours d'urgence Lodgeme.org
            </span>
          </div>
        </div>
      </div>

      <div className="footer_copyright">
        <div className="footer_center">
          <Link to="/company-details" className="linkStyle footer_centertext">
            © 2023 LODGE ME SAS
          </Link>
          <Link
            to="/conditions-general"
            className="linkStyle footer_centertext"
          >
            Conditions généralés
          </Link>
          <Link className="linkStyle footer_centertext">Plan du site</Link>
          <Link className="linkStyle footer_centertext">Confidentialité</Link>
          <Link className="linkStyle footer_centertext">
            Vos choix en matiére de Confidentialité
          </Link>
        </div>

        <div className="footer_socialicons">
          <div className="footer_socialiconbox">
            <MdOutlineLanguage className="social_icon" />
            <span>Francais</span>
          </div>
          <div className="footer_socialiconbox">
            <MdOutlineEuro className="social_icon" />
            <span>EUR</span>
          </div>
          <div className="footer_socialiconbox">
            <a
              rel="noreferrer"
              href="https://wa.me/message/YG2MBYFDQKHTN1?text=I%27d%20like%20to%20chat%20with%20you%20to%20know%20about%20Lodgeme%20facilities"
            >
              <IoLogoWhatsapp className="social_icon" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/fr.lodgeme"
              target="_blank"
            >
              <MdOutlineFacebook className="social_icon" />
            </a>
            <a
              rel="noreferrer"
              href="https:/www.x.com/lodgemefr"
              target="_blank"
            >
              <RiTwitterXFill className="social_icon" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/lodgemefr"
              target="_blank"
            >
              <FaInstagramSquare className="social_icon" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.snapchat.com/lodgeme"
              target="_blank"
            >
              <FaSnapchatGhost className="social_icon" />
            </a>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

/**
 Facebook : www.facebook.com/fr.lodgeme 
X : www.x.com/lodgemefr
LinkedIn : www.linkedin.com/lodgeme
Snapchat : www.snapchat.com/lodgeme
Instagram : www.instagram.com/lodgemefr 
 */

/**
  <FooterStyles>
      <div className="footer_contents">
        <div className="footer_grids">
          <div className="footer_grid1">
            <span>A Propos</span>
            <article>
              Et ullamcorper id dolor molestie aliquet eget. Duis ornare velit
              ipsuporttitor pretium et. Cursus etiam turpis ac felis, congue.
            </article>
            <span>Links Social</span>
          </div>
          <div className="footer_grid1">
            <span>Accueil de voyageurs</span>
            <li>Option d’annulation</li>
            <li>Resources</li>
            <li>Forum</li>
            <li>Aide</li>
          </div>
          <div className="footer_grid1">
            <span>Accueil de voyageurs</span>
            <li>Career</li>
            <li>About Us</li>
            <li>Amenities</li>
            <li>Services</li>
          </div>
          <div className="footer_grid1">
            <div>
              <span>Avez vous une question?</span>
            </div>
            <div className="footer-grid4-box">
              <div className="flex-gap10">
                <span>
                  <RiMapPin2Fill className="footer_icons" />
                </span>
                <span>263 santa marina, san Fransisco, California, USA</span>
              </div>
              <div className="flex-gap10">
                <span>
                  <IoCallSharp className="footer_icons" />
                </span>
                <span>000785665323</span>
              </div>
              <div className="flex-gap10">
                <span>
                  <IoMail className="footer_icons" />
                </span>
                <span> infos@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr className="footer_width" />
        </div>

        <div className="flex-center">
          <span className="footer_copyright">
            Copyright © 2023 Logde-me. Tout droit reservé
          </span>
        </div>
      </div>
    </FooterStyles>
 */
