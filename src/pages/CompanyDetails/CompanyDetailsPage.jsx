import React from "react";
import { CompanyDetailsStyles } from "./CompanyDetails";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CompanyDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Lodge Company Details</title>
        </Helmet>
        <CompanyDetailsStyles>
          <div className="companydetailsbox-1">
            <div className="companybox">
              <h2 className="companyboxheading" style={{ textAlign: "center" }}>
                {t("legalnotice")}
              </h2>
            </div>
            <div>
              <span className="companyboxtext">
                Les sites www.lodgeme.com et lodgeme.fr sont exploités par LODGE
                ME.
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">Entity</span>: &nbsp; LODGE ME
                SAS
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">
                  Numéro d’immatriculation
                </span>
                : &nbsp; 903 952 364 00052
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext"> Numéro de téléphone</span>:
                &nbsp; NEANT
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext"> Numéro de TVA</span>: &nbsp;
                FR71903952364
              </span>
            </div>
            <div>
              <ul className="contactlist">
                <span className="companysidetext">
                  Contacts pour le service clientèle :
                </span>
                <li>
                  Service client : &nbsp;
                  <a className="linkStyle" href="mailto:customer@lodgeme.com">
                    customer@lodgeme.com
                  </a>
                </li>
                <li>
                  Service facturation : &nbsp;
                  <a className="linkStyle" href="mailto:billing@lodgeme.com">
                    billing@lodgeme.com
                  </a>
                </li>
                <li>
                  Service assistance : &nbsp;
                  <a className="linkStyle" href="mailto:support@lodgeme.com">
                    support@lodgeme.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="companyboxtext">
                <span className="companysidetext">Hébergement du serveur</span>:
                &nbsp;OVH Groupe SA
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">Adresse du siège social</span>
                : &nbsp;2 rue Kellermann, 59100 Roubaix
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">
                  Numéro d’immatriculation
                </span>
                : &nbsp;537 407 926
              </span>
            </div>

            <div>
              <span className="companyboxtext">
                <span className="companysidetext">Numéro de téléphone</span>:
                &nbsp;08 203 203 63
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">Site Internet</span>:
                &nbsp;www.ovh.com
              </span>
            </div>
          </div>

          <div className="companydetailsbox-2">
            <div>
              <h2 className="companyboxheading">
                Marque, droits d’utilisation et de reproductions
              </h2>
            </div>
            <div>
              <span className="companyboxtext">
                Pour toute question relative à la marque LODGE ME, veuillez vous
                adresser à
                <a className="linkStyle" href="mailto:support@lodgeme.fr">
                  support@lodgeme.com
                </a>
              </span>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">
                  Questions de sécurité ou juridiques
                </span>
                : &nbsp; Veuillez adresser toutes vos questions à
                <a className="linkStyle" href="mailto:support@lodgeme.com">
                  support@lodgeme.com
                </a>
              </span>
            </div>

            <div>
              <a
                href="https://commission.europa.eu"
                className="linkStyle companyboxtext"
                target="_blank"
                rel="noreferrer"
              >
                https://commission.europa.eu
              </a>
            </div>
            <div>
              <span className="companyboxtext">
                <span className="companysidetext">Contenu illégal </span>:
                &nbsp; Si vous pensez qu’un contenu de notre site web enfreint
                la loi, veuillez nous envoyer un e-mail à{" "}
                <a className="linkStyle" href="mailto:support@lodgeme.com">
                  support@lodgeme.com
                </a>
                en expliquant le plus en détail possible pourquoi vous
                considérez que le contenu est illégal.
              </span>
            </div>

            <div>
              <span className="companyboxtext">
                * Veuillez également indiquer l’URL spécifique afin que nous
                puissions identifier le(s) contenu(s).
              </span>
            </div>
          </div>
          <div>
            <h3 className="companyboxheading">
              Législation sur les services numériques :
            </h3>
          </div>
          <div>
            <span className="companyboxtext">
              Au 25/11/2023, LODGE ME n’atteint pas le seuil mensuel moyen de 45
              millions de destinataires du service dans la zone euro calculé
              conformément au considérant 77 et à l’article 24(2) de la loi sur
              les services numériques (LSN). (DSA).
            </span>
          </div>
        </CompanyDetailsStyles>
      </HelmetProvider>
    </>
  );
};

export default CompanyDetailsPage;
