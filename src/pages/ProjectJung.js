import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Layout from "../Layout";
import NavBar from "../NavBar";

function ProjectJung() {
  return (
    <>
      <NavBar className={`navbar "navbar--visible" : "navbar--hidden"}`}>
        <ul className="navbar-list">
          <li><a href="#presentation">Présentation</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#parcours">Parcours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </NavBar>
      <br></br><br></br>
      <div className="project-page centered-content">
        <header className="project-header">
          <div className="title-logo">
            <div className="title-row">
              <Link to="/" className="back-button">
                <FaArrowLeft />
              </Link>
              <h1 className="project-title">
                Alternance - Expériences Professionnelles chez Jung Logistique
              </h1>
            </div>
            <img
              src="/imagesProjet/logoJungLogistique.png"
              alt="Logo Jung Logistique"
              className="project-logoJung centered-image"
            />
          </div>
        </header>
        <section className="project-presentation">
          <h2 className="section-title">Présentation des expériences chez Jung Logistique</h2>
          <br></br>
          <p>
            Durant mon année d'alternance chez Jung Logistique, j'ai été activement impliqué dans la modernisation et l'optimisation de plusieurs aspects de leur portail web dédié à la gestion logistique. Ce projet a permis d'appliquer mes compétences techniques dans un environnement professionnel concret.
          </p>
          <br></br><br></br>
          <h3>Mes principales réalisations :</h3>
          <br></br>
          <p>
            Mes contributions majeures se sont concentrées sur la migration d'anciennes vues et l'implémentation de nouvelles fonctionnalités pour améliorer l'efficacité opérationnelle.
          </p>
          <br></br>
          <ul className="indent-list">
            <li>La migration de deux vues essentielles de l'ancien portail (VBscript) vers une nouvelle architecture en C# .NET.</li>
            <li>Le développement de la logique et de l'interface utilisateur pour la gestion de la réception des chargements, notamment pour les clients Heineken et Kronenbourg.</li>
            <li>L'intégration de la fonctionnalité permettant de visualiser la liste des supports Heineken avec des paramètres de dates et la séparation des préparations (lots/messagerie).</li>
            <li>L'implémentation d'un système d'envoi automatique d'e-mails aux transporteurs lors de la sélection d'un chargement sur la nouvelle interface. (Note : cette page n'est pas présentée pour des raisons de confidentialité).</li>
            {/* Vous pouvez ajouter d'autres réalisations spécifiques ici */}
          </ul>
          <br></br><br></br>
          <p>
            Ces expériences m'ont permis de renforcer mes compétences en développement web (.NET, C#, HTML, CSS) et de comprendre les enjeux de la migration de systèmes existants tout en intégrant de nouvelles améliorations pour répondre aux besoins de l'entreprise.
          </p>
        </section>

        <section className="project-presentation">
          <h2 className="section-title">Aperçu des Vues Migrées et Fonctionnalités Développées</h2>
          <div className="subsection">
          <br></br>
            <br></br>
            <h3 className="subsection-title">Vue Facturation Kronenbourg</h3>
            <br></br>
            <p>
              Cette vue est une migration depuis l'ancien portail développé en VBscript vers une nouvelle interface en C# .NET. L'utilisateur renseigne une période (entre deux dates) pour visualiser les informations de facturation concernant les réceptions effectuées pour le client Heineken.
            </p>
            <br></br>
            <p>
              Le tableau affiché présente différentes informations clés telles que la référence de la réception, l'année du code, le fournisseur, le propriétaire, le motif, l'article, le lot, le nombre de palettes et la somme en valeur logistique (VL).

              Une fonctionnalité importante de cette vue est la possibilité pour l'utilisateur de télécharger ces données sous forme de fichier Excel (.xlsx) ou CSV (.csv) pour une analyse ou un traitement ultérieur.
            </p>
            <br></br><br></br>
            <img src="/imagesProjet/Capture Jung 1.png" alt="Vue de Facturation Réception Heineken" className="project-imageJung centered-image" />
          </div>

          <div className="subsection">
            <br></br><br></br><br></br>
            <h3 className="subsection-title">Vue Supports Heineken</h3>
            <br></br>
            <p>
            <br></br>
              Cette vue permet de visualiser la liste des supports logistiques préparés pour Heineken sur une période donnée, définie par une date de début et une date de fin.

              Une fonctionnalité clé que j'ai implémentée est la possibilité de filtrer l'affichage des préparations selon leur type d'expédition : 
            </p>
            <br></br>
            <ul className='indent-list'>
              <li><strong>Toutes les préparations : </strong> Affiche l'ensemble des supports préparés, qu'ils soient destinés à être expédiés par lots ou en messagerie.</li>
              <br></br>
              <li><strong>Préparations en messagerie : </strong> Concerne les expéditions de plus petite taille, souvent composées de colis individuels ou de petites quantités de marchandises, traitées par des transporteurs de messagerie.</li>
              <br></br>
              <li><strong>Préparations en lots : </strong> Désigne les expéditions plus importantes, généralement constituées de plusieurs palettes ou d'un volume conséquent de marchandises, souvent transportées par des camions complets ou partiels.</li>
            </ul>
            <br></br><br></br>
            <p>
              L'utilisateur peut ainsi choisir le type de préparation qu'il souhaite consulter en sélectionnant l'option correspondante avant de lancer la recherche. Le tableau résultant affichera ensuite les informations des supports logistiques correspondant au filtre appliqué pour la période spécifiée.
            </p>
            <br></br><br></br>
            <img src="/imagesProjet/Capture Jung 4.png" alt="Vue de Liste de Supports Heineken" className="project-imageJung centered-image" /> 
          </div>

          <div className="subsection">
          <br></br><br></br><br></br>
            <h3 className="subsection-title">Vue Série Atex</h3>
            <br></br>
            <p>
            <br></br>
              Cette vue dédiée aux statistiques Atex offre quatre méthodes de recherche pour analyser les données :          
            </p>
            <br></br>
            <ul className='indent-list'>
              <li><strong>Entre deux dates de création de préparation : </strong> Permet de filtrer les statistiques en fonction de la période durant laquelle les préparations ont été créées.</li>
              <br></br>
              <li><strong>Entre deux dates de validation de préparation : </strong> Affiche les statistiques des préparations validées sur une plage de dates spécifique.</li>
              <br></br>
              <li><strong>Entre deux dates de validation de chargement : </strong> Restreint les résultats aux préparations dont le chargement a été validé entre deux dates données.</li>
              <br></br>
              <li><strong>Par code destinataire de préparation : </strong> Permet de rechercher les statistiques en saisissant un code destinataire spécifique.</li>
            </ul>
            <br></br><br></br>
            <p>
              Une fois les critères de recherche sélectionnés et appliqués, un tableau s'affiche avec les informations suivantes pour chaque enregistrement Atex :          
            </p> 
            <br></br>
            <ul className='indent-list'>
              <li><strong>Année de préparation : </strong> L'année durant laquelle la préparation a été effectuée.</li>
              <li><strong>Numéro de préparation : </strong> Un identifiant unique attribué à chaque préparation.</li>
              <li><strong>Numéro de support : </strong> Le numéro d'identification du support logistique utilisé (par exemple, palette, conteneur).</li>
              <li><strong>Article : </strong> La référence ou le code de l'article préparé.</li>
              <li><strong>Numéro de série :</strong> Le numéro de série unique de l'article (si applicable).</li>
              <li><strong>Destinataire préparation : </strong> Le code ou le nom du destinataire de la préparation.</li>
              <li><strong>Numéro OV : </strong> Le numéro d'ordre de vente associé à la préparation.</li>
            </ul>
            <br></br><br></br>
            <img src="/imagesProjet/Capture Jung 2.png" alt="Vue de Statistiques Atex" className="project-imageJung centered-image" /> 
          </div>

          <div className="subsection">
          <br></br><br></br><br></br>
            <h3 className="subsection-title">Vue de l'État des Stocks</h3>
            <br></br>
            <p>
              Cette vue dynamique fournit un aperçu en temps réel de l'état des stocks pour l'
              <strong>activité et le dépôt actuellement sélectionnés via le menu de navigation situé en haut à droite de l'interface</strong>,
              à la date du <strong>2 mai 2025</strong>.
            </p>
            <br></br>
            <p>Les informations sont ensuite organisées par <strong>type de stockage</strong> :</p>
            <br></br>
            <ul className='indent-list'>
              <li>
                <strong>Stockage de masse :</strong> Présente les quantités stockées en vrac ou de manière non individualisée.
              </li>
              <br></br>
              <li>
                <strong>Stockage au sol :</strong> Indique les quantités entreposées directement sur le sol.
              </li>
              <br></br>
              <li>
                <strong>Stockage standard :</strong> Affiche les quantités stockées sur des supports standardisés, comme des palettes (dans cet exemple, on voit le type de support
                <strong>EURO</strong> et <strong>1000x1200</strong>).
              </li>
              <br></br>
              <li>
                <strong>Stockage picking :</strong> Montre les quantités disponibles pour le prélèvement (picking).
              </li>
            </ul>
            <br></br><br></br>
            <p>Pour chaque type de stockage et chaque produit, les informations suivantes sont affichées :</p>
            <br></br>
            <ul className='indent-list'>
              <li>
                <strong>Code Propriétaire :</strong> Le code identifiant le propriétaire du stock.
              </li>
              <li>
                <strong>Propriétaire :</strong> Le nom du propriétaire du stock.
              </li>
              <li>
                <strong>Type de support :</strong> Le type de support logistique utilisé pour le stockage (par exemple, EURO, 1000x1200).
              </li>
              <li>
                <strong>Quantité en stock :</strong> Le nombre d'unités ou de supports actuellement en stock.
              </li>
              <li>
                <strong>Quantité en équiv. EPR 80 :</strong> La quantité convertie en équivalent EUR palette 80x120 (une unité de mesure standard pour les palettes), permettant une comparaison homogène des volumes de stockage.
              </li>
            </ul>
            <br></br><br></br>
            <p>En bas de la page, des <strong>totaux</strong> pour le dépôt sélectionné sont affichés :</p>
            <br></br>
            <ul className='indent-list'>
              <li>
                <strong>Total sur le dépôt :</strong> Le nombre total d'unités ou de supports en stock dans le dépôt.
              </li>
              <li>
                <strong>Nombre de support total :</strong> Le nombre total de supports logistiques utilisés dans le dépôt.
              </li>
              <li>
                <strong>Nombre de support total équivalent EPR 80 :</strong> Le volume total de stock converti en équivalent EUR palettes 80x120 pour l'ensemble du dépôt.
              </li>
            </ul>
            <br></br>
            <p>
              Comme pour les autres vues, l'utilisateur a la possibilité de télécharger ces informations au format Excel (.xlsx) ou CSV (.csv) pour une analyse plus poussée ou un suivi.
            </p>
            <br></br><br></br>
            <img src="/imagesProjet/Capture Jung 3.png" alt="Vue de l'État des Stocks" className="project-imageJung centered-image" />
          </div>
          <br></br><br></br><br></br>
          <div className="subsection">
            <h3 className="subsection-title">Automatisation des Mails aux Transporteurs</h3>
            <p className="subsection-description">
            <br></br>
              Dans le cadre de mes responsabilités, j'ai conçu et développé une fonctionnalité permettant d'optimiser la communication avec les transporteurs. Cette interface offre la possibilité de visualiser une liste des chargements disponibles et, par une sélection ciblée, d'initier l'envoi automatique d'e-mails aux transporteurs concernés. Ce processus permet de rationaliser la diffusion des informations relatives aux chargements et de faciliter l'organisation du transport. 
              </p>
              <br></br>
              <p><strong>**Pour des raisons de confidentialité, la présentation visuelle de cette page spécifique n'est pas possible.**</strong></p>
            <br></br><br></br><br></br>
              <img src="/imagesProjet/Capture Jung 5.png" alt="Vue de l'État des Stocks" className="project-imageJung centered-image" />
            <br></br>
          </div>

        </section>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <footer className="portfolio-footer">
        <p>© 2025 Hoffer Mickael. Tous droits réservés.</p>
        <div className="socials-footer">
          <a href="https://github.com/mickaaa67" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mickael-hoffer-906a072aa/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:mickael.hoffer@gmail.com" className="email-icon">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </>
  );
}

export default ProjectJung;